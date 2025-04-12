// Star Mehfil Restaurant - Main JavaScript

// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
  // Set current year in the footer
  document.getElementById('current-year').textContent = new Date().getFullYear();
  
  // Mobile navigation toggle
  const mobileToggle = document.getElementById('mobile-toggle');
  const navLinks = document.getElementById('nav-links');
  
  mobileToggle.addEventListener('click', function() {
    navLinks.classList.toggle('active');
    
    // Toggle hamburger icon to X
    const bars = this.querySelectorAll('.bar');
    bars[0].classList.toggle('rotate-45');
    bars[1].classList.toggle('opacity-0');
    bars[2].classList.toggle('rotate-neg-45');
  });
  
  // Close mobile menu when a link is clicked
  const navLinksItems = document.querySelectorAll('.nav-link');
  navLinksItems.forEach(link => {
    link.addEventListener('click', function() {
      navLinks.classList.remove('active');
      
      // Reset hamburger icon
      const bars = mobileToggle.querySelectorAll('.bar');
      bars[0].classList.remove('rotate-45');
      bars[1].classList.remove('opacity-0');
      bars[2].classList.remove('rotate-neg-45');
    });
  });
  
  // Navbar scroll effect
  const navbar = document.getElementById('navbar');
  window.addEventListener('scroll', function() {
    if (window.scrollY > 50) {
      navbar.style.padding = '0.5rem 0';
      navbar.style.backgroundColor = 'rgba(0, 0, 0, 0.9)';
    } else {
      navbar.style.padding = '1rem 0';
      navbar.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
    }
  });
  
  // Create stars in the background of hero section
  createStars();
  
  // Menu tabs functionality
  const menuTabs = document.querySelectorAll('.menu-tab');
  menuTabs.forEach(tab => {
    tab.addEventListener('click', function() {
      // Remove active class from all tabs
      menuTabs.forEach(t => t.classList.remove('active'));
      
      // Add active class to clicked tab
      this.classList.add('active');
      
      // Hide all menu content
      const menuContainers = document.querySelectorAll('.menu-items-container');
      menuContainers.forEach(container => {
        container.classList.remove('active');
      });
      
      // Show relevant menu content
      const targetMenu = this.getAttribute('data-tab');
      document.getElementById(`${targetMenu}-menu`).classList.add('active');
    });
  });
  
  // Populate menu items for other categories
  populateMenuItems();
  
  // Scroll reveal animation
  const revealElements = document.querySelectorAll('.animate-reveal');
  const revealOnScroll = function() {
    for (let i = 0; i < revealElements.length; i++) {
      const windowHeight = window.innerHeight;
      const elementTop = revealElements[i].getBoundingClientRect().top;
      const elementVisible = 150;
      
      if (elementTop < windowHeight - elementVisible) {
        revealElements[i].classList.add('reveal-visible');
      }
    }
  };
  
  window.addEventListener('scroll', revealOnScroll);
  revealOnScroll(); // Check on page load
});

// Create stars in the hero section background
function createStars() {
  const starsContainer = document.getElementById('stars-container');
  const numberOfStars = 200;
  
  for (let i = 0; i < numberOfStars; i++) {
    const star = document.createElement('div');
    star.classList.add('star');
    
    // Random position
    const x = Math.random() * 100;
    const y = Math.random() * 100;
    
    // Random size
    const size = Math.random() * 3;
    
    // Random opacity and animation duration
    const opacity = Math.random() * 0.8 + 0.2;
    const duration = Math.random() * 8 + 2;
    const delay = Math.random() * 10;
    
    star.style.left = `${x}%`;
    star.style.top = `${y}%`;
    star.style.width = `${size}px`;
    star.style.height = `${size}px`;
    star.style.setProperty('--star-opacity', opacity);
    star.style.setProperty('--twinkle-duration', `${duration}s`);
    star.style.setProperty('--twinkle-delay', `${delay}s`);
    
    starsContainer.appendChild(star);
  }
}

// Populate menu items from data
function populateMenuItems() {
  // Kebab menu items
  const kebabItems = [
    {
      name: 'Seekh Kebab',
      price: '₹380',
      description: 'Minced meat mixed with herbs and spices, skewered and grilled to perfection.',
      image: 'https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?q=80&w=1530&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
      name: 'Chicken Tikka',
      price: '₹420',
      description: 'Boneless chicken pieces marinated in spices and yogurt, cooked in a tandoor.',
      image: 'https://images.unsplash.com/photo-1610057099431-d73a1c9d2f2f?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
      name: 'Lamb Chops',
      price: '₹550',
      description: 'Tender lamb chops marinated in a blend of yogurt and spices, grilled to perfection.',
      image: 'https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=1469&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    }
  ];
  
  // Special menu items
  const specialItems = [
    {
      name: 'Haleem',
      price: '₹320',
      description: 'A stew of meat, lentils, and pounded wheat made into a thick paste. A Hyderabadi specialty.',
      image: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
      name: 'Pathar Ka Gosht',
      price: '₹480',
      description: 'A traditional Hyderabadi dish where meat is cooked on a stone slab.',
      image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
      name: 'Hyderabadi Marag',
      price: '₹450',
      description: 'A spicy and flavorful soup made with lamb or mutton, herbs, and spices.',
      image: 'https://images.unsplash.com/photo-1547592180-85f173990554?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    }
  ];
  
  // Dessert menu items
  const dessertItems = [
    {
      name: 'Qubani Ka Meetha',
      price: '₹220',
      description: 'A sweet apricot dessert topped with custard or ice cream, a royal Hyderabadi specialty.',
      image: 'https://images.unsplash.com/photo-1551024506-0bccd828d307?q=80&w=1364&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
      name: 'Double Ka Meetha',
      price: '₹200',
      description: 'A bread pudding dessert made from fried bread slices soaked in hot milk with spices, nuts, and saffron.',
      image: 'https://images.unsplash.com/photo-1530648672449-81f6c723e2f1?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
      name: 'Phirni',
      price: '₹180',
      description: 'A creamy rice pudding flavored with cardamom, saffron, and topped with pistachios.',
      image: 'https://images.unsplash.com/photo-1583315057566-b9f9d7ef414c?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    }
  ];
  
  // Populate kebab menu
  const kebabMenu = document.getElementById('kebabs-menu');
  populateMenuContainer(kebabMenu, kebabItems);
  
  // Populate special menu
  const specialMenu = document.getElementById('special-menu');
  populateMenuContainer(specialMenu, specialItems);
  
  // Populate dessert menu
  const dessertMenu = document.getElementById('dessert-menu');
  populateMenuContainer(dessertMenu, dessertItems);
}

// Helper function to populate menu containers
function populateMenuContainer(container, items) {
  items.forEach(item => {
    const menuItem = document.createElement('div');
    menuItem.classList.add('menu-item', 'animate-reveal');
    
    menuItem.innerHTML = `
      <div class="menu-item-image">
        <img src="${item.image}" alt="${item.name}">
      </div>
      <div class="menu-item-content">
        <div class="menu-item-header">
          <h3>${item.name}</h3>
          <span class="price">${item.price}</span>
        </div>
        <p>${item.description}</p>
      </div>
    `;
    
    container.appendChild(menuItem);
  });
}