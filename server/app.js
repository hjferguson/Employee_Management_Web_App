const express = require('express');
const app = express();
const mongoose = require('mongoose');
const userRoutes = require('./routes/userRoutes');
const employeeRoutes = require('./routes/employeeRoutes');

mongoose.connect('mongodb://localhost:27017/userDB', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log('MongoDB connected'))
.catch(err => console.log(err));

app.use(express.json());
app.use(userRoutes);
app.use(employeeRoutes);

const port = 3000;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
