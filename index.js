const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
let MongoClient = require('mongodb').MongoClient;
const ObjectID = require('mongodb').ObjectID;

let app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, 'public')));
let db;
const dbUrl = 'mongodb://localhost:27017';
const dbName = 'myToDos';
const client = new MongoClient(dbUrl);


app.get('/', (req, res) => {
    res.sendFile(path.join('index.html'));
});

app.get('/todos', (req, res) => {
   db.collection('todos').find().toArray((err, docs) => {
       if (err) {
           console.log(err);
           return res.sendStatus(500);
       }
       res.send(docs);
   })
});

app.post('/todos', (req, res) => {
    let todo = {
        location: req.body.location,
        type: req.body.type,
        task: req.body.task,
        description: req.body.description,
        date: req.body.date
    };
    db.collection('todos').insertOne(todo, err => {
        if (err) {
            console.log(err);
            return res.sendStatus(500);
        }
        res.send(todo);
    });
});

app.delete('/todos/:id', (req, res) => {
    db.collection('todos').deleteOne({_id: ObjectID(req.params.id)}, (err) => {
       if (err) {
           console.log(err);
           return res.sendStatus(500);
       }
       res.sendStatus(200);
   })
});

app.put('/todos/:id', (req, res) => {
    db.collection('todos').updateOne({_id: ObjectID(req.params.id)}, {$set:
            {location: req.body.location,
            type: req.body.type,
            task: req.body.task,
            description: req.body.description,
            date: req.body.date}},
        (err) => {
            if (err) {
                console.log(err);
                return res.sendStatus(500);
            }
            res.sendStatus(200);
        })
});

client.connect(err => {
    if (err) {
        console.log(err);
    }
    console.log('Connection to myToDos is successful');
    db = client.db(dbName);
    app.listen(3333, () => console.log('Server is running ...'));
});


