export default function(customerToken = "", action){
    console.log(action.value)
    if(action.type === 'storeCustomerToken'){
         var newCustomerToken = action.value;
         console.log("===REDUCEUR CUSTOMER ID ====", newCustomerToken);
         return newCustomerToken
    } else{
        return customerToken;
    }
 }