const iniciar = document.querySelector('#semaforoBtn');
const luces = document.querySelectorAll('.luces')
let contador = 0;



iniciar.addEventListener('click', (e) => {
  e.preventDefault();
  const mostrarLuz = () =>{
    luces[contador].className = 'luces';
    contador ++;
  
    if(contador > 2) {
      contador = 0;
    }
  
    const luz = luces[contador];
    luz.classList.add(luz.getAttribute('color'));
  }
  
  setInterval(mostrarLuz,1000)
})