
let counter  =0;
const getData = (args) => {
    // calls an API and gets data 
    console.log(this);
    console.log("Fetching Data ...",counter++);
}

const doSomeMagic = function (fn, delay) {
    let timer;
    
    return function() {      
        let context = this; // outside also works  
        args = arguments;
        clearTimeout(timer);
        timer = setTimeout( () => {
            fn.apply(context,args);
        } ,delay);
    }
}

const betterFunction = doSomeMagic(getData, 300);