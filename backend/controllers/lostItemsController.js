const LostItems = require("../models/lostItemsModel")
const asyncHandler = require("express-async-handler");

const getLostItems = asyncHandler(async (req, res) => {
  const requests = await LostItems.find();
  res.json(requests);
});

const createLostItem = asyncHandler(async (req, res) => {
  const { PrimarySubject, Subject, Message } = req.body;

  if (!PrimarySubject || !Subject || !Message) {
    res.status(400);
    throw new Error("Please Fill all the fields");
  } else {
    const lostItem = new LostItems({
      PrimarySubject, Subject, Message
    });

    const createdLostItem = await lostItem.save();

    res.status(201).json(createdLostItem);
  }
});



const getLostItemById = asyncHandler(async (req, res) => {
  const lostItem = await LostItems.findById(req.params.id);

  if (lostItem) {
    res.json(lostItem);
  } else {
    res.status(404).json({ message: "Lost Item not found" });
  }
});

module.exports = {
  createLostItem,
  getLostItems,
  getLostItemById,
};
