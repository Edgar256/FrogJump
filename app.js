function solution(X, Y, D) {
    // write your code in JavaScript (Node.js 8.9.4)
    var jumps = 0;
    var currentJumps;
    //var coveredDistance;
    
    if(X >= Y || Y < 1){
        //jumps = 0;
        return jumps;
    }else{
        for( var coveredDistance = X; coveredDistance<Y;jumps++){
            currentJumps = jumps + 1;
            coveredDistance = coveredDistance+D;
        }
       
    }
    return currentJumps;
}