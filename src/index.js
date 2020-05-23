import './module'
import './scss/index.scss'

console.log('src working 111111')

async function start() {
  return await Promise.resolve('tochno norm')
}

start().then(console.log)
