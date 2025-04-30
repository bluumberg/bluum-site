    // JS TO PREVENT SCROLLING ISSUE WHEN MENU IS OPEN//
    
    document.addEventListener('DOMContentLoaded', function() {
        // Get the checkbox element
        const menuCheckbox = document.querySelector('.checkbox');
        
        // Add event listener to the checkbox
        menuCheckbox.addEventListener('change', function() {
          // If checkbox is checked, add 'menu-open' class to body, otherwise remove it
          if (this.checked) {
            document.body.classList.add('menu-open');
          } else {
            document.body.classList.remove('menu-open');
          }
        });
      });

      // Update to see if it fixes scrolling issue

      document.addEventListener('DOMContentLoaded', function() {
        const menuCheckbox = document.querySelector('.checkbox');
        let scrollPosition = 0;
        
        menuCheckbox.addEventListener('change', function() {
          if (this.checked) {
            // Save current scroll position
            scrollPosition = window.pageYOffset;
            
            // Add menu-open class and set specific iOS styles
            document.body.classList.add('menu-open');
            
            // Apply inline styles for iOS
            document.body.style.position = 'fixed';
            document.body.style.top = `-${scrollPosition}px`;
            document.body.style.width = '100%';
          } else {
            // Remove menu-open class
            document.body.classList.remove('menu-open');
            
            // Remove inline styles and restore scroll position
            document.body.style.position = '';
            document.body.style.top = '';
            document.body.style.width = '';
            window.scrollTo(0, scrollPosition);
          }
        });
      });

// CONTACT FORM Modal Toggle
document.getElementById('open-modal').addEventListener('click', function(e) {
  e.preventDefault();
  document.getElementById('contact-modal').classList.remove('hidden');
  document.getElementById('contact-modal').style.display = 'flex';
});

document.getElementById('close-modal').addEventListener('click', function() {
  document.getElementById('contact-modal').style.display = 'none';
});

// HOME TEXT ANIMATION
document.addEventListener("DOMContentLoaded", () => {
  const heading = document.querySelector(".hero-content h1");
  const words = heading.textContent.trim().split(" ");
  heading.innerHTML = ""; // clear existing text

  words.forEach((word, index) => {
    const span = document.createElement("span");
    span.textContent = word + " " ;
    span.classList.add("word-fade");
    span.style.animationDelay = `${index * 0.3}s`; // adjust delay speed here
    heading.appendChild(span);
  });
});

// ABOUT PAGE ANIMATIONS
document.addEventListener("DOMContentLoaded", () => {
  const fadeElements = document.querySelectorAll(".fade-in");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.animationPlayState = 'running';
        observer.unobserve(entry.target); // Optional: Animate only once
      }
    });
  }, {
    threshold: 0.2
  });

  fadeElements.forEach(el => {
    el.style.animationPlayState = 'paused'; // Start paused
    observer.observe(el);
  });
});

//text animations on scroll
const fadeIns = document.querySelectorAll('.fade-in');

const fadeInObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    }
  });
}, {
  threshold: 0.2
});

fadeIns.forEach(el => fadeInObserver.observe(el));


