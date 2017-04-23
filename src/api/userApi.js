import 'whatwg-fetch'

export const getUsers = () => get('users')

const get = url => fetch(url).then(onSucess, onError)

const onSucess = response => response.json()

const onError = error => console.log(error)  //eslint-disable-line no-console
