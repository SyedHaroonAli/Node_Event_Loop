console.log('Before everything') // 1

const promise = new Promise((resolve) => {
  console.log('Promise started') // 2
  setImmediate(() => {
    console.log('Inside setImmediate from promise') // 5
  })
  resolve('Promise resolved')
})

promise.then((result) => {
  console.log('Promise result:', result) // 4
  setImmediate(() => {
    console.log('Inside setImmediate from promise then') // 6
  })
})

setTimeout(() => {
  console.log('Inside setTimeout') // 7
}, 0)

console.log('After everything') // 3
