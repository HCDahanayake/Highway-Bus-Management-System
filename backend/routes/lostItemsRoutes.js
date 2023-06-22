const express = require('express')
const {
    createLostItem,
    getLostItems,
    getLostItemById,
} = require("../controllers/lostItemsController")

const router = express.Router();
router.route("/").get(getLostItems);
router.route("/create").post(createLostItem);
router.route("/:id").get(getLostItemById);

module.exports = router;