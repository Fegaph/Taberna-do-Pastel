<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Taberna do Pastel</title>
  <link rel="stylesheet" href="style.css">
  <script src="script.js" defer></script>

</head>
<body>

  <header class="header">
    <div class="header-left">
      <img class="logo" src="logo.png" alt="Taberna do Pastel">
      <h1>Taberna do Pastel</h1>
    </div>
    <nav>
      <ul class="nav-links">
        <li><a href="#home" class="active">Home</a></li>
        <li><a href="assets\index.html" target="_blank">Cardápio</a></li>
        <li><a href="#delivery">Delivery</a></li>
        <li><a href="#contato">Contato</a></li>
      </ul>
    </nav>
  </header>

  <section id="home" class="hero">
    <h2>Pastéis irresistíveis, compra segura e entrega rápida</h2>
    <a href="#benefits">Saiba por que escolher a Taberna</a>
  </section>

  <section id="benefits" class="benefits">
    <div class="benefit">
      <h3>🍴 Qualidade</h3>
      <p>Ingredientes frescos e selecionados para um sabor único.</p>
    </div>
    <div class="benefit">
      <h3>⚡ Rapidez</h3>
      <p>Entrega ágil para você receber seu pastel quentinho.</p>
    </div>
    <div class="benefit">
      <h3>⭐ Confiança</h3>
      <p>Mais de 1000 clientes satisfeitos com nossa Taberna.</p>
    </div>
    <div class="benefit">
      <h3>🌮 Variedade</h3>
      <p>Opções doces e salgadas que agradam a todos os gostos.</p>
    </div>
    <div class="benefit">
      <h3>💰 Preço Justo</h3>
      <p>Sabor de qualidade com um valor que cabe no bolso.</p>
    </div>
    <div class="benefit">
      <h3>🤝 Atendimento</h3>
      <p>Equipe sempre pronta para atender você com carinho.</p>
    </div>
  </section>

  <section class="security">
    <h2>🔒 Compra Segura</h2>
    <p>Seu pedido é protegido e você recebe suporte sempre que precisar.</p>

    <div class="security-cards">
      <div class="card">
        <span>💳</span>
        <h3>Pagamento Seguro</h3>
        <p>Transações criptografadas para sua total segurança.</p>
      </div>
      <div class="card">
        <span>🛡️</span>
        <h3>Privacidade Garantida</h3>
        <p>Seus dados pessoais nunca serão compartilhados.</p>
      </div>
      <div class="card">
        <span>📞</span>
        <h3>Suporte ao Cliente</h3>
        <p>Estamos disponíveis para resolver qualquer dúvida rapidamente.</p>
      </div>
    </div>
  </section>

<section id="contato" class="contato">
  <h2>📞 Fale Conosco</h2>
  <p>Entre em contato ou visite nossa Taberna do Pastel! Estamos prontos para atender você.</p>

  <div class="contato-container">
    <!-- Informações e Formulário -->
    <div class="contato-dados">
      <div class="contato-info">
        <div class="info-item">
          <h3>Endereço</h3>
          <p>R. São Geraldo - São Cristóvão, Salvador - BA, 41600-090</p>
        </div>
        <div class="info-item">
          <h3>Telefone</h3>
          <p>(71) 98768-0993 <br> (71) 98294-5303</p>
        </div>
        <div class="info-item">
          <h3>Horário de Funcionamento</h3>
          <p>Qua-Dom: 17h - 22h</p>
        </div>
      </div>

      <form class="contato-form">
        <input type="text" name="nome" placeholder="Seu nome" required>
        <textarea name="mensagem" placeholder="Sua mensagem" rows="4" required></textarea>
        <button type="submit">Enviar Mensagem</button>
      </form>
    </div>

    <!-- Google Maps -->
    <div class="mapa">
      <iframe 
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3929.118446403524!2d-38.35846748461163!3d-12.914908191263067!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x71617003c802c0f%3A0x31799c78c9fc493a!2sTaberna%20do%20Pastel!5e0!3m2!1spt-BR!2sbr!4v1692726759123!5m2!1spt-BR!2sbr" 
        width="100%" 
        height="300" 
        style="border:0;" 
        allowfullscreen="" 
        loading="lazy" 
        referrerpolicy="no-referrer-when-downgrade">
      </iframe>
    </div>
  </div>
</section>

  <footer>
    <p>© 2025 Taberna do Pastel - Todos os direitos reservados.</p>
  </footer>

</body>
</html>
