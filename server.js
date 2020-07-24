const express = require("express");
const path = require("path");


const app = express();
const PORT = process.env.PORT || 3000;

const bodyParser = require('body-parser');
app.use(bodyParser.json({ type: 'application/*+json' }))
app.use(bodyParser.json({ type: 'application/vnd.custom-type' }))
app.use(bodyParser.text({ type: 'text/html' }))


app.use(express.urlencoded({ extended: true}));
app.use(express.json());

const orders = []
//Reservation info template
const reservationInfo = [
    {
        routeName: "reservation",
        name: custName,
        phone: custPhone,
        email: custEmail,
        id: custID
    },
]
//Gather requests for pages and display the proper html file
app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "index.html"));
});

app.get("/view", function(req, res) {
    res.sendFile(path.join(__dirname, "view.html"));
});

//Collect user input from front end and use data to create orders and push them as objects in .json
app.post("/api/orders", function(req,res) {
    let newOrder = req.body;

    newOrder.routeName = newOrder.name.replace(/\s+/g, "").toLowerCase();

    console.log(newOrder);

    orders.push(newOrder);

    res.json(newOrder);

})

app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
})