import express from "express";
import { deleteBooking, getAllBookings, getAllBookingsAdmin, getBooking, newBooking, updateBooking } from "../controllers/bookingController.js";

const router = express.Router();

// CREATE BOOKING
router.post("/", newBooking);

// UPDATE
router.put("/:id", updateBooking);

// GET
router.get("/:userId", getBooking);

// GET ALL
router.get("/:userId", getAllBookings);

// GET ALL
router.get("/", getAllBookingsAdmin);

// DELETE
router.delete("/id", deleteBooking);

export default router