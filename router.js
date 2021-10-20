const express = require('express');
const router = express.Router();
const {actionIndex, actionCreate, actionDelete} = require("./controllers");

router.get("/todos", actionIndex);
router.post("/todos", actionCreate);
router.delete("/todos/:id", actionDelete)

module.exports = router;
