import axios from 'axios'

const baseUrl = 'http://localhost:3001'

export const getAllBlogs = async (page) => {
  try {
    const response = await axios.get(`${baseUrl}/blogs?page=${page}&limit=20`)
    return { data: response?.data }
  } catch (error) {
    return { error: error?.message || 'Something went wrong!' }
  }
}
