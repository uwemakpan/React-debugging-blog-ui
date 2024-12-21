import { useState, useEffect } from 'react'
import BlogCard from '../common/BlogCard'
import ErrorMessage from '../common/ErrorMessage'
import { getAllBlogs } from '../../lib/apis/blogApis'

const AllBlogs = () => {
  const [blogs, setBlogs] = useState([])

  const onGetAllBlogs = async () => {
    const result = await getAllBlogs(1)
    setBlogs(result?.data?.blogs)
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      onGetAllBlogs()
    }, 1000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <section className='container mx-auto my-10'>
      <div className='grid grid-cols-3'>
        {blogs && blogs.length > 0 ? (
          blogs.map((blog) => (
            <BlogCard
              key={blog?._id}
              title={blog?.title}
              description={blog?.content}
            />
          ))
        ) : (
          <ErrorMessage message='No blog found' />
        )}
      </div>
    </section>
  )
}

export default AllBlogs
