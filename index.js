function hasTargetsum(array,target){
  // create an object of numbers already seen 
  const seenNumbers = {}
  for(number of array){
    // n steps
    const complement = target -number;
    if(complement in seenNumbers)return true

    seenNumbers[number] =true
  } 

  return false
}
// function hasTargetSum(array, target) {
//   for(let i = 0;i<array.length;i++){
//     const complement = target -array[i];
//     for (let j= i+i;arrray.length;j++){
//       if (array[j]=== complement)return true    
//     }
//   }
//   return false 
// }

/* 
 Runtime: O(n^2)
 Space:O(n)


 Runtime :O(n)
*/

/* 
  hasTargetSum([1,2,3,4,5],6)
  seenNumbers ={
    1:true,
    2:true,
    3:true,

  }
  create an object of numbers already seen 
   write a function that iterates through an array 
   for the current number ,identify a complement that add up to the  target (complement = target -num )
   check if that complement exist if it does return true 
   otherwise return false
*/

if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
