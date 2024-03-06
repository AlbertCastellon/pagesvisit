const clearBtn = document.getElementById('btnReestablecer');
const contadorVisitas = document.getElementById('contadorVisitas');

localStorage.setItem('0', 0)
contadorVisitas.innerHTML = `${localStorage.length}`
window.addEventListener('load', () => {

        localStorage.setItem(`${localStorage.length}`, `${localStorage.length}`)

    
})
    



clearBtn.addEventListener('click', () => {

    localStorage.clear()
    contadorVisitas.innerHTML = localStorage.length
})

contadorVisitas.innerHTML = localStorage.length
console.log(localStorage)