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