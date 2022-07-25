const express = require('express');
const router = express.Router();

// require the Drone model here
const Drone = require("../models/Drone.model.js");


router.get('/', (req, res, next) => {
  // Iteration #2: List the drones
 Drone.find()
 .then ((droneInfo)=> {
  res.render("drones/list.hbs",{
    droneInfo
  })
 })
 .catch((err)=> {
  next(err)
 })
});

router.get('/create', (req, res, next) => {
  // Iteration #3: Add a new drone
  res.render("drones/create-form.hbs") 
});

router.post('/create', (req, res, next) => {
  // Iteration #3: Add a new drone
  const {name, propellers, maxSpeed } = req.body
  Drone.create({
    name,
    propellers,
    maxSpeed
  })
  .then (() =>{
    res.redirect("/drones")
  })
  .catch((err)=>{
    next(err)
  })
});

router.get('/:droneId/edit', (req, res, next) => {
  // Iteration #4: Update the drone
  const {droneId} = req.params

  Drone.findById(droneId)
  .then ((droneInfo) =>{
    res.render("drones/update-form.hbs", {droneInfo,})
  })
  .catch((err)=>{
    next(err)
  })
});

router.post('/:droneId/edit', (req, res, next) => {
  // Iteration #4: Update the drone
  const {droneId} = req.params
  const {name, propellers, maxSpeed} = req.body
  Drone.findByIdAndUpdate(droneId, {
    name,
    propellers,
    maxSpeed
  })
  .then (() => {
    res.redirect("/drones")
  })
  .catch((err)=>{
    next(err)
  })
});

router.post('/:droneId/delete', (req, res, next) => {
  // Iteration #5: Delete the drone
  const {droneId} = req.params
  Drone.findByIdAndDelete(droneId)
  .then(()=>{
    res.redirect('/drones')

  })
  .catch((err)=>{
    next(err)
  })

});

module.exports = router;
