import express from "express";
import { updateUser, deleteUser, getUser, getAllUsers } from "../controllers/userController.js";
import { verifyToken, verifyUser, verifyAdmin } from "../utils/verifyToken.js";

const router = express.Router();

// router.get("/checkAuthentication", verifyToken, (req, res, next) => {
//     res.send("hello user, You are logged in!")
// })

// router.get("/checkUser/:id", verifyUser, (req, res, next) => {
//     res.send("hello user, You are logged in and can delete your account!")
// })

// router.get("/checkAdmin/:id", verifyAdmin, (req, res, next) => {
//     res.send("hello admin, You have previleges!")
// })

// UPDATE

router.put("/:id", verifyUser,updateUser);

// DELETE

router.delete("/:id",verifyUser, deleteUser)

// GET

router.get("/:id",verifyUser, getUser)

// GET ALL

router.get("/",verifyUser, getAllUsers)

export default router