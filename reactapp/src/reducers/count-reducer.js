export default function(count = 0, action) {
    if(action.type === 'addArticleToCount') {
        var newCount = count + 1;	
        return newCount;	
    }else{return count;		
    }
}
