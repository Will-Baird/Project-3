const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(
    process.env.MONGODB_URI ||
    "mongodb://localhost/emergencyservices"
);

const serviceSeed = [{
        service: "Fire Department",
        description: "The core functions of the Department are fire suppression, emergency medical response, hazardous materials response, fire prevention, and education.",
        units in: "",
        units out: "",
    },
    {
        service: "Police Department",
        description: "Protects citizen by preventing crime; enforcing laws; apprehending suspects; monitoring traffic.",
        units in: "",
        units out: "",
    },
    {
        service: "EMS (Emergency Medical Services",
        description: "First responders, basic or intermediate emergency medical technicians (EMTs), or paramedics.",
        units in: "",
        units out: "",
    }
];

db.Service
    .remove({})
    .then(() => db.Service.collection.insertMany(serviceSeed))
    .then(data => {
        console.log(data.results.n + "Information Inserted");
        process.exit(0);
    })
    .catch(err => {
        console.error(err);
        process.exit(1);
    });