const e = require('express');
const express = require('express');
const app = express();
const port = 3000 || process.env.PORT;

app.use(express.urlencoded({extended:true}));
app.use(express.static("public"));

app.get('/', (req, res) =>{
    res.sendFile(`${__dirname}/logIn.html`);
})

app.post('/', (req, res) => {
     const userName = req.body.userName;
     const password = req.body.password;

     const isCorrectPassword = checkPassword(userName, password);

     if (isCorrectPassword) res.sendFile(`${__dirname}/index.html`);
})

app.listen(port, function() {
    console.log(` port ${port} is up-to-date`);
});

function checkPassword(userName, password) {
    if(userName === "SPARS" && password === "abc") return 1;
    else return 0;
}