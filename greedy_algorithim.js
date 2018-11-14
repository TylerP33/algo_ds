

const contests = [
5, 1,
2, 1,
1, 1,
8, 1,
10, 0,
5, 0
]

function luckBalance(contests) {
    var contestRanking = contests.filter(function(value, index, Arr) {
    return index % 2 == 1;
    });

    var luck = contests.filter(function(value, index, Arr) {
    return index % 2 == 0;
    });

let m = [];
let notimportant = []
for(let i = 0; i < contestRanking.length; i++){
    for(let j = 0; j < luck.length; j++){
        if (contestRanking[i] === 1 && luck[i + 1] !== 0){
            m.push(luck[i]);
        } else {
            notimportant.push(luck[i])
        }
    }
}

function onlyUnique(value, index, self) { 
    return self.indexOf(value) === index;
}
const unique = m.filter( onlyUnique );
const finalUnique = notimportant.filter( onlyUnique );

const lowestNumber = Math.min(...unique);
const lastFilter = unique.filter(function(e) { return e !== lowestNumber})


let firstSum = 0;
let secondSum = 0;
for(let i = 0; i < lastFilter.length; i++){
    firstSum+=lastFilter[i]
}

    for(let i = 0; i < finalUnique.length; i++){
    secondSum+=finalUnique[i]
}

let final = firstSum + secondSum - 1

console.log(final)

}


luckBalance(contests)



