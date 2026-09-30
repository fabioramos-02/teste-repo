---
name: design-system-xvia
description: Usa o Design System MS da plataforma XVIA (@plataforma-xvia/ds-react, ds-tokens, ds-core, ds-icons) em projeto Next/React — layout com CSS crítico, Server × Client, tokens --ds-*, cards, carrossel, filtro, deploy no Pages. Dispara em "ds-react", "plataforma-xvia", "design system xvia", "DsCard", "DsCarousel", "componente do DS MS", "template next ds xvia", ou ao criar/alterar página em projeto que tenha @plataforma-xvia no package.json.
---

# design-system-xvia

DS oficial do Portal MS feito pela XVIA. Storybook: https://designsystem.digital.ms.gov.br
Guia completo (instalação, receitas, erros): TechDocs **guia-ds-xvia** no Backstage (`Projetos\backstage-poc\guias\ds-xvia`).
Projeto novo: template **Next + DS XVIA** no Backstage (já vem com tudo abaixo).
Pacote público `@design-system-ms/ds-sis` é outro DS → [[design-system-ms]].

## Instalação (privada)

- Registry do gitlabs: `.npmrc` do projeto tem `@plataforma-xvia:registry=https://gitlabs.ms.gov.br/api/v4/groups/3661/-/packages/npm/`.
- Token **Legacy** `read_api` em `GITLAB_MS_NPM_TOKEN` (via `setx`) + no `~/.npmrc` do usuário: `//gitlabs.ms.gov.br/:_authToken=${GITLAB_MS_NPM_TOKEN}`. Nunca no repo.
- Precisa de rede do governo/VPN. Instalar com `npx.cmd -y pnpm@10 install` (Windows).

## Pacotes e entradas

| Import | Para quê |
|---|---|
| `@plataforma-xvia/ds-react/server` | Server Component (padrão). Já hidrata no navegador: carrossel, navbar funcionam |
| `@plataforma-xvia/ds-react` | Só em `"use client"` com estado/evento (`onDsX`). Nunca importar o mesmo componente das duas entradas |
| `@plataforma-xvia/ds-tokens/css-text` | `DS_TOKENS_CSS`, `DS_THEMES_CSS` (string) |
| `@plataforma-xvia/ds-core/fallback-css` | `DS_FALLBACK_CSS` |
| `@plataforma-xvia/ds-icons` | Nomes de ícone: `ICON_PATHS` em `dist/index.d.ts` (ex.: `mail`, `whatsapp`, `users`, `shield`, `id-card`, `medkit`, `car`, `book`) |

`next.config.ts`: `serverExternalPackages: ["@plataforma-xvia/ds-core"]`.

## Layout padrão

- `<style dangerouslySetInnerHTML={{ __html: TOKENS + THEMES + FALLBACK }} />` no `<head>`.
- `DsAccessibilityBar` → `DsHeader` (marca no `slot="brand"`) → `DsNavbar autoCurrent` → `<main id="conteudo">` → `DsFooter id="rodape"`.
- Props de lista são **JSON string** (`items`, `navItems`, `columns`, `links`).
- `app.css` em `@layer app` (ordem `ds.primitives, ds.semantic, ds.theme, app`) e só tokens.
- Links internos via `href()` (prefixa `NEXT_PUBLIC_BASE_PATH`): os `<a>` do DS não recebem o basePath sozinhos.
- Nome oficial no rodapé: **Secretaria-Executiva de Transformação Digital — SETDIG**.

## Tokens (conferir em `ds-tokens/dist/ds-semantic.css`)

Superfície `--ds-color-surface`, `-surface-muted`, `-surface-strong` · texto `--ds-color-text-default`, `-text-muted` · link `--ds-color-link` · borda `--ds-color-border` · ação `--ds-color-action-bg`, `-action-fg` · foco `--ds-color-focus` · marca `--ds-color-brand-fg` · status `--ds-color-status-*-bg/-fg` · espaço `--ds-space-1..8` · raio `--ds-radius-*` · texto `--ds-text-*-size`.
**Não existe** `--ds-color-primary` semântico: usar `action-*`.

## Componentes (34)

AccessibilityBar, Accordion(+Item), Badge, Breadcrumb, Button, Card, Carousel, Checkbox, Combobox, EntryList, Feedback, FilterGroup (grupo de filtro lateral, não chips), Footer, Header, Icon, Link, LinkCard, Menu, Navbar, NewsCard, PageHeader, Pagination, Radio, Rating, Search, SectionHeading, Select, ServiceCard, ShortcutCard, Stat, Steps (`items` JSON `[{title, description}]`), Switch, Tile.
`DsCard`: `heading`, `headingLevel`, `icon`, `tone` (neutral/primary/success/warning/danger/info), slot `footer`. `DsButton`: `href`, `variant` (primary/secondary/ghost/danger/success), `icon`, `iconPosition`, `fullWidth`, `target`, `rel`.

## Receitas

- **Botões alinhados em grade de cards:** botão dentro de `<div slot="footer" className="acoes">` + CSS `.grid > ds-card > .card { height: 100% }` (o card já é flex coluna com corpo `flex-grow:1`).
- **Carrossel com altura igual e centralizado:** cada item num `<div className="slide">` (display grid, **sem** `height`) + `.trilha .carousel__track { align-items: stretch; justify-content: safe center }`.
- **Filtro por chips sem JS:** `<fieldset>` com `<input type="radio" name="x" value="Y">` + `<style>` gerado: `.bloco:has(input[value="Y"]:checked) [data-x]:not([data-x="Y"]){display:none}`.
- **Setas do carrossel após filtrar:** o carrossel só recalcula ao rolar → no `change`, `track.scrollLeft = 0; track.dispatchEvent(new Event("scroll"))`.
- **mailto com cópia:** `mailto:${para}?cc=${lista}&subject=${encodeURIComponent(..)}&body=${encodeURIComponent(..)}` (limite ~2000 caracteres).

## Gotchas reais

- `textContent` de componente pode vir vazio antes de hidratar; o visível (`innerText`) está certo.
- Dev server guarda JSON lido com `readFileSync` no módulo: mudou o JSON → reiniciar `pnpm dev`.
- `<img>` com SVG estático no export: silenciar `@next/next/no-img-element` com justificativa.
- Classes internas (`.card`, `.carousel__track`) podem mudar em versão nova do DS: marcar com comentário `ponytail:`.
- Deploy Pages com senha (StatiCrypt): `SITE_SENHA` via `setx` só vale em terminal aberto depois.

## Lacunas (levar à XVIA)

Sem `input` de texto (usar nativo + tokens), alerta/toast (`DsCard tone` + `aria-live`), tabela (lista de cards), modal (`DsCard` + `role="alertdialog"`).

## Pronto quando

- Só imports `@plataforma-xvia/*`, nenhum hex/px de cor no CSS próprio (`grep "#[0-9a-fA-F]\{3,6\}" app/*.css` vazio).
- `pnpm build` e `pnpm lint` limpos; sem scroll horizontal em 375px; WCAG AA.
