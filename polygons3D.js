class sphere{
    constructor(x,y,z,r,st,se){

        this.stackCount = st;
        this.sectorCount = se;

        this.x = x;
        this.y = y;
        this.z = z;
        
        this.points = [];

        let sectorStep = 2* Math.PI/se;
        let stackStep = Math.PI/st;
        let sectorAngle, stackAngle;
        let xy ;
        let newX,newY,newZ

        for (let i = 0; i <= this.stackCount; ++i) {
            stackAngle = Math.PI/2 - i*stackStep;
            xy = r * Math.cos(stackAngle) 
            newZ = r * Math.sin(stackAngle)

            for(let j = 0 ; j <= this.sectorCount ; ++j){
                sectorAngle = j*sectorStep;
                newX = xy * Math.cos(sectorAngle);
                newY = xy * Math.sin(sectorAngle);
                this.points.push(new Vector(4,[newX+x,newY+y,newZ+z,1]))
            }

        }

        this.color = '#000000';
        this.trans = new Transformations();
    }

    setColor(newColor){
        this.color = newColor;
    }

    draw(){
        let k1,k2;
        strokeWeight(0);
        stroke(this.color);
        fill(this.color);
        beginShape(TRIANGLES)
        for (let i = 0; i < this.stackCount; ++i) {
            k1 = i * (this.sectorCount + 1);
            k2 = k1 + this.sectorCount + 1;
            for (let j = 0; j < this.sectorCount; ++j, ++k1 , ++k2) {
                if(i!=0){
                    vertex(this.points[k1].get(1),this.points[k1].get(2),this.points[k1].get(3))
                    vertex(this.points[k2].get(1),this.points[k2].get(2),this.points[k2].get(3))
                    vertex(this.points[k1+1].get(1),this.points[k1+1].get(2),this.points[k1+1].get(3))
                }if(i != (this.stackCount - 1)){
                    vertex(this.points[k1+1].get(1),this.points[k1+1].get(2),this.points[k1+1].get(3))
                    vertex(this.points[k2].get(1),this.points[k2].get(2),this.points[k2].get(3))
                    vertex(this.points[k2+1].get(1),this.points[k2+1].get(2),this.points[k2+1].get(3))
                }
            }
        }
        endShape(CLOSE);
    }

    translate(dx,dy,dz){
        for (let i = 0; i < this.points.length; i++) {
            this.points[i] = this.trans.translate3D(this.points[i],dx,dy,dz);    
        }
        
    }

    rotateX(angle){

        this.translate(-this.x,-this.y,-this.z)

        for (let i = 0; i < this.points.length; i++) {
            this.points[i] = this.trans.rotation3Dx(this.points[i],angle);
        }

        this.translate(this.x,this.y,this.z)

    }

    rotateY(angle){

        this.translate(-this.x,-this.y,-this.z)

        for (let i = 0; i < this.points.length; i++) {
            this.points[i] = this.trans.rotation3Dy(this.points[i],angle);
        }

        this.translate(this.x,this.y,this.z)

    }

    rotateZ(angle){

        this.translate(-this.x,-this.y,-this.z)

        for (let i = 0; i < this.points.length; i++) {
            this.points[i] = this.trans.rotation3Dz(this.points[i],angle);
        }

        this.translate(this.x,this.y,this.z)

    }

    orbit(angle,target){

        this.translate(-target[0],-target[1],-target[2]);

        for (let i = 0; i < this.points.length; i++) {
            this.points[i] = this.trans.rotation3Dz(this.points[i],angle);
        }

        this.translate(target[0],target[1],target[2]);
    }
    
}
