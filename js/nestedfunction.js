function outer(){
    let outer_variable='this is outer variable'
    function inner(){
        console.log('inner function accessing outer variable')
        console.log(outer_variable)
    }
    return inner;

}
 let funcCall=outer();
 console.log(funcCall)
 console.log(funcCall.outer_variable)
 funcCall();