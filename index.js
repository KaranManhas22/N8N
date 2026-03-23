const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Karanswh cfNode App Running 🚀');
});

app.listen(5000, () => {
  console.log('App running on port 5000');
});
