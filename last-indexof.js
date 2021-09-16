let array;
let value;

function lastIndexOf(array,value)
{
  let lastIndex = -1;
  for (var i = 0 ; i < array.length ; i++)
  {
    if (value === array[i])
    {
      lastIndex = i;
    }
  }
  return lastIndex;
}
console.log(lastIndexOf([ ] , 1));
console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 4));