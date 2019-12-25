
module.exports = (req, res) => {
  const { username, password } = req.body;
  if (username === 'alinka' && password === '2020') {
    res.status(200).send({ username });
  } else {
    res.status(401).send({ error: 'Invalid credentials.' });;
  }
};
