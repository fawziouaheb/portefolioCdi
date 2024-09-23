
    document.addEventListener('scroll', function() {

        var progressVmware = document.getElementById('progress-vmware').querySelector('.progress');
        var progressPhp = document.getElementById('progress-php').querySelector('.progress');
        var progressJava = document.getElementById('progress-java').querySelector('.progress');
        var progressC = document.getElementById('progress-c').querySelector('.progress');
        var progressMysql = document.getElementById('progress-mysql').querySelector('.progress');
        var progressOracle = document.getElementById('progress-oracle').querySelector('.progress');
        var progressMariadb = document.getElementById('progress-mariadb').querySelector('.progress');
        var progressJavascript = document.getElementById('progress-javascript').querySelector('.progress');
        var progressKalilinux = document.getElementById('progress-kali-linux').querySelector('.progress');
        var progressWindows = document.getElementById('progress-windows').querySelector('.progress');

        var position = document.getElementById('progress-section').getBoundingClientRect().top;

        var screenPosition = window.innerHeight / 1.5;

        if (position < screenPosition) {
            progressWindows.style.width = '50%'
            progressKalilinux.style.width = '40%'
            progressJavascript.style.width = '50%'
            progressMysql.style.width ='70%';
            progressOracle.style.width ='45%';
            progressMariadb.style.width ='45%';
            progressC.style.width ='40%';
            progressJava.style.width ='60%';
            progressPhp.style.width = '50%'; // Remplissage pour PHP
            progressVmware.style.width = '70%'; // Remplissage pour VMWARE
        }
        else{
            progressWindows.style.width = '0%'
            progressKalilinux.style.width = '0%';
            progressJavascript.style.width = '0%';
            progressMysql.style.width ='0%';
            progressOracle.style.width ='0%';
            progressMariadb.style.width ='0%';
            progressC.style.width ='0%';
            progressJava.style.width ='0%';
            progressVmware.style.width = '0%';
            progressPhp.style.width = '0%';
        }
    });

    document.addEventListener('DOMContentLoaded', function() {

      const projectsContainer = document.getElementById('portfolio-projects');
      const modal = document.getElementById('projectModal');
      const closeModal = document.querySelector('.close');
      const modalImagesContainer = document.querySelector('.modal-images');
      const modalDescription = document.querySelector('.modal-description');
      const iconLangage = document.querySelector('.language-image');
      var titleProject = document.getElementById('title-project');
      // Sélectionne tous les éléments de filtre
      const filters = document.querySelectorAll('#portfolio-flters li');
    
      if (!projectsContainer || !modal || !closeModal || !modalImagesContainer || !modalDescription || !filters.length) {
        console.error("Un ou plusieurs éléments requis ne sont pas trouvés dans le DOM.");
        return;
      }
    
      // Le reste de ton code de gestion des projets et filtres
      const projects = {
        '*': [
          { 
            category: 'filter-game',
            title: 'Bataille Navale En Réseau',
            background: '/src/public/images/interface-bataille-naval.png',
            images: ['/src/public/images/projet-BATAILLENAVAL.png'],
            description: `
              <strong>Février 2023</strong><br>
              <strong>Fonctionnalités :</strong><br>
                  - Jeu contre l'ordinateur et jeu en réseau entre deux personnes.<br>
                  - Sécurité des échanges de données pendant le jeu en réseau.<br>
                  - Intégration de mécanismes d'authentification pour garantir l'identité des joueurs et empêcher les accès non autorisés.<br>
              <strong>Environnement technique :</strong> JavaFX, Scene Builder.`
          },
          {
            category: 'filter-appDesktop', 
            title : 'Draw With ME ',
            background: '/src/public/images/projet-DRAW.png',
            images: ['/src/public/images/projet-DRAW.png'],
            langage : ['/src/public/images/java.png'], 
            description: `
              <strong>FEVRIER 2021</strong><br>
              Application qui permet de dessiner plusieurs formes géométriques.<br>
              <strong>Fonctionnalités principales : </strong><br>
                 Effacer, déplacer, modifier, enregistrer le travail effectué, ouvrir un nouveau fichier . . .<br>
              <strong>Environnements techniques : <strong>Java.
            `
          },
          {
            category: 'filter-appDesktop',
            title: 'Intensité Carbonne En Temps Réel',
            background: '/src/public/images/projet-CARBONINTENSITY.png',
            images: ['/src/public/images/projet-CARBONINTENSITY.png'],
            langage : ['/src/public/images/javafx.png'],
            description: `
            <strong>MARS 2024 :</strong><br>
            <strong>Fonctionnalité :</strong> Une application qui permet de récupérer l'intensité carbone en temps réel, ainsi que la consommation et la production d'électricité selon les filières, en fonction de la ville choisie.<br>
            <strong>Environnement technique :</strong> JavaFX.
            `
          },
          { 
            category: 'filter-web', 
            title : "Plateforme De Location De Logement",
            background: '/src/public/images/projet-RESERVATIONLOGEMENT.png',
            images: ['/src/public/images/projet-RESERVATIONLOGEMENT.png'],
            langage : ['/src/public/images/php.png'],
            description: `
                  <strong>FÉVRIER 2022:</strong><br>
                  <strong>Fonctionnalités :</strong><br>
                  - Conception et rédaction du cahier de charge.<br>
                  - Mise en place d'un système de réservation et de connexion sécurisé.<br>
                  - Assurer la cybersécurité du site.<br>
                  <strong>Environnement technique :</strong> utilisation des langages de programmation tels que CSS, HTML, JavaScript et PHP.`
          },
          { 
            category: 'filter-web',
            background: '/src/public/images/projet-PORTEFOLIO.png',
            images: ['/src/public/images/projet-PORTEFOLIO.png'],
            langage : ['/src/public/images/php.png'], 
            description: 'Description du projet web.' 
          }
        ],
        '.filter-game': [
          { 
            category: 'filter-game',
            title: 'Bataille Navale En Réseau',
            background: '/src/public/images/interface-bataille-naval.png',
            images: ['/src/public/images/projet-BATAILLENAVAL.png'],
            description: `
              <strong>Février 2023</strong><br>
              <strong>Fonctionnalités :</strong><br>
                  - Jeu contre l'ordinateur et jeu en réseau entre deux personnes.<br>
                  - Sécurité des échanges de données pendant le jeu en réseau.<br>
                  - Intégration de mécanismes d'authentification pour garantir l'identité des joueurs et empêcher les accès non autorisés.<br>
              <strong>Environnement technique :  </strong>JavaFX, Scene Builder.
            ` },
          
        ],
        '.filter-appDesktop': [
          {
            category: 'filter-appDesktop', 
            title : 'Draw With ME ',
            background: '/src/public/images/projet-DRAW.png',
            images: ['/src/public/images/projet-DRAW.png'],
            langage : ['/src/public/images/java.png'], 
            description: `
              <strong>FEVRIER 2021</strong><br>
              Application qui permet de dessiner plusieurs formes géométriques.<br>
              <strong>Fonctionnalités principales : </strong><br>
                 Effacer, déplacer, modifier, enregistrer le travail effectué, ouvrir un nouveau fichier . . .<br>
              <strong>Environnements techniques : <strong>Java.
            `
          },
          {
            category: 'filter-appDesktop',
            title: 'Intensité Carbonne En Temps Réel',
            background: '/src/public/images/projet-CARBONINTENSITY.png',
            images: ['/src/public/images/projet-CARBONINTENSITY.png'],
            langage : ['/src/public/images/javafx.png'],
            description: `
            <strong>MARS 2024 :</strong><br>
            <strong>Fonctionnalité :</strong> Une application qui permet de récupérer l'intensité carbone en temps réel, ainsi que la consommation et la production d'électricité selon les filières, en fonction de la ville choisie.<br>
            <strong>Environnement technique :</strong> JavaFX.
            `
          }
        ],
        '.filter-web': [
           { 
            category: 'filter-web',
            background: '/src/public/images/projet-PORTEFOLIO.png',
            images: ['/src/public/images/projet-PORTEFOLIO.png'],
            langage : ['/src/public/images/php.png'], 
            description: 'Description du projet web.' 
          },
          { 
            category: 'filter-web', 
            title : "Plateforme De Location De Logement",
            background: '/src/public/images/projet-RESERVATIONLOGEMENT.png',
            images: ['/src/public/images/projet-RESERVATIONLOGEMENT.png'],
            langage : ['/src/public/images/php.png'],
            description: `
                  <strong>FÉVRIER 2022</strong><br>
                  <strong>Fonctionnalités :</strong><br>
                      - Conception et rédaction du cahier de charge.<br>
                      - Mise en place d'un système de réservation et de connexion sécurisé.<br>
                      - Assurer la cybersécurité du site.<br>
                  <strong>Environnement technique :</strong> utilisation des langages de programmation tels que CSS, HTML, JavaScript et PHP.`
          }
        ]
      };
    
      function showProjects(filter) {
        const currentItems = document.querySelectorAll('#portfolio-projects .portfolio-item');
        currentItems.forEach(item => {
          item.classList.remove('show');
          setTimeout(() => item.remove(), 300);
        });
    
        setTimeout(() => {
          const selectedProjects = projects[filter];
          selectedProjects.forEach(project => {
            const projectItem = document.createElement('div');
            projectItem.classList.add('portfolio-item', project.category);
            projectItem.style.backgroundImage = `url('${project.background}')`;
            projectItem.innerHTML = `<div class="plus-icon"></div>`;
            
            projectItem.querySelector('.plus-icon').addEventListener('click', () => showModal(project));
            
            projectsContainer.appendChild(projectItem);
            
            setTimeout(() => {
              projectItem.classList.add('show');
            }, 10);
          });
        }, 300);
      }
    
      function showModal(project) {
        modal.style.display = 'flex';
        
        // Clear previous images
        modalImagesContainer.innerHTML = '';
        project.images.forEach((imgSrc, index) => {
          const img = document.createElement('img');
          img.src = imgSrc;
          if (index === 0) img.classList.add('active');
          modalImagesContainer.appendChild(img);
        });
        
        modalDescription.innerHTML = project.description;
        iconLangage.src = project.langage;
        titleProject.textContent = project.title;
        
        
        let currentIndex = 0;
        setInterval(() => {
          const images = document.querySelectorAll('.modal-images img');
          images[currentIndex].classList.remove('active');
          currentIndex = (currentIndex + 1) % images.length;
          images[currentIndex].classList.add('active');
        }, 3000);
      }
    
      closeModal.addEventListener('click', () => {
        modal.style.display = 'none';
      });
    
      // Initialiser avec tous les projets
      showProjects('*');
    
      // Ajouter les événements de clic sur les filtres
      filters.forEach(filter => {
        filter.addEventListener('click', function() {
          filters.forEach(f => f.classList.remove('filter-active'));
          this.classList.add('filter-active');
          const filterValue = this.getAttribute('data-filter');
          showProjects(filterValue);
        });
      });
    });
     
      const hamburger = document.querySelector('.hamburger');
      const navMenu = document.querySelector('.navbar-m ul');
      
      hamburger.addEventListener('click', () => {
          hamburger.classList.toggle('active');
          navMenu.classList.toggle('active');
      });
      


      document.addEventListener('DOMContentLoaded', function () {
        const typingText = document.getElementById('typing-text');
        const text = "Salut ! Moi c'est Fawzi. N'hésitez pas à scroller pour découvrir l'ensemble de mon profil.";
    
        let index = 0;
    
        function type() {
            if (index < text.length) {
                typingText.innerHTML += text.charAt(index);
                index++;
                setTimeout(type, 50); // Ajuste la vitesse de frappe ici
            }
        }
    
        type();
    });

    document.addEventListener('DOMContentLoaded', function() {
      const toggleIcon = document.querySelector('.background-toggle');
      let isGradient = false;
  
      toggleIcon.addEventListener('click', function() {
          if (isGradient) {
              document.body.style.background = '#2E2C2C'; // Couleur unie
          } else {
              document.body.style.background = 'linear-gradient(to left, #c6ffdd, #fbd786, #f7797d)'; // Dégradé
          }
          isGradient = !isGradient; // Basculer l'état
      });
  });

