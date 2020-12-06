class LinearAlgebra {

    transpose(a){
        let c = new Matrix(a.cols,a.rows);

        for(let i = 1 ; i <= c.rows ; i++){
            for(let j = 1 ; j <= c.cols ; j++){
                c.set(i , j , a.get( j , i ) );
            }
        }

        return c;
    }

    plus(a,b){
        if(a.rows != b.rows || a.cols != b.cols){throw("Matrizes incompativeis");}

        let c = new Matrix(a.rows,a.cols);

        for(let i = 1 ; i <= c.rows ; i++){
            for(let j = 1 ; j <= c.cols ; j++){
                c.set(i , j , a.get( i , j ) + b.get(i , j ));
            }
        }

        return c;

    }

    scalarMulti(k,a){
        let c = new Matrix(a.rows,a.cols);

        for(let i = 1 ; i <= c.rows ; i++){
            for(let j = 1 ; j <= c.cols ; j++){
                c.set(i , j , a.get( i , j ) * k);
            }
        }

        return c;
    }

    times(a,b){
        if(a.rows != b.rows || a.cols != b.cols){throw("Matrizes incompativeis");}

        let c = new Matrix(a.rows,a.cols);

        for(let i = 1 ; i <= c.rows ; i++){
            for(let j = 1 ; j <= c.cols ; j++){
                c.set(i , j , a.get( i , j ) * b.get(i , j ));
            }
        }

        return c;
    }

    div(a,b){
        if(a.rows != b.rows || a.cols != b.cols){throw("Matrizes incompativeis");}

        let c = new Matrix(a.rows,a.cols);

        for(let i = 1 ; i <= c.rows ; i++){
            for(let j = 1 ; j <= c.cols ; j++){
                c.set(i , j , a.get( i , j ) / b.get(i , j ));
            }
        }

        return c;
    }

    dot(a,b){
        if(a.cols != b.rows){throw("Matrizes incompativeis");}
        let res = new Matrix(a.rows,b.cols);
        let sum = 0;

        for(let i = 1 ; i <= a.rows ; i++){
            for(let j = 1 ; j <= b.cols ; j++){
                sum = 0;
                for(let k = 1 ; k <= b.rows ; k++){
                    sum += a.get( i , k ) * b.get( k , j );
                }
                res.set( i , j , sum );
            }
            
        }
        return res;
    }

    solve(a){
    
        let res = new Matrix(a.rows,a.cols,a.values);
        let aux = new Vector(a.cols);

        //triangular inferior
        for(let i = 1 ; i <= a.rows ; i++){
            for(let j = 1 ; j <= a.cols -1 ; j++){
                if(i==j){
                    //recomeca o j e pula o i
                    break;
                }
                else{
                    //funcao x*jj = -i,j -> x = -i,j/j,j
                    let con = (-1 * res.get(i,j)) / res.get(j,j);
                    for(let k = 1 ; k <= a.cols ; k++){
                        aux.set(k, res.get(j,k) * con );
                    }
                    for(let l = 1 ; l <= a.cols; l++){
                        res.set(i,l, res.get(i,l) + aux.get(l));
                    }
                }
            }
        }
    
        //triangular superior
        for(let i = a.rows ; i >= 1 ; i--){
            for(let j = a.cols - 1 ; j >= 1 ; j--){
                if(i==j){
                    //recomeca o j e pula o i
                    break;
                }else{
                    let con = (-1 * res.get(i,j)) / res.get(j,j);
                    for(let k = 1 ; k <= a.cols ; k++){
                        aux.set(k, res.get(j,k) * con );
                    }
                    for(let l = 1 ; l <= a.cols; l++){
                        res.set(i,l, res.get(i,l) + aux.get(l));
                    }
                }
            }
        }
    
        //diagonal = 1 e resultado
        for(let i = 1 ; i <= a.rows ; i++){
            //divide a diagonal
            res.set(i,i, res.get(i,i) / res.get(i,i));
            //divide o resultado
            res.set(i,a.cols, res.get(i,a.cols) / res.get(i,i));
        }
    
        let vec = new Vector(a.rows);
    
        //amazenando resultado
        for(let i = 1 ; i <= a.rows ; i++){
            vec.set(i,res.get(i,a.cols));
        }
    
        console.log(vec);
        return vec;
    }

    det(a){
        if(a.cols != a.rows){throw("A matriz tem que ser quadrada!");}

        let permutado = false;
        let sum = 1;
        let res = new Matrix(a.rows,a.cols,a.values);
        let aux = new Vector(a.cols);

        //verifica se existe 0 na diagonal
        for(let i = 1 ; i <= a.rows ; i++){

            if(res.get(i,i) == 0){

                //procura por uma linha para permutacao
                for (let j = 1; j <= res.rows; j++) {

                    if(res.get(j,i) != 0){
                        //swap

                        //armazena os valores da linha sem o 0 temporariamente
                        for (let x = 1; x <= res.cols; x++) {
                            aux.set(x,res.get(j,x));
                        }

                        //copia os valores da linha com 0 para a nova posicao
                        for (let y = 1; y <= res.cols; y++){
                            res.set(j,y, res.get(i,y));
                        }

                        //insere os valores armazenados temporariamente na antiga linha do 0
                        for (let z = 1; z <= res.cols; z++){
                            res.set(i,z, aux.get(z));
                        }
                        
                        //inverte o booleano para caso seja necessario multiplicar o determinante por -1
                        permutado = !permutado;

                        console.log("trocadas as linhas " + i +  " e " + j);

                        break;
                    }

                }
                
            }
        }

        //verficacao final se a matriz eh valida
        for(let i = 1 ; i <= a.rows ; i++){
            if(res.get(i,i) == 0){
                throw("Matriz Invalida!!!")
            }
        }

        //triangular inferior
        for(let i = 1 ; i <= a.rows ; i++){
            for(let j = 1 ; j <= a.cols -1 ; j++){
                if(i==j){
                    //recomeca o j e pula o i
                    break;
                }
                else{
                    //funcao x*jj = -i,j -> x = -i,j/j,j
                    let con = (-1 * res.get(i,j)) / res.get(j,j);
                    for(let k = 1 ; k <= a.cols ; k++){
                        aux.set(k, res.get(j,k) * con );
                    }
                    for(let l = 1 ; l <= a.cols; l++){
                        res.set(i,l, res.get(i,l) + aux.get(l)   );
                    }
                }
            }
        }

        //percorre a diagonal
        for(let i = 1 ; i <= a.rows ; i++){
            //multiplica a diagonal
            sum *= res.get(i,i);
        }

        //caso a matriz tenha sido permutada, o resultado eh multiplicado por -1
        if(permutado){
            sum *= -1;
        }

        return sum;

    }

    inverse(a){
        if(a.cols != a.rows){throw("A matriz tem que ser quadrada!");}
        
        let c = new Matrix(a.rows,a.cols*2);
        let aux = new Vector(c.cols);

        for(let i = 1 ; i <= a.cols ; i++){
            for(let j = 1 ; j <= a.rows ; j ++){
                c.set(i,j,a.get(i,j));
            }
        }
        for(let i = a.cols+1 ; i <= c.cols ; i++){
            for(let j = 1 ; j <= c.rows ; j++){
                if(i-a.cols == j){
                    c.set(j,i,1);
                }else{
                    c.set(j,i,0);   
                }
            }
        }

        //triangular inferior
        for(let i = 1 ; i <= a.rows ; i++){
            for(let j = 1 ; j <= a.cols ; j++){
                if(i==j){
                    //recomeca o j e pula o i
                    break;
                }
                else{
                    let con = (-1 * c.get(i,j)) / c.get(j,j);
                    for(let k = 1 ; k <= c.cols ; k++){
                        aux.set(k, c.get(j,k) * con );
                    }
                    for(let l = 1 ; l <= c.cols; l++){
                        c.set(i,l, c.get(i,l) + aux.get(l));
                    }
                }
            }
        }

        //triangular superior
        for(let i = a.rows ; i >= 1 ; i--){
            for(let j = a.cols ; j >= 1 ; j--){
                if(i==j){
                    //recomeca o j e pula o i
                    break;
                }else{
                    let con = (-1 * c.get(i,j)) / c.get(j,j);
                    for(let k = 1 ; k <= c.cols ; k++){
                        aux.set(k, c.get(j,k) * con );
                    }
                    for(let l = 1 ; l <= c.cols; l++){
                        c.set(i,l, c.get(i,l) + aux.get(l));
                    }
                }
            }
        }

        //diagonal
        for(let i = 1 ; i <= a.rows ; i++){
            if(c.get(i,i) != 1){
                for(let j = i+1 ; j <= c.cols ; j++){
                    c.set(i,j,c.get(i,j)/c.get(i,i) );
                }
                c.set(i,i, c.get(i,i) / c.get(i,i));
            }
            
        }
    
        let res = new Matrix(a.rows,a.cols);
        for(let i = a.cols+1 ; i <= c.cols ; i++){
            for(let j = 1 ; j <= c.rows ; j++){
                res.set(j,i-a.cols,c.get(j,i))
            }
        }

        return res;
    }

}