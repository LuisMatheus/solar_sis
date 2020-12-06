class Transformations{

    /*
    minha funcao dot retorna vetor em vez de matriz
    */
    translate2D(vector,dx,dy){
        let m = new Matrix(3,3,[1,0,dx,
                                0,1,dy,
                                0,0,1 ]);
        return this.dot(m,vector);
    }

    translate3D(vector,dx,dy,dz){
        let m = new Matrix(4,4,[1,0,0,dx,
                                0,1,0,dy,
                                0,0,1,dz,
                                0,0,0,1]);
        return this.dot(m,vector);
    }

    rotation2D(vector,angle){
        let m = new Matrix(3,3,[Math.cos(angle), -Math.sin(angle),0,
                                Math.sin(angle), Math.cos(angle),0,
                                        0      ,       0        ,1]);
        return this.dot(m,vector);
    }

    rotation3Dx(vector,angle){
        let m = new Matrix(4,4,[1,      0        ,      0         ,0,
                                0,Math.cos(angle),-Math.sin(angle),0,
                                0,Math.sin(angle), Math.cos(angle),0,
                                0,      0        ,      0         ,1]);
        return this.dot(m,vector);
    }

    rotation3Dy(vector,angle){
        let m = new Matrix(4,4,[ Math.cos(angle),0,Math.sin(angle),0,
                                        0       ,1,     0,         0,
                                -Math.sin(angle),0,Math.cos(angle),0,
                                        0       ,0      ,0        ,1]);
        return this.dot(m,vector);
    }

    rotation3Dz(vector,angle){
        let m = new Matrix(4,4,[Math.cos(angle),-Math.sin(angle),0,0,
                                Math.sin(angle), Math.cos(angle),0,0,
                                        0      ,       0        ,1,0,
                                        0      ,       0        ,0,1]);
        return this.dot(m,vector);
    }

    scale2D(vector,value){
        let m = new Matrix(3,3,[value ,   0 ,0,
                                0     ,value,0,
                                0     ,   0 ,1]);
        return this.dot(m,vector);
    }

    scale2Dx(vector,value){
        let m = new Matrix(3,3,[value ,0,0,
                                0     ,1,0,
                                0     ,0,1]);
        return this.dot(m,vector);

    }

    scale2Dy(vector,value){
        let m = new Matrix(3,3,[1,  0  ,0,
                                0,value,0,
                                0,  0  ,1]);
        return this.dot(m,vector);

    }

    scale3D(vector,value){
        let m = new Matrix(4,4,[value,  0  ,  0  ,0,
                                0    ,value,  0  ,0,
                                0    ,  0  ,value,0,
                                0    ,  0  ,  0  ,1]);
        return this.dot(m,vector);
    }

    scale3Dx(vector,value){
        let m = new Matrix(4,4,[value,0,0,0,
                                0    ,1,0,0,
                                0    ,0,1,0,
                                0    ,0,0,1]);
        return this.dot(m,vector);
    }

    scale3Dy(vector,value){
        let m = new Matrix(4,4,[1,  0  ,0,0,
                                0,value,0,0,
                                0,  0  ,1,0,
                                0,  0  ,0,1]);
        return this.dot(m,vector);
    }

    scale3Dz(vector,value){
        let m = new Matrix(4,4,[1,0,  0  ,0,
                                0,1,  0  ,0,
                                0,0,value,0,
                                0,0,  0  ,1]);
        return this.dot(m,vector);
    }

    scale3Dxy(vector,value){
        let m = new Matrix(4,4,[value,  0  ,0,0,
                                0    ,value,0,0,
                                0    ,  0  ,1,0,
                                0    ,  0  ,0,1]);
        return this.dot(m,vector);
    }

    scale3Dyz(vector,value){
        let m = new Matrix(4,4,[1,  0  ,  0  ,0,
                                0,value,  0  ,0,
                                0,  0  ,value,0,
                                0,  0  ,  0  ,1]);
        return this.dot(m,vector);
    }

    scale3Dxz(vector,value){
        let m = new Matrix(4,4,[value,0,  0  ,0,
                                0    ,1,  0  ,0,
                                0    ,0,value,0,
                                0    ,0  ,  0  ,1]);
        return this.dot(m,vector);
    }

    reflection2Dx(vector){
        let m = new Matrix(3,3,[-1 ,0,0,
                                0  ,1,0,
                                0  ,0,1 ]);
        return this.dot(m,vector);
    }

    reflection2Dy(vector){
        let m = new Matrix(3,3,[1, 0,0,
                                0,-1,0,
                                0, 0,1 ]);
        return this.dot(m,vector);
    }

    reflection2Dorigin(vector){
        let m = new Matrix(3,3,[-1, 0,0,
                                0 ,-1,0,
                                0 , 0,1 ]);
        return this.dot(m,vector);
    }

    reflection3Dyz(vector){
        let m = new Matrix(4,4,[-1,0,0,0,
                                0,1,0,0,
                                0,0,1,0,
                                0,0,0,1]);
        return this.dot(m,vector);
        
    }

    reflection3Dxz(vector){
        let m = new Matrix(4,4,[1, 0,0,0,
                                0,-1,0,0,
                                0, 0,1,0,
                                0, 0,0,1]);
        return this.dot(m,vector);
    }

    reflection3Dxy(vector){
        let m = new Matrix(4,4,[1,0, 0,0,
                                0,1, 0,0,
                                0,0,-1,0,
                                0,0, 0,1]);
        return this.dot(m,vector);
    }

    reflection3Dorigin(vector){
        let m = new Matrix(4,4,[-1,0, 0,0,
                                0,-1, 0,0,
                                0, 0,-1,0,
                                0, 0, 0,1]);
        return this.dot(m,vector);
    }

    projection2Dx(vector){
        let m = new Matrix(3,3,[1,0,0,
                                0,0,0,
                                0,0,1]);
        return this.dot(m,vector);
    }

    projection2Dy(vector){
        let m = new Matrix(3,3,[0,0,0,
                                0,1,0,
                                0,0,1]);
        return this.dot(m,vector);
    }

    projection3Dx(vector){
        let m = new Matrix(4,4,[1,0,0,0,
                                0,0,0,0,
                                0,0,0,0,
                                0,0,0,1]);
        return this.dot(m,vector);
    }

    projection3Dy(vector){
        let m = new Matrix(4,4,[0,0,0,0,
                                0,1,0,0,
                                0,0,0,0,
                                0,0,0,1]);
        return this.dot(m,vector);
    }

    projection3Dz(vector){
        let m = new Matrix(4,4,[0,0,0,0,
                                0,0,0,0,
                                0,0,1,0,
                                0,0,0,1]);
        return this.dot(m,vector);
    }

    shearingX(vector,k){
        let m = new Matrix(3,3,[1,0,0,
                                k,1,0,
                                0,0,1]);
        return this.dot(m,vector);

    }

    shearingY(vector,k){
        let m = new Matrix(3,3,[1,k,0,
                                0,1,0,
                                0,0,1]);
        return this.dot(m,vector);
    }

    dot(a,b){
        if(a.cols != b.rows){throw("Matrizes incompativeis");}
        let aux = new Matrix(a.rows,b.cols);
        let sum = 0;

        for(let i = 1 ; i <= a.rows ; i++){
            for(let j = 1 ; j <= b.cols ; j++){
                sum = 0;
                for(let k = 1 ; k <= b.rows ; k++){
                    sum += a.get( i , k ) * b.get( k , j );
                }
                aux.set( i , j , sum );
            }
            
        }
        let res = new Vector(a.rows);
        for(let i = 1 ; i <= a.rows ; i++){
            res.set(i,aux.get(i,1))
        }
        return res;
    }
}