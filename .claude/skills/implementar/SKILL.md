---
name: implementar
description: Etapa 3 da esteira spec-driven. Escreve o código seguindo plano.md, o Design System do governo e os comandos do preset, mantendo SRP e 250 linhas por arquivo. Use depois de /planejar.
---

# /implementar — Etapa 3 da esteira

Escreve código fiel ao plano.

**Lê:** `specs/NNNN-<slug>/plano.md` + `.esteira/preset.json`.
**Produz:** código no projeto.

## Regras
- Siga a árvore e os contratos do plano. Precisou desviar → atualize o plano antes.
- 1 responsabilidade por arquivo, ≤ 250 linhas.
- Design System XVIA (`preset.ds = "xvia-react"`): siga a skill `design-system-xvia`.
  - Server Component → `@plataforma-xvia/ds-react/server`; com estado/evento → `@plataforma-xvia/ds-react`.
  - **nunca** hardcode cor/espaçamento: só tokens `--ds-*`.
- Ao final, rode `preset.comandos.check`.

## Pronto quando
- [ ] todos os arquivos do plano implementados
- [ ] `check` passa
- [ ] sem hardcode de DS

Anterior: `/planejar` · Próxima: `/validar`.
