const Category = require('../Models/category.js'); 

const getAllcategory = async (req, res) => {
  try {
    const categories = await Category.find();
    if (categories.length === 0) {
      return res.status(404).json({ message: "No category found" });
    }
    res.status(200).json(categories);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const Singlecategory = async (req, res) => {
  try {
    const category = await Category.findById(req.params.id);
    if (!category) {
      return res.status(404).json({ message: "No category found with this ID" });
    }
    res.status(200).json(category);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const Createcategory = async (req, res) => {
  try {
    const newCategory = new Category({
      name: req.body.name,
      slug: req.body.slug,
      description: req.body.description,
    });

    const savedCategory = await newCategory.save();
    res.status(201).json(savedCategory);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const Updatecategory = async (req, res) => {
  try {
    const category = await Category.findById(req.params.id);
    if (!category) {
      return res.status(404).json({ message: "No category found with this ID" });
    }
    category.name = req.body.name || category.name;
    category.slug = req.body.slug || category.slug;
    category.description = req.body.description || category.description;
    category.updatedAt = Date.now();
    const updatedCategory = await category.save();
    res.status(200).json(updatedCategory);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const Deletecategory = async (req, res) => {
  try {
    const category = await Category.findById(getPostsByCategoryId);
    if (!category) {
      return res.status(404).json({ message: "No category found with this ID" });
    }
    await Category.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: "Category deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {  getAllcategory,Singlecategory, Createcategory, Updatecategory, Deletecategory,};
