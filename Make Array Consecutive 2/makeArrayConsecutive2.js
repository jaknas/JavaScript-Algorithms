function makeArrayConsecutive2(statues) {
    var amount = 0;
    var sorted = statues.sort(function(a,b){
        return a>b;
    });
    var min = Math.min(...sorted);
    var max = Math.max(...sorted);
    
    for (var i = min; i < max; i++){
        if(statues.indexOf(i) === -1){
            amount++;
        }
    }
    return amount;
}
