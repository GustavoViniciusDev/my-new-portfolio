import { chromium } from "@playwright/test"

const baseURL = process.env.PORTFOLIO_URL ?? "http://127.0.0.1:3000"
const viewports = [390, 768, 1440]
const browser = await chromium.launch({ headless: true })
const context = await browser.newContext()
const errors = []

for (const width of viewports) {
  const page = await context.newPage()
  await page.setViewportSize({ width, height: 900 })
  page.on("pageerror", (error) => errors.push(`${width}px pageerror: ${error.message}`))
  page.on("console", (message) => {
    if (message.type() === "error") errors.push(`${width}px console: ${message.text()}`)
  })

  await page.goto(baseURL, { waitUntil: "domcontentloaded", timeout: 15000 })
  await page.locator(".hero h1").waitFor({ state: "visible" })
  await page.waitForTimeout(1600)
  for (let y = 0; y < await page.locator("body").evaluate((el) => el.scrollHeight); y += 650) {
    await page.evaluate((scrollY) => window.scrollTo(0, scrollY), y)
    await page.waitForTimeout(170)
  }
  await page.evaluate(() => window.scrollTo(0, 0))
  await page.waitForTimeout(250)

  const metrics = await page.evaluate(() => {
    const rect = (selector) => {
      const el = document.querySelector(selector)
      if (!el) return null
      const { x, y, width, height } = el.getBoundingClientRect()
      return { x: Math.round(x), y: Math.round(y), width: Math.round(width), height: Math.round(height) }
    }
    const hiddenReveals = [...document.querySelectorAll("[data-reveal]")].filter((el) => getComputedStyle(el).opacity === "0").length
    return {
      viewport: innerWidth,
      documentWidth: document.documentElement.scrollWidth,
      horizontalOverflow: document.documentElement.scrollWidth > innerWidth,
      hiddenReveals,
      hero: rect(".hero"),
      title: rect(".hero h1"),
      firstName: rect(".name-gustavo > span"),
      lastName: rect(".name-vinicius > em"),
      flow: rect(".hero-flow"),
      projectCount: document.querySelectorAll(".project").length,
      appImages: document.querySelectorAll(".phone img").length,
    }
  })

  if (metrics.horizontalOverflow) errors.push(`${width}px horizontal overflow: ${metrics.documentWidth}px`)
  for (const [label, textRect] of [["first name", metrics.firstName], ["last name", metrics.lastName]]) {
    if (textRect && metrics.flow && textRect.x < metrics.flow.x + metrics.flow.width && textRect.x + textRect.width > metrics.flow.x && textRect.y < metrics.flow.y + metrics.flow.height && textRect.y + textRect.height > metrics.flow.y) {
      errors.push(`${width}px hero flow overlaps ${label}`)
    }
  }
  if (metrics.hiddenReveals) errors.push(`${width}px hidden reveal elements: ${metrics.hiddenReveals}`)
  if (metrics.projectCount !== 5) errors.push(`${width}px expected 5 project entries, found ${metrics.projectCount}`)

  if (width < 700) {
    const menuButton = page.locator(".menu-button")
    await menuButton.focus()
    await page.keyboard.press("Enter")
    if (await menuButton.getAttribute("aria-expanded") !== "true") errors.push(`${width}px mobile menu did not open via keyboard`)
    await page.keyboard.press("Escape")
    if (await menuButton.getAttribute("aria-expanded") !== "false") errors.push(`${width}px Escape did not close mobile menu`)
  }

  await page.screenshot({ path: `/tmp/portfolio-${width}.png`, fullPage: true, animations: "disabled" })
  console.log(JSON.stringify(metrics))
  await page.close()
}

const reducedPage = await context.newPage()
await reducedPage.setViewportSize({ width: 390, height: 844 })
await reducedPage.emulateMedia({ reducedMotion: "reduce" })
await reducedPage.goto(baseURL, { waitUntil: "domcontentloaded", timeout: 15000 })
await reducedPage.locator(".hero h1").waitFor({ state: "visible" })
await reducedPage.waitForTimeout(100)
const reduced = await reducedPage.evaluate(() => ({
  revealsVisible: [...document.querySelectorAll("[data-reveal]")].every((el) => getComputedStyle(el).opacity !== "0"),
  titleVisible: getComputedStyle(document.querySelector(".name-gustavo span")).transform === "none",
}))
if (!reduced.revealsVisible || !reduced.titleVisible) errors.push(`reduced-motion content issue: ${JSON.stringify(reduced)}`)
console.log(JSON.stringify({ reducedMotion: reduced, errors }))
await browser.close()
if (errors.length) process.exitCode = 1
