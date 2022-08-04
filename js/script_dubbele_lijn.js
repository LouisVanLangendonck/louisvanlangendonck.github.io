const canvas = document.querySelector('#drawing-canvas');
const width = canvas.width = window.innerWidth;
const height = canvas.height = window.innerHeight;
const ctx = canvas.getContext('2d');



class Root {
    constructor(x,y,x2,y2,angle,livelihood,curvability){
        this.x_1 = x;
        this.y_1 = y;
        this.x_2 = x2;
        this.y_2 = y2;
        this.width = Math.sqrt((x-x2)*(x-x2) + (y-y2)*(y-y2))
        ctx.lineWidth = 5;
        ctx.strokeStyle = 'white'
        ctx.strokeStyle = 'white';
        this.angle = angle;
        this.threshold = y + (Math.random() * height * 0.5)
        this.livelihood = livelihood
        this.curvability = curvability
    }

    small_branch_left(){
        var branch_width = (Math.random()*this.width);
        const branch = new Root(this.x_2, this.y_2, this.x_2 - branch_width*Math.cos(this.angle), 
                                this.y_2 - branch_width*Math.sin(this.angle), this.angle - Math.random()*(Math.PI/2), 
                                Math.random()*0.8*this.livelihood, this.curvability*2);
        branch.update();
    }

    small_branch_right(){
        var branch_width = (Math.random()*this.width)/2;
        const branch = new Root(this.x_1, this.y_1, this.x_1 + branch_width*Math.cos(this.angle), 
                                this.y_1 + branch_width*Math.sin(this.angle), Math.random()*((Math.PI)/2), Math.random()*0.8*this.livelihood
                                , this.curvability*2);
        branch.update();
    }

    small_change_direc(){
        const new_direc = this.angle + (Math.random()*((Math.PI)/8)) - (Math.random()*((Math.PI)/8))
        const branch = new Root(this.x_1, this.y_1, this.x_2, this.y_2, new_direc, this.livelihood
                                ,this.curvability);
        this.livelihood = 0;
        branch.update();
    }

    split(){
        const new_direc_left = this.angle + (Math.random()*((Math.PI)/6))
        const new_direc_right = this.angle - (Math.random()*((Math.PI)/6))
        const branch_width_left = Math.random()*this.width
        const branch_width_right = this.width - branch_width_left
        const branch_left = new Root(this.x_1, this.y_1, this.x_1 + branch_width_left*Math.sin(this.angle), 
                                this.y_1 - branch_width_left*Math.cos(this.angle), new_direc_left, Math.random()*0.8*this.livelihood + branch_width_left/50,
                                 this.curvability*2)
        const branch_right = new Root(this.x_1 + branch_width_left*Math.sin(this.angle), 
                                this.y_1 - branch_width_left*Math.cos(this.angle), 
                                this.x_2, this.y_2, new_direc_right, Math.random()*0.8*this.livelihood + branch_width_right/50, 
                                this.curvability*2)
        branch_left.update();
        branch_right.update();
        this.livelihood = 0;
    }


    update(){
        ctx.beginPath()
        ctx.moveTo(this.x_1, this.y_1)
        this.x_1 += Math.cos(this.angle)
        this.y_1 += Math.sin(this.angle)
        ctx.lineTo(this.x_1, this.y_1)
        ctx.stroke()
        ctx.closePath()

        ctx.beginPath()
        ctx.moveTo(this.x_2, this.y_2)
        this.x_2 += Math.cos(this.angle)
        this.y_2 += Math.sin(this.angle)
        ctx.lineTo(this.x_2, this.y_2)
        ctx.stroke()
        ctx.closePath()

        if (this.width < 1){
            this.livelihood = 0;
        }

        if (this.livelihood > 0.1){
            requestAnimationFrame(this.update.bind(this));
        } 

        if (Math.random() < 0.005){
            this.threshold += Math.random() * height;
            this.small_branch_left();
        }

        if (Math.random() < 0.005){
            this.threshold += Math.random() * height;
            this.small_branch_right();
        }

        else if (Math.random() < 0.1*this.curvability) {
            this.small_change_direc();
        }

        else if (Math.random() < 0.002) {
            this.split();
        }   

        
    }
}

const root = new Root(300, 0, 350, 0, Math.random()*Math.PI, 1, 0.1);
root.update();