# Simulador de Financiamento - CAPW

## Descrição do Projeto

Este projeto consiste em um site web desenvolvido com HTML, CSS e JavaScript para simular diferentes tipos de financiamentos. O site permite que os usuários realizem simulações de financiamento veicular, imobiliário e empréstimos pessoais, oferecendo uma interface intuitiva e responsiva.

O objetivo principal é fornecer uma ferramenta útil para cálculos financeiros, ajudando os usuários a tomar decisões mais informadas sobre suas opções de financiamento. O site também inclui conteúdo educativo sobre finanças pessoais através do blog e depoimentos de clientes que utilizaram os simuladores.

## Tecnologias Utilizadas

- **HTML5**: Estruturação do conteúdo das páginas
- **CSS3**: Estilização e layout responsivo
- **JavaScript**: Funcionalidades interativas e cálculos de financiamento
- **Git/GitHub**: Controle de versão e hospedagem do código-fonte

Recursos específicos implementados:
- Flexbox e Grid para layouts responsivos
- Animações e transições CSS
- Manipulação do DOM com JavaScript
- Validação de formulários
- Cálculos financeiros (sistema Price)

## Estrutura e Navegação

O site é composto por 6 páginas principais, todas interligadas através de um menu de navegação consistente:

1. **Página Inicial (index.html)**: Apresentação do site e dos principais tipos de simulação disponíveis
2. **Sobre (sobre.html)**: Informações sobre a empresa, missão, visão e valores
3. **Simuladores (portfolio.html)**: Página com os três simuladores de financiamento (veicular, imobiliário e empréstimo pessoal)
4. **Contato (contato.html)**: Formulário de contato e informações para comunicação
5. **Blog (blog.html)**: Artigos e dicas sobre financiamento e educação financeira
6. **Depoimentos (depoimentos.html)**: Depoimentos de clientes e casos de sucesso

A navegação entre as páginas é facilitada por um menu superior presente em todas as páginas, com transições suaves entre as páginas para melhorar a experiência do usuário.

## Funcionalidades Implementadas

### Simuladores de Financiamento
- **Simulador de Financiamento Veicular**: Calcula parcelas, juros e valor total para financiamento de veículos
- **Simulador de Financiamento Imobiliário**: Calcula parcelas, juros e valor total para financiamento de imóveis
- **Simulador de Empréstimo Pessoal**: Calcula parcelas, juros e valor total para empréstimos pessoais

### Formulários Interativos
- Formulário de contato com validação em JavaScript
- Formulário de inscrição para newsletter

### Transições e Animações
- Transições suaves entre páginas
- Animações de entrada para elementos da página
- Efeitos hover em cards e botões

### Responsividade
- Layout adaptável para diferentes tamanhos de tela (desktop, tablet e mobile)
- Menu responsivo
- Imagens e conteúdo redimensionáveis

## Decisões de Design

### Paleta de Cores
- **Cores principais**: Tons de azul (#2c5aa0) e verde-azulado (#3b6e72)
- **Cores secundárias**: Branco (#ffffff) e cinza claro (#f8f9fa)
- **Cores de destaque**: Utilizadas em botões e elementos interativos

A escolha da paleta de cores foi baseada na psicologia das cores para o setor financeiro, onde o azul transmite confiança e segurança, valores essenciais para uma plataforma de simulação financeira.

### Tipografia
- Fonte principal: Arial (sans-serif)
- Tamanhos variados para hierarquia visual clara
- Espaçamento adequado para melhor legibilidade

### Layout
- Design limpo e minimalista para facilitar a navegação
- Cards com sombras suaves para destacar conteúdos importantes
- Uso de espaço em branco para melhorar a legibilidade
- Elementos visuais consistentes em todas as páginas

## Instruções de Execução

Para executar o projeto localmente, siga os passos abaixo:

1. Clone o repositório para sua máquina local:
```
git clone https://github.com/SEU_USUARIO/simulador-financiamento.git
```

2. Navegue até a pasta do projeto:
```
cd simulador-financiamento
```

3. Abra o arquivo `index.html` em seu navegador preferido.

Não é necessário configurar um servidor local, pois o projeto utiliza apenas HTML, CSS e JavaScript puro, sem dependências externas.

## Estrutura de Arquivos

```
simulador-financiamento/
│
├── index.html              # Página inicial
├── sobre.html              # Página sobre
├── portfolio.html          # Página de simuladores
├── contato.html            # Página de contato
├── blog.html               # Página de blog
├── depoimentos.html        # Página de depoimentos
│
├── css/
│   └── style.css           # Estilos do site
│
├── js/
│   └── script.js           # Funcionalidades JavaScript
│
├── img/                    # Pasta para imagens
│
└── README.md               # Documentação do projeto
```

## Melhorias Futuras

Para versões futuras do projeto, planejamos implementar:

- Mais opções de simulação (consórcio, financiamento estudantil, etc.)
- Comparativo entre diferentes modalidades de financiamento
- Gráficos para visualização da amortização
- Possibilidade de salvar e compartilhar simulações
- Versão PWA (Progressive Web App) para uso offline

