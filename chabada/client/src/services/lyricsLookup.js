import fetch from 'isomorphic-unfetch'

const lookup = (keywords, cb) => {
  fetch(`http://localhost:3000/lookup?keywords=${keywords}`).then(res => {
    res.text().then(result => {
      cb(result)
    })
  })
}

export default lookup
