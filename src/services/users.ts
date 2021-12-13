
const API_URL = 'http://localhost:4000/'

export function getUsers() {
  return fetch(`${API_URL}api/v1/users`)
    .then(data => data.json())
}

export function getUser(username: string) {
  return fetch(`${API_URL}api/v1/users/${username}`)
    .then(data => data.json())
}
