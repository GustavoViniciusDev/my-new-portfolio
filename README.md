# Gustavo Vinicius — Portfolio

Portfólio pessoal de Gustavo Vinicius, Senior Software Engineer. O site apresenta experiência em backend, desenvolvimento full stack, arquitetura e evolução de sistemas em produção.

## Conteúdo

- Cases de Alexandria Energia, Líder Lex, Cliente Lex, Transactional Wallet e Solis Educacional.
- Capturas oficiais da App Store dos aplicativos Lex, armazenadas localmente em WebP.
- Diagramas conceituais para fluxos de backend, modernização de serviços e transações financeiras. Os diagramas não representam interfaces reais de sistemas internos.
- Conteúdo em português, com alternativa em inglês.
- Animações com suporte a `prefers-reduced-motion`, navegação por teclado e metadados Open Graph.
- Ano de copyright atualizado automaticamente no rodapé.

## Requisitos

- Node.js 20.9 ou superior.
- npm (ou pnpm via Corepack).

## Desenvolvimento

```bash
npm install
npm run dev
```

Abra [http://localhost:3000](http://localhost:3000).

## Verificações

```bash
npx tsc --noEmit
npm run lint
npm run build
npm audit
```

Também há um lockfile pnpm. Para auditar essa árvore de dependências:

```bash
corepack pnpm install
corepack pnpm audit
```

## Auditoria de interface

Instale o Chromium do Playwright uma vez:

```bash
npx playwright install chromium
```

Com o servidor de desenvolvimento rodando em outro terminal:

```bash
npm run audit:ui
```

O script verifica os viewports de 390px, 768px e 1440px, overflow horizontal, elementos revelados, navegação mobile por teclado, `prefers-reduced-motion` e erros no console. Salva capturas de auditoria em `/tmp/portfolio-<largura>.png`. Para usar outra URL, defina `PORTFOLIO_URL`.

## Tecnologias

Next.js App Router, React, TypeScript, Tailwind CSS 4, Lucide, ESLint e Playwright.

## Contato

- [LinkedIn](https://www.linkedin.com/in/gustavoviniciusdev/)
- [GitHub](https://github.com/GustavoViniciusDev)
- [E-mail](mailto:contato.gustavoln@gmail.com)

## Licença

O repositório não contém atualmente um arquivo `LICENSE`; nenhuma licença de uso está declarada.
