import React, { useEffect, useState } from "react";
import api from "../Api";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";

const BlogPage = () => {
  const [posts, setPosts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All");

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const { data } = await api.get("/posts");
        setPosts(data);
        const uniqueCategories = [];
        const map = {};
        data.forEach((post) => {
          if (post.category && !map[post.category._id]) {
            map[post.category._id] = true;
            uniqueCategories.push(post.category);
          }
        });
        setCategories(uniqueCategories);
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
    };
    fetchPosts();
  }, []);

  const filteredPosts = selectedCategory === "All" ? posts  : posts.filter((p) => p.category?.name === selectedCategory);

  return (
    <div className="blog-page bg-light min-vh-100">
      <div className="container py-5">
        <div className="text-center mb-5">
          <h1 className="fw-bold mb-3">InfoFlare Blog</h1>
          <p className="text-muted">Read the latest posts and insights</p>
        </div>

        <div className="row g-4">
          <div className="col-lg-8">
            {filteredPosts.length === 0 ? (
              <div className="text-center py-5">
                <h5 className="text-muted">No posts available.</h5>
              </div>
            ) : (
              filteredPosts.map((post) => (
                <div className="card shadow-sm mb-4 border-0 hover-shadow"key={post._id}>
                  {post.image && (
                    <img
                      src={post.image} className="card-img-top" alt={post.title}
                      style={{
                        objectFit: "cover",
                        height: "320px",
                        borderTopLeftRadius: "0.5rem",
                        borderTopRightRadius: "0.5rem",
                      }}
                    />
                  )}
                  <div className="card-body">
                    <h4 className="card-title">{post.title}</h4>
                    <p className="card-text text-secondary"> {post.content.length > 200 ? post.content.slice(0, 200) + "..."  : post.content}</p>
                    <div className="d-flex justify-content-between align-items-center">
                      <span className="badge bg-danger">
                        {post.category?.name || "Uncategorized"}  </span>
                      <Link to={`/ShowPost/${post._id}`}
                        className="btn btn-outline-danger btn-sm" > Read More </Link>
                    </div>
                  </div>
                  <div className="card-footer bg-white border-0 text-muted small">
                    Posted on{" "}
                    {new Date(post.createdAt).toLocaleDateString()} by{" "}
                    <strong>{post.author}</strong>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Sidebar (now col-lg-4) */}
          <div className="col-lg-4">
            <div className="card shadow-sm border-0 mb-4">
              <div className="card-header bg-danger text-white fw-semibold"> Categories </div>
              <ul className="list-group list-group-flush">
                <li className={`list-group-item category-item ${ selectedCategory === "All" ? "active-category" : "" }`}
                  style={{ cursor: "pointer" }} onClick={() => setSelectedCategory("All")}  > All </li>
                {categories.map((cat) => (  <li key={cat._id} className={`list-group-item category-item ${
                      selectedCategory === cat.name ? "active-category" : "" }`} style={{ cursor: "pointer" }}
                    onClick={() => setSelectedCategory(cat.name)} > {cat.name} </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
