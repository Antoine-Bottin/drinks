export default function(customerId = "", action){
    console.log(action.value)
    if(action.type === 'storeCustomerId'){
         var newCustomerId = action.value;
         console.log("===REDUCEUR CUSTOMER ID ====", newCustomerId);
         return newCustomerId
    } 
    else{
        return customerId;
    }
 }