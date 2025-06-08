// Script para transições de página e funcionalidades interativas

// Função para adicionar transição de página
document.addEventListener('DOMContentLoaded', function() {
    // Adiciona classe para transição de página
    document.body.classList.add('page-transition');
    
    // Adiciona classe 'loaded' após um pequeno delay para ativar a transição
    setTimeout(function() {
        document.body.classList.add('loaded');
    }, 100);
    
    // Adiciona classe 'active' ao link de navegação da página atual
    const currentPage = window.location.pathname.split('/').pop();
    const navLinks = document.querySelectorAll('nav a');
    
    navLinks.forEach(link => {
        const linkPage = link.getAttribute('href');
        if (linkPage === currentPage) {
            link.classList.add('active');
        }
    });
    
    // Inicializa os sliders de prazo nos simuladores
    initRangeSliders();
    
    // Inicializa validação do formulário de contato
    initContactForm();
    
    // Inicializa formulário de newsletter
    initNewsletterForm();
});

// Função para inicializar os sliders de prazo
function initRangeSliders() {
    // Slider de prazo para financiamento veicular
    const autoMonthsSlider = document.getElementById('auto-months');
    const autoMonthsValue = document.getElementById('auto-months-value');
    
    if (autoMonthsSlider && autoMonthsValue) {
        autoMonthsSlider.addEventListener('input', function() {
            autoMonthsValue.textContent = this.value + ' meses';
        });
    }
    
    // Slider de prazo para financiamento imobiliário
    const homeMonthsSlider = document.getElementById('home-months');
    const homeMonthsValue = document.getElementById('home-months-value');
    
    if (homeMonthsSlider && homeMonthsValue) {
        homeMonthsSlider.addEventListener('input', function() {
            homeMonthsValue.textContent = this.value + ' meses';
        });
    }
    
    // Slider de prazo para empréstimo pessoal
    const loanMonthsSlider = document.getElementById('loan-months');
    const loanMonthsValue = document.getElementById('loan-months-value');
    
    if (loanMonthsSlider && loanMonthsValue) {
        loanMonthsSlider.addEventListener('input', function() {
            loanMonthsValue.textContent = this.value + ' meses';
        });
    }
}

// Função para calcular financiamento veicular
function calculateAutoFinance() {
    const vehicleValue = parseFloat(document.getElementById('auto-value').value);
    const entryValue = parseFloat(document.getElementById('auto-entry').value);
    const months = parseInt(document.getElementById('auto-months').value);
    const annualRate = parseFloat(document.getElementById('auto-rate').value);
    
    // Converte taxa anual para mensal
    const monthlyRate = (annualRate / 100) / 12;
    
    // Valor financiado
    const financedValue = vehicleValue - entryValue;
    
    // Cálculo da parcela (Sistema Price)
    const installment = financedValue * (monthlyRate * Math.pow(1 + monthlyRate, months)) / (Math.pow(1 + monthlyRate, months) - 1);
    
    // Valor total a ser pago
    const totalValue = installment * months;
    
    // Valor dos juros
    const interestValue = totalValue - financedValue;
    
    // Exibe o resultado
    const resultBox = document.getElementById('auto-result');
    resultBox.innerHTML = `
        <h3>Resultado da Simulação</h3>
        <p><strong>Valor do veículo:</strong> R$ ${vehicleValue.toLocaleString('pt-BR', {minimumFractionDigits: 2, maximumFractionDigits: 2})}</p>
        <p><strong>Valor de entrada:</strong> R$ ${entryValue.toLocaleString('pt-BR', {minimumFractionDigits: 2, maximumFractionDigits: 2})}</p>
        <p><strong>Valor financiado:</strong> R$ ${financedValue.toLocaleString('pt-BR', {minimumFractionDigits: 2, maximumFractionDigits: 2})}</p>
        <p><strong>Prazo:</strong> ${months} meses</p>
        <p><strong>Taxa de juros:</strong> ${annualRate}% a.a. (${(monthlyRate * 100).toFixed(2)}% a.m.)</p>
        <p><strong>Valor da parcela:</strong> R$ ${installment.toLocaleString('pt-BR', {minimumFractionDigits: 2, maximumFractionDigits: 2})}</p>
        <p><strong>Valor total a pagar:</strong> R$ ${totalValue.toLocaleString('pt-BR', {minimumFractionDigits: 2, maximumFractionDigits: 2})}</p>
        <p><strong>Valor dos juros:</strong> R$ ${interestValue.toLocaleString('pt-BR', {minimumFractionDigits: 2, maximumFractionDigits: 2})}</p>
    `;
}

// Função para calcular financiamento imobiliário
function calculateHomeFinance() {
    const propertyValue = parseFloat(document.getElementById('home-value').value);
    const entryValue = parseFloat(document.getElementById('home-entry').value);
    const months = parseInt(document.getElementById('home-months').value);
    const annualRate = parseFloat(document.getElementById('home-rate').value);
    
    // Converte taxa anual para mensal
    const monthlyRate = (annualRate / 100) / 12;
    
    // Valor financiado
    const financedValue = propertyValue - entryValue;
    
    // Cálculo da parcela (Sistema Price)
    const installment = financedValue * (monthlyRate * Math.pow(1 + monthlyRate, months)) / (Math.pow(1 + monthlyRate, months) - 1);
    
    // Valor total a ser pago
    const totalValue = installment * months;
    
    // Valor dos juros
    const interestValue = totalValue - financedValue;
    
    // Exibe o resultado
    const resultBox = document.getElementById('home-result');
    resultBox.innerHTML = `
        <h3>Resultado da Simulação</h3>
        <p><strong>Valor do imóvel:</strong> R$ ${propertyValue.toLocaleString('pt-BR', {minimumFractionDigits: 2, maximumFractionDigits: 2})}</p>
        <p><strong>Valor de entrada:</strong> R$ ${entryValue.toLocaleString('pt-BR', {minimumFractionDigits: 2, maximumFractionDigits: 2})}</p>
        <p><strong>Valor financiado:</strong> R$ ${financedValue.toLocaleString('pt-BR', {minimumFractionDigits: 2, maximumFractionDigits: 2})}</p>
        <p><strong>Prazo:</strong> ${months} meses (${(months/12).toFixed(0)} anos)</p>
        <p><strong>Taxa de juros:</strong> ${annualRate}% a.a. (${(monthlyRate * 100).toFixed(2)}% a.m.)</p>
        <p><strong>Valor da parcela:</strong> R$ ${installment.toLocaleString('pt-BR', {minimumFractionDigits: 2, maximumFractionDigits: 2})}</p>
        <p><strong>Valor total a pagar:</strong> R$ ${totalValue.toLocaleString('pt-BR', {minimumFractionDigits: 2, maximumFractionDigits: 2})}</p>
        <p><strong>Valor dos juros:</strong> R$ ${interestValue.toLocaleString('pt-BR', {minimumFractionDigits: 2, maximumFractionDigits: 2})}</p>
    `;
}

// Função para calcular empréstimo pessoal
function calculatePersonalLoan() {
    const loanValue = parseFloat(document.getElementById('loan-value').value);
    const months = parseInt(document.getElementById('loan-months').value);
    const monthlyRate = parseFloat(document.getElementById('loan-rate').value) / 100;
    
    // Cálculo da parcela (Sistema Price)
    const installment = loanValue * (monthlyRate * Math.pow(1 + monthlyRate, months)) / (Math.pow(1 + monthlyRate, months) - 1);
    
    // Valor total a ser pago
    const totalValue = installment * months;
    
    // Valor dos juros
    const interestValue = totalValue - loanValue;
    
    // Exibe o resultado
    const resultBox = document.getElementById('loan-result');
    resultBox.innerHTML = `
        <h3>Resultado da Simulação</h3>
        <p><strong>Valor do empréstimo:</strong> R$ ${loanValue.toLocaleString('pt-BR', {minimumFractionDigits: 2, maximumFractionDigits: 2})}</p>
        <p><strong>Prazo:</strong> ${months} meses</p>
        <p><strong>Taxa de juros:</strong> ${(monthlyRate * 100).toFixed(2)}% a.m. (${(Math.pow(1 + monthlyRate, 12) - 1) * 100}% a.a.)</p>
        <p><strong>Valor da parcela:</strong> R$ ${installment.toLocaleString('pt-BR', {minimumFractionDigits: 2, maximumFractionDigits: 2})}</p>
        <p><strong>Valor total a pagar:</strong> R$ ${totalValue.toLocaleString('pt-BR', {minimumFractionDigits: 2, maximumFractionDigits: 2})}</p>
        <p><strong>Valor dos juros:</strong> R$ ${interestValue.toLocaleString('pt-BR', {minimumFractionDigits: 2, maximumFractionDigits: 2})}</p>
    `;
}

// Função para inicializar o formulário de contato
function initContactForm() {
    const contactForm = document.getElementById('contact-form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Validação do formulário
            const nome = document.getElementById('nome').value;
            const email = document.getElementById('email').value;
            const assunto = document.getElementById('assunto').value;
            const mensagem = document.getElementById('mensagem').value;
            
            if (!nome || !email || !assunto || !mensagem) {
                showFormMessage('Por favor, preencha todos os campos obrigatórios.', 'error');
                return;
            }
            
            // Validação de email
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                showFormMessage('Por favor, insira um email válido.', 'error');
                return;
            }
            
            // Simulação de envio bem-sucedido
            showFormMessage('Mensagem enviada com sucesso! Entraremos em contato em breve.', 'success');
            contactForm.reset();
        });
    }
}

// Função para exibir mensagem no formulário
function showFormMessage(message, type) {
    const formMessage = document.getElementById('form-message');
    
    if (formMessage) {
        formMessage.textContent = message;
        formMessage.className = 'form-message';
        formMessage.classList.add(type);
        formMessage.style.display = 'block';
        
        // Esconde a mensagem após 5 segundos
        setTimeout(function() {
            formMessage.style.display = 'none';
        }, 5000);
    }
}

// Função para inicializar o formulário de newsletter
function initNewsletterForm() {
    const newsletterForm = document.getElementById('newsletter-form');
    
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Simulação de inscrição bem-sucedida
            alert('Inscrição realizada com sucesso! Você receberá nossas novidades em breve.');
            newsletterForm.reset();
        });
    }
}

// Adiciona transições suaves para links internos
document.addEventListener('click', function(e) {
    const target = e.target;
    
    // Verifica se o clique foi em um link interno
    if (target.tagName === 'A' && target.getAttribute('href').startsWith('#')) {
        e.preventDefault();
        
        const targetId = target.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
            // Scroll suave até o elemento
            targetElement.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    }
});

// Adiciona transições para links entre páginas
document.addEventListener('click', function(e) {
    const target = e.target;
    
    // Verifica se o clique foi em um link para outra página
    if (target.tagName === 'A' && 
        target.getAttribute('href').endsWith('.html') && 
        !target.getAttribute('href').startsWith('http')) {
        
        e.preventDefault();
        
        // Adiciona classe para transição de saída
        document.body.classList.remove('loaded');
        
        // Navega para a nova página após a transição
        setTimeout(function() {
            window.location.href = target.getAttribute('href');
        }, 300);
    }
});

