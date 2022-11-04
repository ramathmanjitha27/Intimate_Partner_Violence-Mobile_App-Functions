import Blog from '../models/blogModel.js'

export const createBlog = async (req, res) => {
  const { title, body } = req.body

  try {
    const newBlog = await Blog.create({
      title,
      body,
    })
    return res.status(201).json({ success: true, blog: newBlog })
  } catch (err) {
    console.log(err)
    res.json(err)
  }
}

export const fetchBlogs = async (req, res) => {
  Blog.find()
    .then((blogs) => {
      res.json({ success: true, existingBlogs: blogs })
    })
    .catch((err) => {
      res.json(err)
      console.log(err)
    })
}

export const fetchOneBlog = async (req, res) => {
  const { blogId } = req.params.blogId

  try {
    Blog.findbyId({ _id: blogId })
      .then((blog) => {
        res.json({ success: true, existingBlog: blog })
      })
      .catch((err) => {
        console.log(err)
        res.json(err)
      })
  } catch (err) {
    console.log(err)
    res.json(err)
  }
}

export const updateBlog = async (req, res) => {
  const blogId = req.params.blogId
  const { title, body } = req.body

  const updatedBlog = {
    title,
    body,
  }

  Blog.findByIdAndUpdate({ _id: blogId }, updatedBlog)
    .then(() => {
      res.status(200).json({ status: 'blog updated successfully' })
    })
    .catch((err) => {
      res.json(err)
      console.log(err)
    })
}

export const deleteBlog = async (req, res) => {
  const { blogId } = req.params.blogId

  try {
    Blog.findbyIdAndDelete({ _id: blogId })
      .then(() => {
        res.status(200).json({ status: 'blog deleted' })
      })
      .catch((err) => {
        console.log(err)
        res.json(err)
      })
  } catch {
    console.log(err)
    res.json(err)
  }
}
