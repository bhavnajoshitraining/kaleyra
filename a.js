let promiseToClean = new Promise(function(resolve,reject){
    let isClean =true;
    if(isClean){
       resolve();
    } else{
    reject();
    }
    
    });
    
    promiseToClean.then(
    function(resolve){
    console.log('the room'+resolve);
    }).catch(function(reject){
    console.log('the room '+reject)
    }
    );