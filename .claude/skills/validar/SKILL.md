---
name: validar
description: Etapa 4 da esteira spec-driven. Confronta o código com a spec e os gates de qualidade (AC, lint, test, limite de 250 linhas, uso correto do Design System) e gera validacao.md. Use por último.
---

# /validar — Etapa 4 da esteira

Confere se o código cumpre a spec.

**Lê:** `specs/NNNN-<slug>/spec.md` + código + `.esteira/preset.json`.
**Produz:** `specs/NNNN-<slug>/validacao.md` (base: `specs/_templates/validacao.md`).

## Passos
1. Marque cada AC da spec como OK/NOK com evidência.
2. Rode os gates: `preset.comandos.lint`, `preset.comandos.test`, limite de 250 linhas.
3. Cheque DS: sem cor/espaçamento hardcoded.
3.5. Registre dívida técnica: o que foi simplificado, o que quebraria com escala, o que o próximo dev não deve tocar sem contexto.
4. Veredito: APROVADO só se todos os AC e gates passam.

## Pronto quando
- [ ] todos os AC OK
- [ ] lint + test + limite de 250 OK
- [ ] veredito escrito

Anterior: `/implementar`. Se REPROVADO → volte à etapa indicada no veredito.
