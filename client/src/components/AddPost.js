import api from "../Api"; 
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function AddPost() {
  const [formData, setFormData] = useState({
    title: "",
    content: "",
    category: "",
    author: "",
    image: "",
  });

  const [categories, setCategories] = useState([]);

  const isLoggedIn = !!localStorage.getItem("token");

useEffect(() => {
  const fetchCategories = async () => {
    try {
      const { data } = await api.get("api/category");
      setCategories(data);
    } catch (error) {
      console.error("Error loading categories:", error);
    }
  };
  fetchCategories();
}, []);

  useEffect(() => {
    const username = localStorage.getItem("username");
    if (username) {
      setFormData((prev) => ({ ...prev, author: username }));
    }
    api.get("api/category")
      .then((res) => setCategories(res.data))
      .catch((err) => console.error("Category load error:", err));
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem("token");
      const response = await api.post("api/posts", formData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      alert("Post submitted successfully!");
      console.log("Post submitted:", response.data);
    } catch (error) {
      console.error("Error submitting post:", error);
      alert("Something went wrong.");
    }
  };

  return (
    <div className="container col-lg-4 mt-5">
      {!isLoggedIn && (
        <div className="text-center mb-3">
          <Link to="/login" className="btn btn-outline-primary"> Login to Post </Link>
        </div>
      )}

      <div className="card shadow p-4">
        <h2 className="text-center mb-4">Create New Post</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label">Post Title</label>
            <input type="text" className="form-control"name="title" value={formData.title} onChange={handleChange} required/>
          </div>

          <div className="mb-3">
            <label className="form-label">Content</label>
            <textarea className="form-control"rows="4" name="content" value={formData.content}onChange={handleChange} required ></textarea>
          </div>

 <div className="mb-3">
  <label className="form-label">Category</label>
  <select className="form-control"name="category" value={formData.category} onChange={handleChange}required>
    <option value="">Select Category</option>
    {categories.map((cat) => (<option key={cat._id} value={cat._id}>{cat.name}</option> ))}
  </select>
</div>
          <div className="mb-3">
            <label className="form-label">Author</label>
            <input type="text"className="form-control" name="author" value={formData.author} readOnly required/>
          </div>
          <div className="mb-3">
            <label className="form-label">Image URL</label>
            <input type="text"  className="form-control" name="image" value={formData.image} onChange={handleChange}/>
          </div>
          <div className="d-flex justify-content-center">
            <button type="submit" className="btn btn-primary"> Submit Post</button>
          </div>

        </form>
      </div>
    </div>
  );
}
