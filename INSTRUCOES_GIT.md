# Instruções para Git e GitHub - Projeto CAPW

## Passo a Passo para Configurar o Git e GitHub

### 1. Criar conta no GitHub
- Acesse https://github.com
- Clique em "Sign up" se não tiver conta
- Preencha os dados solicitados
- Confirme seu email

### 2. Instalar o Git
- Acesse https://git-scm.com/
- Baixe a versão para seu sistema operacional
- Execute a instalação com as configurações padrão

### 3. Configurar o Git (primeira vez)
Abra o terminal/prompt de comando e execute:
```bash
git config --global user.name "Seu Nome"
git config --global user.email "seu.email@exemplo.com"
```

### 4. Criar repositório no GitHub
- Faça login no GitHub
- Clique no botão "+" no canto superior direito
- Selecione "New repository"
- Nome sugerido: `simulador-financiamento-capw`
- Marque como "Public" (para que o professor possa acessar)
- NÃO marque "Initialize this repository with a README"
- Clique em "Create repository"

### 5. Comandos para enviar o projeto

No terminal, navegue até a pasta do seu projeto:
```bash
cd caminho/para/sua/pasta/site_capw
```

Execute os seguintes comandos na ordem:

```bash
# Inicializar o repositório Git
git init

# Adicionar todos os arquivos
git add .

# Fazer o primeiro commit
git commit -m "Commit inicial - Simulador de Financiamento CAPW"

# Conectar ao repositório remoto (substitua SEU_USUARIO pelo seu nome de usuário do GitHub)
git remote add origin https://github.com/SEU_USUARIO/simulador-financiamento-capw.git

# Enviar para o GitHub
git push -u origin main
```

**Nota**: Se der erro no último comando, tente:
```bash
git push -u origin master
```

### 6. Adicionar o professor como colaborador
- No seu repositório no GitHub, clique em "Settings"
- No menu lateral, clique em "Manage access"
- Clique em "Invite a collaborator"
- Digite: `igorfalcao`
- Clique em "Add igorfalcao to this repository"

### 7. Comandos úteis para atualizações futuras

Quando fizer alterações no projeto:
```bash
# Verificar status dos arquivos
git status

# Adicionar arquivos modificados
git add .

# Fazer commit das alterações
git commit -m "Descrição das alterações feitas"

# Enviar para o GitHub
git push
```

### 8. Verificação final
- Acesse seu repositório no GitHub
- Verifique se todos os arquivos estão lá
- Teste se o professor consegue acessar o repositório

## Estrutura final do repositório

Seu repositório deve conter:
```
simulador-financiamento-capw/
├── index.html
├── sobre.html
├── portfolio.html
├── contato.html
├── blog.html
├── depoimentos.html
├── css/
│   └── style.css
├── js/
│   └── script.js
├── img/
└── README.md
```

## Dicas importantes

1. **Sempre faça commit das alterações**: Use mensagens descritivas
2. **Teste antes de enviar**: Verifique se o site funciona corretamente
3. **Mantenha o README atualizado**: Documente mudanças importantes
4. **Use .gitignore se necessário**: Para ignorar arquivos desnecessários

## Solução de problemas comuns

### Erro de autenticação
Se aparecer erro de autenticação, você pode:
1. Usar token de acesso pessoal em vez de senha
2. Configurar SSH (mais avançado)

### Erro "repository not found"
- Verifique se o nome do repositório está correto
- Verifique se você tem permissão de acesso

### Conflitos de merge
- Sempre faça `git pull` antes de `git push` se trabalhar em equipe

## Data de entrega
**Lembrete**: O trabalho deve ser entregue até 31/05/2025

