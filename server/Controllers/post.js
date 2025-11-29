const mongoose = require('mongoose');
const Category = require('../Models/category.js');
const Post = require('../Models/Post.js');

const getAllPost = async (req, res) => {
  try {
    const posts = await Post.find()
      .populate("category", "name slug description")
      .sort({ createdAt: -1 });
    if (posts.length === 0) {
      return res.status(404).json({ message: "No posts found" });
    }
    res.status(200).json(posts);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const SinglePost = async (req, res) => {
  try {
    const post = await Post.findById(req.params.id)
      .populate("category", "name slug description"); 
    if (!post) {
      return res.status(404).json({ message: "No post found with this ID" });
    }
    res.status(200).json(post);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const CreatePost = async (req, res) => {
  try {
    const post = new Post({
      title: req.body.title,
      content: req.body.content,
      category: req.body.category,
      author: req.user.name, 
      image: req.body.image,
    });
    const newPost = await post.save();
    res.status(201).json({ message: "Post created", post: newPost });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const UpdatePost = async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    if (!post) return res.status(404).json({ message: "No post found with this ID" });
    post.title = req.body.title || post.title;
    post.content = req.body.content || post.content;
    post.category = req.body.category || post.category;
    post.author = req.body.author || post.author;
    post.image = req.body.image || post.image;
    post.updatedAt = Date.now();
    const updatedPost = await post.save();
    res.status(200).json(updatedPost);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const DeletePost = async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    if (!post) return res.status(404).json({ message: "No post found with this ID" });
    await Post.findByIdAndDelete(post._id);
    res.status(200).json({ message: "Post deleted" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getPostsByCategoryId = async (req, res) => {
  try {
    const { categoryid } = req.params;
    if (!mongoose.Types.ObjectId.isValid(categoryid)) {
      return res.status(400).json({ message: "Invalid category ID" });
    }
    const posts = await Post.find({ category: categoryid })
      .populate("category", "name slug description")
      .sort({ createdAt: -1 });
    if (!posts || posts.length === 0) {
      return res.status(404).json({ message: "No posts found for this category" });
    }
    res.status(200).json(posts);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { getAllPost, SinglePost, CreatePost, UpdatePost, DeletePost, getPostsByCategoryId };
