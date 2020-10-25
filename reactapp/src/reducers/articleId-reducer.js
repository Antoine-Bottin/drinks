export default function(articleId=[], action) {
    
    if(action.type == 'addArticleIdToBasket') {
        var Product = new Object();
        Product.id = action.id;
        Product.picture = action.picture
        Product.name = action.name
        Product.category = action.category
        Product.description = action.description 
        Product.stock = action.stock
        Product.priceHT = action.priceHT
        Product.quantity = action.quantity
       
        

        var newArticleIdToSort = [... articleId];
        newArticleIdToSort.push(Product)
        newArticleId = [... new Set(newArticleIdToSort)]
        console.log("REDUCEUR AGAIN", action.quantity)
        console.log("=========DANS LE REDUCEUR", newArticleId, "NOMBRE D ARTICLES",newArticleId.length)
        return newArticleId;
    	

    }else if(action.type=='deleteArticleIdToBasket'){	
        console.log("DELETE=======", action.value)
        var newArticleId = [... articleId]
        newArticleId = articleId.filter(article =>article.id !==action.value);
        console.log("======== DELETE REDUCEUR",action.value)
        console.log(newArticleId)
        return newArticleId;
        
    }else if(action.type=='addOneToQuantity'){
        console.log("Action",action)
        var newArticleId = [... articleId]
        console.log(newArticleId)
        var articleToAddOne = newArticleId.find(article=>article.id==action.value.id);
        articleToAddOne.quantity ++;
        console.log("articleToAddOne",articleToAddOne)

        
        return newArticleId;

    }else if(action.type=='supprOneToQuantity'){
        console.log("ActionSuppr", action)
        var newArticleId = [... articleId]
        var articleToSupprOne = newArticleId.find(article=>article.id==action.value.id);
        articleToSupprOne.quantity -- ;

        console.log("RAHHH",articleToSupprOne)
        
        
        return newArticleId;
    
    }else{
        return articleId
    }
    
};
