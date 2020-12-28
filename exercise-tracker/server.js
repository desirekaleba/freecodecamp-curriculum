const express = require('express');
const app = express();
const cors = require('cors');
require('dotenv').config();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');


// middleware

app.use(cors());
app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(express.static(__dirname + '/public'));


const Schema = mongoose.Schema;

// Schemas
// UserSchema
const UserSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true
  }
});

// ExerciseSchema
const ExerciseSchema = new Schema({
  userId: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  duration: {
    type: Number,
    required: true
  },
  date: {
    type: Date
  }
});

// Models
// UserModel
let UserModel = mongoose.model('UserModel', UserSchema);

// ExerciseModel
let ExerciseModel = mongoose.model('ExerciseModel', ExerciseSchema);


// connection to database
mongoose.connect(process.env.MONGO_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}, function (err) {
  if (err) {
    console.error(err);
  } else {
    console.log('Connection to Mongo succeeded!!!');
  }
});


// endpoints
/**
 * @type GET
 * @to /
 * @return index.html
 */
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/views/index.html');
});

/**
 * @type POST
 * @to /api/exercise/new-user
 * @return {username, _id}
 */
app.post('/api/exercise/new-user', function (req, res) {
  const username = req.body.username;
  let errors = {};
  if (username.length <= 3) {
    errors.error = 'Username must be greater that 3 characters long';
    res.json(errors);
  } else {

    UserModel.findOne({
      username: username
    }, function (err, data) {
      if (data.username) {
        res.json({
          error: 'Username taken'
        });
      } else {
        let newUser = new UserModel({
          username: username
        });
        newUser.save(function (err, data) {
          if (err) {
            res.json({
              error: err
            });
          } else {
            res.json({
              username: data.username,
              _id: data._id
            });
          }
        });
      }
    });
  }
});

/**
 * @type POST
 * @to /api/exercise/add
 * @return {_id, username, date, duration, description}
 */
app.post('/api/exercise/add', function (req, res) {
  const userId = req.body.userId;
  const description = req.body.description;
  const duration = req.body.duration;
  const date = req.body.date;

  UserModel.findOne({
    _id: userId
  }, function(err, data){
    if (err) console.error(err);
    if (data._id) {
      let newExercise = new ExerciseModel({
        userId: userId,
        description: description,
        duration: duration,
        date: date
      });

      newExercise.save(function(err, data) {
        if (err) console.error(err);
        res.json({
          _id: data._id,
          username: data.username,
          duration: data.duration,
          description: data.description,
          date: new Date(data.date).toDateString()
        });
      });
    } else {
      res.json({
        error: 'No user found for ' + userId
      })
    }
  })
});

/**
 * @type GET
 * @to api/exercise/users
 * @return [
 * {users}
 * ]
 */
app.get('/api/exercise/users', function(req, res) {
  UserModel.find(function(err, data){
    if (err) {
      res.json({
      error: err
    });
    } else {
      res.json(
        data
      );
    }
  });
});

/**
 * 
 * @type GET
 * @to /api/exercise/log?{userId}[&from][&to][&limit
 * @return {
            "_id": "5fe9af5fc5b5cf05d0805717",
            "username": "ffffffdfedfdefeg",
            "count": 1,
            "log": [
                    {
                      "description": "Math",
                      "duration": 34,
                      "date": "Sat Dec 12 2020"
                    }
                  ]
          }
 */
app.get('/api/exercise/log', function(req, res) {
  // console.log(req.query);
  if (req.query !== {}) {
    const id = req.query.userId;
    const from = req.query.from;
    const to = req.query.to;
    const limit = req.query.limit;

    UserModel.findOne({
      _id: id
    }, function(err, data) {
      
      if (err) {
        res.json({
          error: err
        });
      } else {
          ExerciseModel.find({
            userId: data._id
          }, function(errr, logData) {
            if (errr) {
              console.error(errr);
            } else {
             // console.log('Count:',logData.length, 'Log: ',logData);
              const toLog = [];
              logData.map(function(item){
                const { description, duration, date} = item;
                const formatedDate = new Date(date).toDateString();
                const toPush = {description, duration, date: formatedDate};
                toLog.push(toPush);
              });
              //console.log('To Log: ', toLog);
              res.json({
              _id: data._id,
              username: data.username,
              count: logData.length,
              log: toLog
          });
            }
          });
      }
    });
  } else {
    res.json({
      error: 'Invalid UserID'
    });
  }
});

const listener = app.listen(process.env.PORT || 3000, () => {
  console.log('Your app is listening on port ' + listener.address().port)
});