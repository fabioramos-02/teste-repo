---
name: planejar
description: Etapa 2 da esteira spec-driven. Converte spec.md em plano.md — arquitetura, árvore de arquivos e contratos — respeitando o preset, o princípio de responsabilidade única e o limite de 250 linhas por arquivo. Use depois de /especificar.
---

# /planejar — Etapa 2 da esteira

Desenha COMO construir, antes de escrever código.

**Lê:** `specs/NNNN-<slug>/spec.md` + `.esteira/preset.json` (linguagem/stack).
**Produz:** `specs/NNNN-<slug>/plano.md` (base: `specs/_templates/plano.md`).

## Passos
1. Leia a spec e o preset.
2. Liste 2–3 abordagens viáveis com tradeoffs (complexidade, manutenção, performance). Escolha UMA, justifique no contexto do preset e dos ACs, registre em "Decisão arquitetural / riscos" do plano.
3. Defina camadas e a árvore de arquivos — cada arquivo com 1 responsabilidade e ≤ 250 linhas.
4. Para cada arquivo: responsabilidade + entrada → saída.
5. Defina ordem de execução e riscos. Inclua o raciocínio da abordagem escolhida vs. descartadas.

## Pronto quando
- [ ] todo AC da spec coberto por algum arquivo
- [ ] nenhum arquivo planejado tende a passar de 250 linhas
- [ ] contratos sem ambiguidade para implementar

Anterior: `/especificar` · Próxima: `/implementar`.
