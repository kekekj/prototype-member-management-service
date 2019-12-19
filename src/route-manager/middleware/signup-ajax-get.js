/**
 * @param {import('express').Request} req 
 * @param {import('express').Response} res 
 */
function respondJSON(req, res) {
  const {cookies} = req

  const value = cookies['SIG_SUC']

  if (value === '0') {
    res.append("Content-Type", "application/json")
    res.end('Sign up failed.')
    return
  } 
  res.end()
}

exports.respondJSON = respondJSON