const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('SecureTitan Backend Running 🛡️');
});

// Example future endpoint for contact form
app.post('/api/contact', (req, res) => {
  console.log(req.body);
  res.send({ message: 'Message received!' });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
