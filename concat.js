let array1; // = [ 1, 2, 3 ];
let array2; // = [ 4, 5, 6 ];
function concat (array1, array2)
{
  for (var i = 0 ; i < array2.length ; i++)
  {
    array1.push(array2[i]);    
  }
  return array1;
}
console.log(concat([ 1, 2, 3 ],[ 4, 5, 6 ]));
