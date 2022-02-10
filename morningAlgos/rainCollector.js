/*
Link: https://github.com/kylecombs/water_collector/blob/main/README.md

Given n non- negative integers representing an elevation map where the width of each bar is 1, compute how much water your collection device is able tgo trap after raining

Restate:
So create a function that takes 1 inputs: an array
the array is made up of n number of postive or 0 number
each element should represent a stack of blocks at that index
output: returns a number of how many blocks of water you can trap between blocks
the water can only collect inbetween 2 blocks

To determine the water, look at the left max and right max of the index next to it, the distance of the water will be based on the shortest neighbor - your own


Example:
Given [0,1,0,2,1,0,1,3,2,1,2,1] return 6
Given [1,0,1] returns 1
Given [0,2,1,0] returns 0

Approach / Code:
Using Memoization approach
At any given point, you want to find the max number of its neighboring to left and right
Create an array of the right max at every index using Math.max() and have a seperate loop that creates that
then we create a seperate loop that loops through the array
*/

function rainCollector (array){
  // create a variable that holds the amount of water you are going to collect
  // iterate through the array:
  // at each iteration, we want to find
  // 1) the max number where the array is from the beginning to the index your at
  // 2) the max number where the array is from your index to the end of your array
  // compare it the value at the index you are on
  // if the value is greater than the maxes, continue
  // if the value is smaller than the maxes, figure out which side is smaller and subtract that value from the number
  // add it ot counter of water collected
  // return count

}
