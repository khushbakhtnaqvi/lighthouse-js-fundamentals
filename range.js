let start;
let end;
let step;
let numbers = [];

function range(start , end , step)
{
  let numbers = [];
  if (start === undefined || end === undefined || step === undefined || start > end || step <= 0)
  {
    numbers = [];
  }
  else
  {
    numbers = [];
    for(var i = start ; i <= end ; i = i + step)
    {
      numbers.push(i);
    }
  }
  return numbers;
}

console.log(range(0, 8, 2) + "\n");
console.log(range(10, 30, 5) + "\n");
console.log(range(-5, 2, 3) + "\n");