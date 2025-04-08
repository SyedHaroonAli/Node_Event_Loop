console.log('Starting') // 1

setTimeout(() => {
  console.log('Timeout 1') // 3
}, 1000)

setTimeout(() => {
  console.log('Timeout 2') //4
}, 2000)

console.log('Ending') // 2

// Result
/**
 * Starting
 * Ending
 * Timeout 1
 * Timeout 2
 */
