function solution(v) {
  var answer = [
      []
  ];

  slice(v);

  return answer;
}

function slice(v) {
  let arr = [];

  for(let i = 0; i < v.length; i++) {
    arr = [...arr, v[i][0], v[i][1]];
  }

  console.log(arr);
}

solution([[1, 4], [3, 4], [3, 10]]);