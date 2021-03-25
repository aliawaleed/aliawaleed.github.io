let water = document.getElementById("water")
let waves = document.getElementById("waves")

water.addEventListener('mouseenter', () => {
  waves.play();
})

water.addEventListener('mouseleave', () => {
  waves.pause();
})


let sky = document.getElementById("sky")
let birds = document.getElementById("birds")

sky.addEventListener('mouseenter', () => {
  birds.play();
})

sky.addEventListener('mouseleave', () => {
  birds.pause();
})
