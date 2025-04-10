app.post('/submit', (req, res) => {
    axios.post('http://backend:5000/api', req.body)
      .then(response => res.send(response.data))
      .catch(error => res.status(500).send("Error communicating with backend"));
  });
  