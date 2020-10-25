const express = require('express');
const path    = require('path');

const app  = express();
const PORT = process.env.PORT || 8080;

// app.get('/profile.jpg', (_, res) => {
//     res.sendFile(path.resolve('profile.jpg'));
// });

// app.get('*', (_, res) => {
//     res.sendFile(path.resolve('en_cv.html'));
// });

app.use('/', express.static(path.join(__dirname, '.')));

app.listen(PORT, () => {
    console.log('run ~> ' + PORT);
});
