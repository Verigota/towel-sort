
// You should implement your task here.

module.exports = function towelSort (matrix) {
  if (!matrix) {
    return [];
  }
  let newArr = [];
  for (let i = 0; i < matrix.length; i++){
    if (i%2 === 0){
      matrix[i].sort((a, b) => a-b);
      matrix[i].forEach(element => {
        newArr.push(element);
      });
    } else {
        matrix[i].sort((a, b) => b - a);
        matrix[i].forEach(element => {
          newArr.push(element);
        });
    }
  }
  return newArr;

}