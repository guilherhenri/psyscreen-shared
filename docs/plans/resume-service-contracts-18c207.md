# Plano de Implementação - Resume Service Contracts

## 1. Entendimento do Requisito

- **Resumo**: Adicionar contratos TypeScript para o serviço de resumes seguindo os padrões existentes no monorepo
- **Objetivos técnicos**: Criar interfaces, tipos de resposta, códigos de erro e tópicos para operações de upload e confirmação de resumes
- **Objetivos de negócio**: Estabelecer contratos tipados para comunicação entre serviços de manejo de resumes
- **Requisitos não-funcionais**:
  - Performance: Tipagem estática para validação em tempo de compilação
  - Segurança: Validação de tipos de arquivo e estrutura de dados
  - Escalabilidade: Contratos reutilizáveis e extensíveis

## 2. Análise do Codebase Atual

- **Arquivos afetados**:
  - `packages/contracts/src/index.ts` - Adicionar export do novo módulo
  - `packages/contracts/src/resumes/` - Novo diretório com contratos
  - `packages/contracts/src/resumes/index.ts` - Export central do módulo
  - `packages/contracts/src/resumes/commands/` - Comandos de operações
  - `packages/contracts/src/resumes/results/` - Tipos de resposta
  - `packages/contracts/src/resumes/errors.ts` - Códigos de erro específicos
  - `packages/contracts/src/resumes/topics.ts` - Tópicos de mensageria

- **Padrões de arquitetura usados**:
  - Estrutura por domínio (auth/, gateway/, common/)
  - Separação de commands, results, errors e topics
  - Uso de ServiceResult<T, L> para respostas padronizadas
  - Enums para códigos de erro e tópicos
  - Extensão de GlobalErrorCodes para erros comuns

- **Dependências identificadas**:
  - TypeScript para tipagem estática
  - @psyscreen/config para configurações compartilhadas
  - Estrutura existente de ServiceResult do common/results

- **Pontos de risco/acoplamento**:
  - Consistência na nomenclatura dos tópicos (pattern: domain.command.action)
  - Reutilização adequada dos GlobalErrorCodes
  - Manutenção da estrutura de exports no index.ts principal

## 3. Design Proposto

- **Arquitetura da solução**: Criar módulo `resumes/` seguindo padrão estabelecido pelo módulo `auth/`

- **Decisões de design e trade-offs**:
  - Manter estrutura consistente com auth/ para familiaridade
  - Usar ServiceResult em vez de Response/ErrorResponse customizados
  - Extrair códigos de erro para enum específico do domínio
  - Seguir padrão de nomenclatura de tópicos existente

- **Diagrama textual**:
```
packages/contracts/src/
├── index.ts (modificado)
├── resumes/ (novo)
│   ├── index.ts
│   ├── commands/
│   │   ├── confirm-resume-upload.command.ts
│   │   └── generate-resume-signed-url.command.ts
│   ├── results/
│   │   ├── confirm-resume-upload.result.ts
│   │   └── generate-resume-signed-url.result.ts
│   ├── errors.ts
│   └── topics.ts
```

- **Padrões a serem aplicados**:
  - Interface para comandos com propriedades obrigatórias
  - ServiceResult<T, ErrorCode> para respostas
  - Enums para códigos de erro específicos do domínio
  - Export centralizado através de index.ts

## 4. Implementação - Fases Incrementais

### Fase 1: Estrutura Base
1. Criar diretório `packages/contracts/src/resumes/`
2. Criar arquivo `packages/contracts/src/resumes/index.ts` vazio
3. Atualizar `packages/contracts/src/index.ts` para incluir export do resumes

### Fase 2: Comandos
1. Criar `packages/contracts/src/resumes/commands/confirm-resume-upload.command.ts`
2. Criar `packages/contracts/src/resumes/commands/generate-resume-signed-url.command.ts`
3. Adaptar interfaces fornecidas para seguir padrão existente

### Fase 3: Erros e Tópicos
1. Criar `packages/contracts/src/resumes/errors.ts` com enums específicos
2. Criar `packages/contracts/src/resumes/topics.ts` com tópicos padronizados
3. Mapear códigos de erro fornecidos para estrutura de enums

### Fase 4: Resultados
1. Criar `packages/contracts/src/resumes/results/confirm-resume-upload.result.ts`
2. Criar `packages/contracts/src/resumes/results/generate-resume-signed-url.result.ts`
3. Adaptar para usar ServiceResult<T, ErrorCode>

### Fase 5: Export e Integração
1. Atualizar `packages/contracts/src/resumes/index.ts` com exports completos
2. Verificar build e type checking
3. Validar estrutura final

## 5. Plano de Testes

- **Testes unitários**:
  - Verificação de tipos TypeScript (compilação)
  - Validação de estrutura das interfaces
  - Teste de compatibilidade com ServiceResult

- **Testes de integração**:
  - Import dos novos contratos em projeto consumidor
  - Verificação de exports no index.ts principal
  - Build completo do monorepo

- **Testes E2E**:
  - Uso dos contratos em serviço simulado
  - Validação de fluxo completo com os tipos

- **Edge cases identificados**:
  - Conflito de nomes com outros módulos
  - Tipos opcionais vs obrigatórios
  - Compatibilidade com versões anteriores

- **Como executar**:
  ```bash
  pnpm build          # Build completo
  pnpm check-types    # Verificação de tipos
  pnpm lint          # Linting
  ```

## 6. Riscos e Mitigações

- **Risco**: Inconsistência na nomenclatura dos tópicos
  - **Mitigação**: Seguir padrão existente `domain.command.action`

- **Risco**: Quebra de compatibilidade com contratos existentes
  - **Mitigação**: Análise cuidadosa dos exports e dependências

- **Risco**: Tipos complexos demais dificultando uso
  - **Mitigação**: Manter simplicidade seguindo padrões existentes

- **Risco**: Falha no build por dependências circulares
  - **Mitigação**: Verificação cuidadosa da estrutura de imports

## 7. Rollback e Contingência

- **Como reverter mudanças**:
  ```bash
  git checkout HEAD~1 -- packages/contracts/src/
  pnpm build
  ```

- **Checkpoints de git sugeridos**:
  - Após estrutura base: `feat(resumes): add basic module structure`
  - Após comandos: `feat(resumes): add command interfaces`
  - Final: `feat(resumes): add complete resume service contracts`

- **Plano B**: Recriar estrutura seguindo exatamente padrão auth/ com nomes adaptados

## 8. Perguntas Pendentes para o Desenvolvedor

- Os códigos de erro fornecidos devem ser mantidos exatamente ou podem ser adaptados para o padrão de enums?
- O evento `ResumeUploadedEvent` deve seguir padrão de commands ou ter estrutura própria?
- Existe preferência por nomenclatura específica para os tópicos de mensageria?

## 9. Checklist de Implementação

- [ ] Criar estrutura de diretórios resumes/
- [ ] Implementar interfaces de comandos
- [ ] Criar enums de códigos de erro
- [ ] Definir tópicos de mensageria
- [ ] Implementar tipos de resultado com ServiceResult
- [ ] Configurar exports no index.ts do módulo
- [ ] Atualizar index.ts principal
- [ ] Executar build completo com sucesso
- [ ] Verificar type checking sem erros
- [ ] Validar estrutura final vs padrões existentes
