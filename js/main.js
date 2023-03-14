const controls = document.querySelectorAll("[data-control]");
const statistic = document.querySelectorAll("[data-statistic]");
const characteristics = {
    "arms": {
        "strength": 29,
        "power": 35,
        "energy": -21,
        "speed": -5
    },

    "armor": {
        "strength": 41,
        "power": 20,
        "energy": 0,
        "speed": -20
    },
    "cores":{
        "strength": 0,
        "power": 7,
        "energy": 48,
        "speed": -24
    },
    "legs":{
        "strength": 27,
        "power": 21,
        "energy": -32,
        "speed": 42
    },
    "rockets":{
        "strength": 0,
        "power": 28,
        "energy": 0,
        "speed": -2
    }
}
controls.forEach((elemento) => {
    elemento.addEventListener("click", (evento) => {
        handleData(evento.target.dataset.control, evento.target.parentNode);
        updateStatistic(evento.target.dataset.parts)
    })
})
function handleData(operation, parentControl) {
    const part = parentControl.querySelector("[data-contador]")
    if (operation === "-"){
        part.value = parseInt(part.value) - 1
    } else {
        part.value = parseInt(part.value) + 1
    }
}
function updateStatistic(parts) {
    statistic.forEach((elemento) => {
        elemento.textContent = parseInt(elemento.textContent) + characteristics[parts][elemento.dataset.statistic]
    })
}