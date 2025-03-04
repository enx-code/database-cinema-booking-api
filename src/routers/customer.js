const express = require("express");
const {
    updateCustomer,
    createCustomer
} = require('../controllers/customer');

const router = express.Router();

// In index.js, we told express that the /customer route should use this router file
// The below /register route extends that, so the end result will be a URL
// that looks like http://localhost:4000/customer/register
// router.get("/", getAllCustomer)
router.post("/register", createCustomer);
router.put("/:id", updateCustomer)

module.exports = router;
