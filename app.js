// Cria o observador com threshold 0.12:
// o elemento precisa ter pelo menos 12% visível para a animação disparar
const observer = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.12 });
  
  // Seleciona todos os elementos que devem ser animados e começa a observá-los
  document.querySelectorAll('.reveal, .reveal-stagger').forEach(function(el) {
    observer.observe(el);
  });
  
  
  /* ============================================================
     2. FORMULÁRIO DE CONTATO
  
     Quando o formulário é enviado, em vez de recarregar a página,
     a função handleForm() intercepta o envio e mostra uma
     mensagem de confirmação no botão por 3 segundos.
  ============================================================ */
  
  function handleForm(event) {
    // Impede o comportamento padrão do formulário (recarregar a página)
    event.preventDefault();
  
    // Pega o botão de envio pelo ID
    const btn = document.getElementById('send-btn');
  
    // Muda o texto e a cor do botão para indicar sucesso
    btn.textContent = 'Mensagem enviada ✓';
    btn.style.background = 'linear-gradient(135deg, #00d464, #00a84f)';
    btn.disabled = true; // desabilita o botão para evitar cliques repetidos
  
    // Após 3 segundos, restaura o botão e limpa o formulário
    setTimeout(function() {
      btn.textContent = 'Enviar Mensagem';
      btn.style.background = ''; // volta ao estilo original do CSS
      btn.disabled = false;
      event.target.reset(); // limpa os campos do formulário
    }, 3000);
  }
  
  
  /* ============================================================
     3. DESTAQUE DO LINK ATIVO NO MENU
  
     Ao rolar a página, este código verifica qual seção está
     visível e destaca o link correspondente na barra de navegação,
     mudando sua cor para a cor de destaque (--accent).
  ============================================================ */
  
  // Pega todas as seções que têm um id (ex: #habilidades, #projetos)
  const sections = document.querySelectorAll('section[id]');
  
  // Pega todos os links do menu de navegação
  const navLinks = document.querySelectorAll('.nav-links a');
  
  // Adiciona um listener que roda toda vez que o usuário rola a página
  window.addEventListener('scroll', function() {
    let currentSection = ''; // guarda o id da seção atual
  
    // Verifica qual seção passou do topo da tela (com folga de 120px)
    sections.forEach(function(section) {
      if (window.scrollY >= section.offsetTop - 120) {
        currentSection = section.id;
      }
    });
  
    // Para cada link do menu, destaca o que corresponde à seção atual
    navLinks.forEach(function(link) {
      if (link.getAttribute('href') === '#' + currentSection) {
        link.style.color = 'var(--accent)'; // destaca o link ativo
      } else {
        link.style.color = ''; // volta ao estilo padrão do CSS
      }
    });
  });