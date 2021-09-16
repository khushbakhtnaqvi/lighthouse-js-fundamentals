const ingredients = ["eggs", "milk", "flour", "sugar", "baking soda", "baking powder", "chocolate chips", "bananas"];

// Write a while loop that prints out the contents of ingredients:

var i=0;
while(i < ingredients.length)
{
  console.log(ingredients[i]);
  i++;
}
console.log("\nwhile loop ends\n")
// Write a for loop that prints out the contents of ingredients:

for(var j=0 ; j<ingredients.length ; j++)
{
  console.log(ingredients[j]);
}
console.log("\nfor loop ends\n")


// Write any loop (while or for) that prints out the contents of ingredients backwards:

for(var k = ingredients.length-1 ; k > -1 ; k--)
{
  console.log(ingredients[k]);
}
console.log("\nreverse for loop ends\n")
