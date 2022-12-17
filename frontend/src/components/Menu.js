import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

const Menu = ({cat, id}) => {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      try{
        const res = await axios.get(`/posts/?cat=${cat}`)
        setPosts(res.data.length > 4 ? res.data.slice(0, 4): res.data)
      }
      catch(err){
        console.log(err)
      }
    }
    fetchData()
  }, [cat]) 

  return (
    <div>
      <h2 className='text-2xl text-secondaryBlack font-bold opacity-[95%] mb-5'>Other posts you may like..</h2>
      <div className="flex flex-col gap-6">
        {posts.map(post => {
          if (post.id != id) {
            return (
              <div key={post.id} className='flex flex-col gap-2'>
                  <img src={post.img} alt="" className='w-full h-48 object-cover'/>
                  <h3 className='text-xl font-bold text-secondaryBlack opacity-[95%]'>{post.title}</h3>
                  {/* without '/' at start will add that to exiting URL instead of absolute URL from start */}
                  <Link to={`/post/${post.id}`}> 
                    <button className='w-max border border-primaryColor text-primaryColor py-1 px-2 text-sm hover:bg-lightOrange delay-100 rounded-sm hover:text-darkOrange hover:border-lightOrange'>Read More</button>
                  </Link>
              </div>
            )}
            return null
        })}
      </div>
    </div>
  )
}

export default Menu
