import { NextResponse } from "next/server"
import nodemailer from "nodemailer"

type ContactPayload = {
  name: string
  email: string
  message: string
}

export async function POST(req: Request) {
  let data: ContactPayload
  try {
    data = await req.json()
  } catch {
    return NextResponse.json({ error: "JSON inválido." }, { status: 400 })
  }

  const { name, email, message } = data

  if (!name?.trim() || !email?.trim() || !message?.trim()) {
    return NextResponse.json({ error: "Preencha todos os campos obrigatórios." }, { status: 400 })
  }

  // transporter SMTP
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.CONTACT_EMAIL_USER,
      pass: process.env.CONTACT_EMAIL_PASS,
    },
  })

  try {
    await transporter.sendMail({
      from: `"Contato" <${process.env.CONTACT_EMAIL_USER}>`,
      to: process.env.CONTACT_EMAIL_TO || process.env.CONTACT_EMAIL_USER,
      replyTo: email,
      subject: `Novo contato do site – ${name}`,
      text: `Nome: ${name}\nE-mail: ${email}\n\nMensagem:\n${message}`,
      html: `
        <h2>Novo contato do site</h2>
        <p><strong>Nome:</strong> ${name}</p>
        <p><strong>E-mail:</strong> ${email}</p>
        <p><strong>Mensagem:</strong></p>
        <p>${message.replace(/\n/g, "<br/>")}</p>
      `,
    })

    return NextResponse.json({ ok: true })
  } catch (err) {
    console.error("Erro ao enviar e-mail:", err)
    return NextResponse.json({ error: "Falha ao enviar e-mail." }, { status: 500 })
  }
}
