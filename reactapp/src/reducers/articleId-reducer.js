export default function(articleId=[], action) {
    
    if(action.type == 'addArticleIdToBasket') {
        var newArticleIdToSort = [... articleId];
        newArticleIdToSort.push(action.value)
        newArticleId = [... new Set(newArticleIdToSort)]
        console.log("REDUCEUR AGAIN", action.quantity)
        console.log("=========DANS LE REDUCEUR", newArticleId, "NOMBRE D ARTICLES",newArticleId.length)
        return newArticleId;	

    }else if(action.type=='deleteArticleIdToBasket'){	
        var newArticleId = [... articleId]
        newArticleId = articleId.filter(articleId =>articleId !== action.value);
        console.log("======== DELETE REDUCEUR",action.value)
        console.log(newArticleId)
        return newArticleId;
        
    }else{return articleId}
    
};
