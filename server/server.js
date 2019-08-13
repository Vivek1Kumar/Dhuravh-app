const express = require('express')
const mongoose = require('mongoose')
const db = require('./config/keys_dev').mongoURI
const app = express();

const bodyParser = require('body-parser');
const passport = require('passport');
const path = require('path');
const profile = require('./routes/profile')

const users = require('./routes/users')

// Body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


mongoose
    .connect(db, { useNewUrlParser: true })
    .then(() => console.log("Mongo Database connected"))
    .catch(err => console.log(err))

// Passport middleware
app.use(passport.initialize());

// Passport Config
require('./config/passport')(passport);

app.use('/api/users', users);
app.use('/api/user/', profile)

// Server static assets if in production
if (process.env.NODE_ENV === 'production') {
    // Set static folder
    app.use(express.static('client/build'));
  
    app.get('*', (req, res) => {
      res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    });
  }

const port = process.env.PORT || 8000;

app.listen(port, () => console.log(`Server running on port ${port}`));
