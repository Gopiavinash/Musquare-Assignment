function optSelect() {
  const select = document.querySelector('.select');
  let price = document.querySelector('.price-value');
  let priceDet = document.querySelector('.price-details');

  const selectContent = select.options[select.selectedIndex].text;

  if (selectContent === 'Extended License') {
    price.textContent = '400';
    priceDet.textContent = 'can be';
  } else {
    price.textContent = '12';
    priceDet.textContent = 'are not';
  }
}
