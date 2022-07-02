export const fetchUser = () => {
  return (localStorage.getItem('user') !== 'undefined')
    ? JSON.parse(localStorage.getItem('user') as string)
    : localStorage.clear()
}
