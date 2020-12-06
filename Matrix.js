class Matrix{
    constructor(rows,cols,values){
        this.rows = rows;
        this.cols = cols;
        if(values == undefined){
            this.values = [];
            for(let i = 0 ; i < this.rows*this.cols ; i++){
                this.values.push(0);
            }
        }else{
            if(this.rows * this.cols == values.length){
                this.values = values;
            }else{
                throw("valor das matrizes invalidos");
            }
        }
        
        
    }

    get(i,j){
        if(i < 1 || i > this.rows){throw("valor da linha invalida");}
        if(j < 1 || j > this.cols){throw("valor da coluna invalida");}

        return this.values[this.getIndex(i,j)];
    }

    set(i,j,value){
        this.values[this.getIndex(i,j)] = value;
    }

    getIndex(i,j){
        return (j - 1) + (i - 1) * this.cols;
    }
}