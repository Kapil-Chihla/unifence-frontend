// server.js
const express = require('express');
const contactRoute = require('./routes/contact');
const dotenv = require('dotenv');
const cors = require('cors');


dotenv.config();

const app = express();
app.use(cors());
const PORT = process.env.PORT || 5001;
app.use(cors({ origin: 'http://localhost:3000' })); // Replace with your frontend URL

app.use(express.json());
app.use('/api/contact', contactRoute);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
