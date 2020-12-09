import * as data from './metal'



const metalTypes = []
for (let key in data) {
  metalTypes.push(key)
}

const getMetals = () => {
  const arr = []
  for (let obj in data) {
    console.log("------>obj", data[obj])
    arr.push(data[obj])
  }
  return arr
}

const metals_data = getMetals()
export { metalTypes, metals_data }
