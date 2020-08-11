import fetch from 'isomorphic-unfetch'

const lookup = keywords => {
  fetch(`http://localhost:3000/lookup?keywords=${keywords}`)
    .then(res => res.text())
    .then(data => console.log('Res: ', data))
}

export default lookup
