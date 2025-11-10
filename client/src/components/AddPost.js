import api from "../Api"; 
import React, { useState } from "react";

export default function AddPost() {
  const [formData, setFormData] = useState({
    title: "",
    content: "",
    category: "",
    author: "",
    image: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await api.post("/posts", formData); 
      console.log("Post submitted:", response.data);
      alert("Post submitted successfully!");
    } catch (error) {
      console.error("Error submitting post:", error);
      alert("Something went wrong. Please try again.");
    }
  };

  return (
    <div className="container col-lg-4 mt-5">
      <div className="card shadow p-4">
        <h2 className="text-center mb-4">Create New Post</h2>

        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="title" className="form-label">Post Title</label>
            <input
              type="text"
              className="form-control"
              id="title"
              name="title"
              value={formData.title}
              onChange={handleChange}
              placeholder="Enter Post Title"
              required
            />
          </div>

          <div className="mb-3">
            <label htmlFor="content" className="form-label">Content</label>
            <textarea
              className="form-control"
              id="content"
              name="content"
              value={formData.content}
              onChange={handleChange}
              rows="4"
              placeholder="Enter Post Content"
              required
            ></textarea>
          </div>

          <div className="mb-3">
            <label htmlFor="category" className="form-label">Category</label>
            <input
              type="text"
              className="form-control"
              id="category"
              name="category"
              value={formData.category}
              onChange={handleChange}
              placeholder="Enter Category"
              required
            />
          </div>

          <div className="mb-3">
            <label htmlFor="author" className="form-label">Author</label>
            <input type="text" className="form-control" id="author"
              name="author"
              value={formData.author}
              onChange={handleChange}
              placeholder="Enter Author Name"
              required
            />
          </div>

          <div className="mb-3">
            <label htmlFor="image" className="form-label">Image URL (optional)</label>
            <input
              type="text"
              className="form-control"
              id="image"
              name="image"
              value={formData.image}
              onChange={handleChange}
              placeholder="Enter Image URL"
            />
          </div>
             <div className="d-flex justify-content-center">
              <button type="submit" className="btn btn-primary ">
            Submit Post
          </button>
        </div>
      
        </form>
      </div>
    </div>
  );
}
