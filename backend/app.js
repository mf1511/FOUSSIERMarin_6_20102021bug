const express = require('express');
const mongoose = require('mongoose');

const app = express();

const userRoutes = require('./routes/user');

mongoose.connect('mongodb+srv://mf1511:MongoDb1.@cluster0.jcutr.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
  { useNewUrlParser: true,
    useUnifiedTopology: true })
  .then(() => console.log('Connexion à MongoDB réussie !'))
  .catch(() => console.log('Connexion à MongoDB échouée !'));

app.use((req, res) => {
    res.json({message: 'votre requete est ok !'});
});

app.use('/api/auth', userRoutes);

module.exports = app;