const express = require("express");
const { authenticate } = require("../middleware/authMiddleware");
const {
  createTransaction,
  editTransaction,
  deleteTransaction,
  getTransaction,
  getAllTransactions,
  getFilteredTransactions,
} = require("../controllers/transaction");

const router = express.Router();

router.post("/create", authenticate, createTransaction);
router.get("/", authenticate, getAllTransactions);
router.get("/:id", authenticate, getTransaction);
router.put("/:id", authenticate, editTransaction);
router.delete("/:id", authenticate, deleteTransaction);

module.exports = router;
