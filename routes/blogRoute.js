import express from 'express'
import {
  createBlog,
  fetchBlogs,
  fetchOneBlog,
  updateBlog,
  deleteBlog,
} from '../controllers/blogController.js'

const blogRouter = express.Router()

blogRouter.post('/createBlog', createBlog)
blogRouter.get('/:blogId', fetchOneBlog)
blogRouter.get('/getAll/blogs', fetchBlogs)
blogRouter.put('/update/:blogId', updateBlog)
blogRouter.delete('/delete/:blogId', deleteBlog)

export default blogRouter
