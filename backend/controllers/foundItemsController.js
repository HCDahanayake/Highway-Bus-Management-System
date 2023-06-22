const FoundItems = require("../models/foundItemsModel");
const asyncHandler = require("express-async-handler");

const getFoundItems = asyncHandler(async (req, res) => {
  const requests = await FoundItems.find();
  res.json(requests);
});

const createFoundItem = asyncHandler(async (req, res) => {
  const { PrimarySubject, Subject, Message } = req.body;

  if (!PrimarySubject || !Subject || !Message) {
    res.status(400);
    throw new Error("Please Fill all the fields");
  } else {
    const foundItem = new FoundItems({
      PrimarySubject, Subject, Message
    });

    const createdFoundItem = await foundItem.save();

    res.status(201).json(createdFoundItem);
  }
});

const getFoundItemById = asyncHandler(async (req, res) => {
  const foundItem = await FoundItems.findById(req.params.id);

  if (foundItem) {
    res.json(foundItem);
  } else {
    res.status(404).json({ message: "Found Item not found" });
  }
});

module.exports = {
  createFoundItem,
  getFoundItems,
  getFoundItemById,
};
