// Iteration #1
const drones = [
    { name: "Creeper XL 500", propellers: 3, maxSpeed: 12 },
    { name: "Racer 57", propellers: 4, maxSpeed: 20 },
    { name: "Courier 3000i", propellers: 6, maxSpeed: 18 },
    { name: "Malva 704xI", propellers: 8, maxSpeed: 24 },
    { name: "Paula hyehXi", propellers: 5, maxSpeed: 18 },
    { name: "Jose BetisShcy3", propellers: 7, maxSpeed: 15 },
  ];

//requerir la conexion
const mongoose = require("mongoose")
require("../db")

//traer el modelo
const Drone = require ("../models/Drone.model")

//metodo 
async function storeDrones () {
try {
    await Drone.create(drones)
    console.log ("drones agregados a la BD")
    mongoose.connection.close()
}
catch (err){
    console.log(err)
}
}

storeDrones()