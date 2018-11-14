function twoStrings(s1, s2) { 
let m;
  for(let i = 0; i < s1.length; i++){
      if (s2.includes(s1[i])){
          m = s1[i]
      }
  }

    if (m !== undefined){
        return "YES"
    } else {
        return "NO"
    }

}