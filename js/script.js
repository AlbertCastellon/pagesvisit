const clearBtn = document.getElementById('btnReestablecer');
const contadorVisitas = document.getElementById('contadorVisitas');
let contador = 0;
localStorage.setItem('contador', `${contador}`)
clearBtn.addEventListener('click', () => {
    contador = 0;
    localStorage.setItem('contador', `${contador}`)
    contadorVisitas.innerHTML = localStorage.getItem('contador')
})

contadorVisitas.innerHTML = localStorage.getItem('contador')
console.log(localStorage)