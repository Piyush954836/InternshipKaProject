const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');
const bodyParser = require('body-parser');
const emailRoutes = require('./routes/emailRoutes');


dotenv.config();
const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.error(err));

app.use('/api/invitations', require('./routes/invitationRoutes'));
app.use('/api/email', emailRoutes);

app.listen(process.env.PORT, () => console.log(`Server running on port ${process.env.PORT}`));
