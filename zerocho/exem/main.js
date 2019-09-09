function solution(words, queries) {
  var answer = [];
  
  for(let i = 0; i < queries.length; i++) {
    const findQ = queries[i].indexOf('?');
    let count = 0;
    
    for(let j = 0; j < words.length; j++) {
      if(queries[i].length !== words[j].length) return;
      if(queries[i].slice(0, findQ) !== words[j].slice(0, findQ)) return;
      
      count = count + 1;
    }
  }
  console.log(123)
  
  return answer;
}

solution(["frodo", "front", "frost", "frozen", "frame", "kakao"], ["fro??"]);