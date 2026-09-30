# teste-repo

teste-repo

Projeto criado pelo template **Next + DS XVIA** do Backstage da SETDIG.
Dúvidas sobre o Design System: guia **guia-ds-xvia** na aba *Docs* do Backstage.

## Rodar

Precisa estar na rede do governo (ou VPN) com o token do `gitlabs.ms.gov.br` no seu `~/.npmrc`
(passo a passo no guia do DS, página *Instalação*).

```bash
npx.cmd -y pnpm@10 install
```

```bash
npx.cmd -y pnpm@10 dev
```

Abra http://localhost:3000.

## Publicar no GitHub Pages com senha

```bash
setx SITE_SENHA "senha-do-site"
```

Feche e abra o terminal (o `setx` só vale em terminal novo) e rode:

```bash
npx.cmd -y pnpm@10 run deploy
```

Site: https://fabioramos-02.github.io/teste-repo/

## Como trabalhar

Toda funcionalidade passa pela esteira spec-driven no Claude Code:
`/especificar` → `/planejar` → `/implementar` → `/validar` (ou `/esteira` de ponta a ponta).
Regras em `CLAUDE.md`. O jeito certo de usar o DS está na skill `design-system-xvia`.
