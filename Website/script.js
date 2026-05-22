const buttons = document.querySelectorAll('.productsNavigation-box');
const cards = document.querySelectorAll('.product-card');

buttons.forEach(button => {
  button.addEventListener('click', (e) => {
    e.preventDefault();
    
    const targetCategory = button.getAttribute('data-target');

    cards.forEach(card => {
      const cardCategory = card.getAttribute('data-category');
      
      if (targetCategory === 'all' || cardCategory === targetCategory) {
        card.style.display = 'block';
      } else {
        card.style.display = 'none';
      }
    });
  });
});