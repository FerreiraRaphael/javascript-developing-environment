/**
 * Created by raphael on 19/04/17.
 */
import {getUsers, deleteUser} from './api/userApi'

getUsers().then(result => {
  let usersBody = result.reduce((res, user) => res += `<tr>
      <td><a href="#" data-id="${user.id}" class="deleteUser">Delete</a></td>
      <td>${user.id}</td>
      <td>${user.firstName}</td>
      <td>${user.lastName}</td>
      <td>${user.email}</td>
    </tr>` , "")

  global.document.getElementById('users').innerHTML = usersBody

  const deleteLinks = global.document.getElementsByClassName('deleteUser')

  Array.from(deleteLinks, link => {
    link.onclick = (event) => {
      const element = event.target
      event.preventDefault()
      deleteUser(element.getAttribute('data-id'))
      const row = element.parentNode.parentNode
      row.parentNode.removeChild(row)
    }
  })
})
