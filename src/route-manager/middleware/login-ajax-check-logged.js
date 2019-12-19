/**
 * @param {import('express').Request} req 
 * @param {import('express').Response} res 
 */
function respondJSON(req, res) {
  const {cookies} = req

  const value = cookies['ID_AUT']

  if (value) {
    res.append("Content-Type", "application/json")
    res.end('<h1>Welcome Logged in.</h1>')
    return
  } 
  res.end()
}

exports.respondJSON = respondJSON