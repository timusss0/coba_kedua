class Player{
    constructor(props){
        this.width = props.width
        this.heigth = props.heigth
        this.speed = props.speed
        this.color = props.color
        this.position = {
            x: props.position.x,
            y:props.position.y 
        }
    }
    create(){
        board.fillStyle = this.color
        board.fillRect(this.position.x, this.position.y, this.width, this.heigth)
    }
}