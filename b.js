function func1(){
    return new Promise(function(resolve,reject){
    setTimeout(()=>{
    const error=true;
    if(!error){
    console.log("promise resolved")
    resolved();
    }
    else{
    console.log("not resolved")
    reject("sorry");;
    }
    },2000);
    })
    }

    func1().then(
        function(){
            console.log("resolved");
        }).catch(
        function(){
            console.log("error");
        
        })