const btn = document.querySelector('#btn')
const h1 = document.querySelector('h1')


function changeColor() {
  h1.style.color = 'red';
}
// btn.addEventListener('click', hello);
// btn.removeEventListener('click', hello);

btn.onclick = changeColor;