import React, { useState, useEffect, useContext } from 'react'
import { Link, useNavigate, useLocation } from 'react-router-dom'
import Menu from '../components/Menu.js'
import { AuthContext } from '../context/authContext.js'
import axios from 'axios'
import moment from 'moment'

const Post = () => {
  const [post, setPost] = useState({})

  const location = useLocation()
  const postId = location.pathname.split('/')[2]
  const navigate = useNavigate()

  useEffect(() => {
    const fetchData = async () => {
      try{
        const res = await axios.get(`/posts/${postId}`)
        setPost(res.data)
      }
      catch(err){
        console.log(err)
      }
    }
    fetchData()
  }, [postId])

  const {currentUser} = useContext(AuthContext)

  const handleDelete = async () => {
    try{
      await axios.delete(`/posts/${postId}`)
      navigate(-1)
    }
    catch (err) {
      console.log(err)
    }
  }

  return (
    <div className='flex gap-[50px] mt-10'>
      <div className="flex-[5] flex flex-col gap-4">

        <div className="content">
          <img src={post?.img} alt="" className='w-full h-96 object-cover'/>
        </div>

        <div className="flex items-center gap-4">
          {post.userImg && <img src={post.userImg} alt="" className='w-[50px] h-[50px] rounded-full object-cover'/>}
          <div className="info text-sm">
            <span className='font-bold leading-3'>{post.username}</span>
            <p>Posted {moment(post.date).fromNow()}</p>
          </div>
         {currentUser.username === post.username &&
          <div className="edit">
            {/* Use images for both */}
            {/* State is like Props but for links */}
            <Link to={`/write?edit=2`} state={post}><p>Edit</p></Link>
            <p onClick={handleDelete}>Delete</p>
          </div>}
        </div>

        <div className='mt-4 flex flex-col gap-8'>
          <h2 className='text-4xl font-bold text-secondaryBlack'>{post?.title}</h2>
          <p className='text-secondaryBlack text-justify leading-7'>{post?.content}</p>
        </div>
      </div>
      <div className="flex-[2]">
        <Menu cat={post.cat} />
      </div>
    </div>
  )
}

export default Post
