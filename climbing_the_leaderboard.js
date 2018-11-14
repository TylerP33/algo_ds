const scores = [ 100, 100, 50, 40, 40, 20, 10 ]
const alice = [ 5, 25, 50, 120 ]

function climbingLeaderboard(scores, alice) {
var result = []

     function sortNumber(a, b){
                return b - a
     }

     function onlyUnique(value, index, self) {
         return self.indexOf(value) === index;
     }


    for(var i = 0; i < alice.length; i++){
            scores.push(alice[i])
            scores.sort(sortNumber)
            result.push(scores.filter(onlyUnique).indexOf(alice[i]) + 1)
     }
     console.log(result);
}

climbingLeaderboard(scores, alice)