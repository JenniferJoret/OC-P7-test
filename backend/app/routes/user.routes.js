module.exports = app => {
    const express = require('express');
    const users = require("../controllers/user.controller.js");
  
    const router = express.Router();
  
    // Create a new user
    router.post("/", users.create);
    
    // Retrieve all users
    router.get("/", users.findAll);

    // Retrieve a single user with id
    router.get("/:id", users.findOne);
  
    // Update a user with id
    router.put("/:id", users.update);
  
    // Delete a user with id
    router.delete("/:id", users.delete);
  
    app.use('/api/users', router);
  };