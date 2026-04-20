import express from 'express';

const app = express();

app.get('/', (req, res) => {
    res.send('Good morning everyone!');
})

app.get('/greet', (req, res) => {
    res.send('Greeetings everyone!');
})

app.get('/payment', (req, res) => {
    res.send('This is payment route');
})

app.get('/hello', (req,res) => {
    res.send('Helooooooooo, Hiiiiiiiiiiiiiiiii')
})

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});