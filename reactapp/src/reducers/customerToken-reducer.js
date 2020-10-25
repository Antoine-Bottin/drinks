export default function(customerToken = "", action){
    console.log(action.value)
    if(action.type === 'storeCustomerToken'){
         var newCustomerToken = action.value;
         console.log("===REDUCEUR CUSTOMER TOKEN ====", newCustomerToken);
         return newCustomerToken
    } else{
        return customerToken;
    }
 }