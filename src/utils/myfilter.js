const format = (value, foo = '&&') => {
  let year = value.getFullYear()
  let month = value.getMonth() + 1
  let day = value.getDate()
  return `${year}${foo}${month}${foo}${day}`
}
export { format }
