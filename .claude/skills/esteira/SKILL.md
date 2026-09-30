---
name: esteira
description: Orquestrador da esteira spec-driven. Encadeia as 4 etapas (especificar → planejar → implementar → validar) com handoff via arquivos. Use para tocar uma feature de ponta a ponta.
---

# /esteira — Orquestrador

Roda a esteira inteira, com handoff explícito via arquivos em `specs/NNNN-<slug>/`.

## Fluxo
1. `/especificar` → `spec.md`
2. `/planejar` → `plano.md` (só começa com a spec pronta)
3. `/implementar` → código (só começa com o plano pronto)
4. `/validar` → `validacao.md` (confronta com a spec)

## Regras
- Não pule etapa: cada uma só inicia quando a anterior entregou seu artefato.
- Se `/validar` reprovar, volte à etapa apontada no veredito e reexecute dali.
- Não duplique conteúdo entre etapas — cada artefato é a fonte da etapa seguinte.
- Pare e peça confirmação ao usuário antes de decisões irreversíveis.
