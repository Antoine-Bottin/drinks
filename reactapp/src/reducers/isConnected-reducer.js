export default function(isConnected = false, action){
    if(action.type === 'signInConnected'){
         var newIsConnected = true;
         console.log("===REDUCEUR ====", isConnected);
         return newIsConnected
    } 
    else{
        return isConnected;
    }
 }