const express = require('express');
const app = express();

const db = require('./models');

const {User} = require('./models');

app.get('/select', (req, res) => {
    User.findAll({where: {firstName: 'Romit'}}).then((users) => {
        res.send(users);
    }).catch((err) => {
        if(err) {
            console.log(err);
        }
    });
});

app.get('/insert', (req, res) => {
    User.create({
        firstName: 'Demo',
        age: 21
    }).catch((err) => {
        if(err) {
            console.log(err);
        }
    });
    res.send('Insert');
});

app.get('/delete', (req, res) => {
    User.destroy({where: {id: 10}});
    res.send('delete');
});

db.sequelize.sync().then(() => {
    app.listen(3000, () => {
        console.log('Server Running');
    });
});