export default function(basket=[], action) {
    if(action.type == 'addArticleToBasket') {
        var newBasket = [... basket];
        newBasket.push(action.value)
        console.log("=========DANS LE REDUCEUR", newBasket)
        return newBasket;	
    }else{return basket;		
    }
}
