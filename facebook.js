/*
 * Programming Quiz: Facebook Friends (7-5)
 */

/*
 * QUIZ REQUIREMENTS
 * - Your code should have an object `facebookProfile`
 * - The `facebookProfile` object should have the `name` (string), `friends` (number), and `messages` (array of strings) property
 * - Your `facebookProfile` object should have the `postMessage()`, `deleteMessage()`, `addFriend()` and `removeFriend()` method
 * - Carefully implement the desired functionality of each method, as decribed above
 */


// TIP - 
// In an array, 
// - addition at the end is done using push() method
// - addition at a specific index is done using splice() method
// - deletion from the beginning is done using pop() method
// - deletion from a specific index is done using splice() method

// your code goes here


var facebookProfile = {
  name: "Suzie",
  friends: 50,
  messages: ["Hi dear", "How are you", "I am fine"],
  postMessage: function(message)
  {
    facebookProfile.messages.push(message);  
    return message;
  },
  deleteMessage: function(index)
  {
    facebookProfile.messages.splice(index,1)
    return index;
  },
  addFriend: function(num)
  {
    facebookProfile.friends += 1;
    return num;
  },
  removeFriend: function(num)
  {
    facebookProfile.friends -= 1;
    return num;
  }
  
  
}
facebookProfile.postMessage("Helloooo");
console.log(facebookProfile.messages);
facebookProfile.deleteMessage(1);
console.log(facebookProfile.messages);
facebookProfile.addFriend();
console.log(facebookProfile.friends);
facebookProfile.removeFriend();
console.log(facebookProfile.friends);
