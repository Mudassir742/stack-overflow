const Blog = require("../models/blogModel");
const apiFeatures = require("../utils/apiFeatures");

exports.getBlogs = async (req, res) => {
  try {
    const allBlogs = await new apiFeatures(
      Blog.find({}).populate([{ path: "userId", select: ["name"] }]),
      req.query
    ).pagination().query;
    const blogCount = await Blog.countDocuments({}).exec();
    return res.status(201).json({ data: allBlogs, totalBlogs: blogCount });
  } catch (err) {
    console.log(err.message);
    return res.status(500).json({ error: "unexpected error occurred" });
  }
};

exports.getBlogById = async (req, res) => {
  try {
    const { blogId } = req.params;

    if (!blogId) {
      return res.status(401).json({ error: "missing blog Id" });
    }

    const blogDetail = await Blog.findById({ _id: blogId });

    if (!blogDetail) {
      return res.status(403).json({ error: "blog not found" });
    }

    return res.status(201).json({ data: blogDetail });
  } catch (err) {
    console.log(err.message);
    return res.status(500).json({ error: "unexpected error occurred" });
  }
};

exports.getAllBlogsOfSpecificUser = async (req, res) => {
  try {
    const { userId } = req.user;

    if (!userId) {
      return res.status(401).json({ error: "missing user Id" });
    }

    const userBlogs = await new apiFeatures(
      Blog.find({ userId }),
      req.query
    ).pagination().query;

    const blogCount = await Blog.countDocuments({}).exec();

    return res.status(201).json({ data: userBlogs, totalBlogs: blogCount });
  } catch (err) {
    console.log(err.message);
    return res.status(500).json({ error: "unexpected error occurred" });
  }
};

exports.deleteBlogById = async (req, res) => {
  try {
    const { blogId } = req.params;

    const { userId } = req.user;

    if (!userId || !blogId) {
      return res.status(401).json({ error: "missing details" });
    }

    const isBlogDeleted = await Blog.findOneAndDelete({
      _id: blogId,
      userId: userId,
    });

    return res.status(201).json({ data: "blog deleted succesfully" });
  } catch (err) {
    console.log(err.message);
    return res.status(500).json({ error: "unexpected error occurred" });
  }
};

exports.createBlog = async (req, res) => {
  try {
    const { userId } = req.user;
    const { title, description } = req.body;

    if (!userId || !title || !description) {
      return res.status(401).json({ error: "missing details" });
    }

    const newBlog = new Blog({
      title: title,
      description: description,
      userId: userId,
    });

    const saveBlog = await newBlog.save();

    if (saveBlog) {
      return res.status(201).json({ data: saveBlog });
    }
    return res.status(422).json({ error: "unable to ceate blog" });
  } catch (err) {
    console.log(err.message);
    return res.status(500).json({ error: "unexpected error occurred" });
  }
};

exports.editBlog = async (req, res) => {
  try {
    const { userId } = req.user;
    const { title, description, blogId } = req.body;

    if (!userId || !title || !description || !blogId) {
      return res.status(403).json({ error: "missing details" });
    }

    const isBlogUpdated = await Blog.updateOne(
      { _id: blogId, userId: userId },
      { title: title, description: description }
    );

    return res.status(201).json({ data: "blog updated!" });
  } catch (err) {
    console.log(err.message);
    return res.status(500).json({ error: "unexpected error occurred" });
  }
};
