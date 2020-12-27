
const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
	res.send('Hello World! The update is live');
});

app.get('/teapot', (req, res) => {
    res.set('X-my-header', 'cubswin')
    res.status(418).send('I\'m a little teapot')
})

app.listen(port, () => console.log(`Example app running on PORT ${port}`));