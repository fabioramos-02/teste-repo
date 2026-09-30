---
name: especificar
description: Etapa 1 da esteira spec-driven. Transforma uma demanda solta em spec.md (a fonte da verdade) com objetivo, escopo e critérios de aceite testáveis. Use ao iniciar uma feature nova.
---

# /especificar — Etapa 1 da esteira

Transforma demanda solta em **spec** rastreável.

**Lê:** demanda do usuário (texto).
**Produz:** `specs/NNNN-<slug>/spec.md` (base: `specs/_templates/spec.md`).

## Passos
1. Pergunte só o crítico (máx. 3): problema real (não a solução pedida), escopo, restrições.
2. Crie `specs/NNNN-<slug>/` (NNNN = próximo número sequencial).
3. Preencha o template: objetivo único, escopo (inclui/não inclui), AC testáveis.
4. Não invente requisito. Faltou info → registre como suposição explícita.

## Pronto quando
- [ ] objetivo mensurável
- [ ] escopo delimitado
- [ ] ≥ 1 AC por comportamento, todos verificáveis

Próxima etapa: `/planejar`.
