const blogController = require("../controllers/blogController");
const authenticateToken = require("../middlewares/authMiddleware");

const express = require("express");

const router = express.Router();

router.get("/get-blogs", authenticateToken, blogController.getBlogs);
router.get("/get-blog/:blogId", authenticateToken, blogController.getBlogById);
router.get(
  "/get-user-blogs",
  authenticateToken,
  blogController.getAllBlogsOfSpecificUser
);

router.delete(
  "/delete-blog/:blogId",
  authenticateToken,
  blogController.deleteBlogById
);

router.post("/create-blog", authenticateToken, blogController.createBlog);
router.post("/edit-blog", authenticateToken, blogController.editBlog);

module.exports = router;
