# teste-repo — convenções do projeto

Projeto gov MS estruturado com a **esteira spec-driven** (preset: `app` — Next + DS XVIA).

## Fluxo de trabalho
Toda feature passa pela esteira (skills em `.claude/skills/`):

`/especificar` → `/planejar` → `/implementar` → `/validar`

Ou rode `/esteira` para tocar tudo de ponta a ponta. Os artefatos ficam em
`specs/NNNN-<slug>/` (`spec.md`, `plano.md`, `validacao.md`). **A spec é a fonte da verdade** —
o código deriva dela, não o contrário.

## Regras
- **SRP:** 1 arquivo = 1 responsabilidade.
- **Máx 250 linhas por arquivo.**
- **Design System gov:** DS XVIA (`@plataforma-xvia/ds-react`) — siga a skill `design-system-xvia`
  (`.claude/skills/design-system-xvia/SKILL.md`). Nunca hardcode de cor/espaçamento: só tokens `--ds-*`.
- Conventional Commits, GitHub Flow.
- Código e comunicação em pt-BR.

## Preset
Stack, linguagem e comandos (`check`/`lint`/`test`) ficam em `.esteira/preset.json`.
Os agentes leem esse arquivo para se adaptar à linguagem/escopo do projeto.
