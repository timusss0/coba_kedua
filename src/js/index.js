const canvas = document.querySelector("canvas")
const board = canvas.getContext("2d")


canvas.width = DISPLAY_PIXEL.WIDTH * ASPECT_RATIO.WIDTH
canvas.height = DISPLAY_PIXEL.HEIGHT * ASPECT_RATIO.HEIGHT

const ground = new Ground(canvas.width, canvas.height, "Lightblue")

const playerProperty = {
    width : 200,
    height: 300,
    speed:1,
    color:"green",
    position: {
        x: 0,  
        y: 0,
    }
}
const player = new Player(playerProperty)
ground.create()
player.create()
