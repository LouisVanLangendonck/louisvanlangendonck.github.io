const canvas = document.querySelector('#drawing-canvas');
const width = canvas.width = window.innerWidth;
const height = canvas.height = window.innerHeight;
const ctx = canvas.getContext('2d');

class Branch {
    constructor(x,y,width,angle){
        this.x = x;
        this.y = y;
        this.width = width;
        this.angle = angle;
        // this.livelihood = livelihood;
        ctx.strokeStyle = 'white'
        ctx.fillStyle = 'black';
    }

    update(){
        ctx.beginPath()
        ctx.ellipse(this.x, this.y, this.width, this.width, 0, 0, Math.PI*2);
        ctx.fill();
        ctx.stroke();
        ctx.closePath()

        this.x += Math.cos(this.angle)
        this.y += Math.sin(this.angle)

        if (Math.random() < 0.1){
            this.small_change_direc();
        }

        if (Math.random() < 0.01){
            this.branch_off();
        }

        this.width -= 0.04;
        requestAnimationFrame(this.update.bind(this));
    }

    small_change_direc(){
        const new_angle = this.angle + (Math.random()*((Math.PI)/8)) - (Math.random()*((Math.PI)/8))
        this.angle = new_angle
    }

    branch_off() {
        const new_angle = this.angle + (Math.random()*((Math.PI)/2)) - (Math.random()*((Math.PI)/2))
        const branch = new Branch(this.x, this.y, this.width*Math.random(), new_angle);
        branch.update();
    }
}

const branch = new Branch(300,0,50,Math.PI/2);
branch.update();

