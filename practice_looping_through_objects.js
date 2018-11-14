const objects = [ { x: 1, y: 1 },
  { x: 2, y: 3 },
  { x: 3, y: 3 },
  { x: 3, y: 4 },
  { x: 4, y: 5 } ]

counter = 0
for(let i = 0; i < objects.length; i++){
    if (objects[i].x === objects[i].y){
        counter++
        console.log(objects[i])
    }
}

console.log(counter)