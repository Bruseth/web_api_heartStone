const express = require('express');

const app = express();

app.get('/', (req, res) => res.json({msg: 'Welcome to the Gacha Game'}));

// Define Routes
app.use('/api/users', require('./routes/users'));
app.use('/api/auth', require('./routes/auth'));
app.use('/api/cards', require('./routes/cards'));


const PORT = process.env.PORT || 8080;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));