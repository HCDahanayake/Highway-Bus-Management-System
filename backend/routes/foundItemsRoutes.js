const express = require('express')
const {
    createFoundItem,
    getFoundItems,
    getFoundItemById,
} = require("../controllers/foundItemsController")

const router = express.Router();
router.route("/").get(getFoundItems);
router.route("/create").post(createFoundItem);
router.route("/:id").get(getFoundItemById);

module.exports = router;