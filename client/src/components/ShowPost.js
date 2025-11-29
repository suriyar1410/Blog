import api from '../Api'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../App.css'

function ShowPost() {
  const { id } = useParams()
  const [post, setPost] = useState(null)

   useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await api.get(`api/posts/${id}`)
        setPost(data)
      } catch (error) {
        console.error('Error fetching post:', error)
      }
    }
    fetchData()
  }, [id])

  if (!post) {
    return (
      <div className="d-flex justify-content-center align-items-center vh-100">
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    )
  }

  return (
    <div className="container py-5">
      <div className="text-center mb-5">
        <h1 className="fw-bold">Show Blog</h1>
      </div>

      <div className="card shadow-lg border-0">
        {post.image && (
          <img
            src={post.image}
            alt={post.title}
            className="card-img-top img-fluid"
            style={{ objectFit: 'cover', height: '400px' }}
          />
        )}

        <div className="card-body p-4">
          {post.category?.name && (
            <span className="badge bg-danger mb-3">{post.category.name}</span>
          )}

          <h2 className="card-title mb-3">{post.title}</h2>
          <p className="card-text text-secondary" style={{ lineHeight: '1.8' }}>
            {post.content}
          </p>

          <div className="d-flex justify-content-between align-items-center mt-4 border-top pt-3">
            <h5 className="mb-0 text-muted">
              <i className="bi bi-person-circle me-2"></i>
              {post.author}
            </h5>
            <small className="text-muted">
              {new Date(post.createdAt).toLocaleString()}
            </small>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ShowPost
