function array(arr, num){
try{
    if(!arr && !num) throw new ReferenceError("Envie os Parâmetros");

    if(typeof arr !== 'object') throw new TypeError("Array precisa ser do tipo objeto");

    if(typeof num !== 'number') throw new TypeError("Num precisa ser do tipo numero");

    if(arr.length !== num) throw new RangeError ("Tamnaho invalido");

    return arr;
}

catch(e){
    if(e instanceof ReferenceError){
        console.log("Este erro é um ReferenceError!")
       // console.log(e.name)
       // console.log(e.stack);
       console.log(e.message)
    }else if (e instanceof TypeError){
        console.log("Este erro é um TypeError!")
       // console.log(e.name)
       // console.log(e.stack);
       console.log(e.message)
    }else if(e instanceof RangeError){
        console.log("Este erro é um RangeError!")
       // console.log(e.name)
       // console.log(e.stack);
       console.log(e.message)
    }else{
        console.log("OCorreu um tipo de erro não esperado: " +e);

    }
}
}

console.log(array([1,2,3,4,5],5));