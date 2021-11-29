export const removeUndefined = (oldArray = []) => {
  let newArray = []
  oldArray.forEach(x => {
    if (x) newArray.push(x);
  })
  return newArray
}

export const phoneFormatter = (s) => {
  let first = "254"
  return `${first}${s.substring(1)}`
} 

export const passwordGenerator = () => Math.random().toString(36).slice(2)