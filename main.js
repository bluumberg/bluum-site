// Prvents menu from scrolling when opened
document.querySelector('.checkbox').addEventListener('change', function() {
    document.body.classList.toggle('menu-open', this.checked);
  });