/*
 * Write a function that halts the JS thread (make it busy wait) for a given number of milliseconds.
 * During this time the thread should not be able to do anything else.
 * the function should return a promise just like before
 */

function sleep(milliseconds) {
  const p =new Promise(function(resolve){
    setTimeout(resolve,milliseconds);
  })
  return p;
}
async function main(){
  let x = await(3000)

}
module.exports = sleep;
