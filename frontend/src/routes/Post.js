import React, { useState, useEffect, useContext } from 'react'
import { Link, useNavigate, useLocation } from 'react-router-dom'
import Menu from '../components/Menu.js'
import { AuthContext } from '../context/authContext.js'
import axios from 'axios'
import moment from 'moment'

const Post = () => {
  const [post, setPost] = useState({})

  const location = useLocation()
  const postId = location.pathname.split('/')[2] // or use post.id from data received
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

  console.log(post.content)
  return (
    <div className='flex gap-[50px] mt-10'>
      <div className="flex-[5] flex flex-col gap-4">

        <div className="content border-2 border-gray-600">
          <img src={post.img && require('../uploads/' + post.img)} alt="img" className='w-full h-96 object-contain' />
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
            <Link to={`/write?edit=${postId}`} state={post}><p>Edit</p></Link>
            <p onClick={handleDelete}>Delete</p>
          </div>}
        </div>

        <div className='mt-4 flex flex-col gap-8'>
          <h2 className='text-4xl font-bold text-secondaryBlack'>{post?.title}</h2>
          <div className='text-secondaryBlack text-justify leading-7'>{post?.content}</div>
        </div>
      </div>
      <div className="flex-[2]">
        <Menu cat={post.cat} id={post.id} />
      </div>
    </div>
  )
}

export default Post
