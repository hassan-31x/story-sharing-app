import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {

  const posts = [
    {
      id: 1,
      title: 'Post 1',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod',
      img: 'https://images.unsplash.com/photo-1664575196079-9ac04582854b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60'
    },
    {
      id: 2,
      title: 'Post 2',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod',
      img: 'https://images.unsplash.com/photo-1664575196079-9ac04582854b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60'
    },
    {
      id: 3,
      title: 'Post 3',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod',
      img: 'https://images.unsplash.com/photo-1664575196079-9ac04582854b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60'
    },
    {
      id: 4,
      title: 'Post 4',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod',
      img: 'https://images.unsplash.com/photo-1664575196079-9ac04582854b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60'
    },
  ]

  return (
    <div className=''>
      <div className="mt-9 flex flex-col gap-32">
        {posts.map(post => (
          <div className='flex gap-10 odd:flex-row-reverse' key={post.id}>
            <div className="flex-[2] relative">
              <img src={post.img} alt="img" className='w-full object-cover' />
              <div className='w-full h-full absolute top-3 bg-lightOrange z-[-1] -left-4'></div>
            </div>
            <div className="flex-[3] flex flex-col justify-between">
              <Link to={`post/${post.id}`}>
                <h2 className='text-5xl font-bold'>{post.title}</h2>
              </Link>
              <p className='text-lg font-semibold'>{post.content}</p>
              <button className='w-max border border-primaryColor text-primaryColor py-2 px-4 hover:bg-lightOrange delay-100 rounded-md hover:text-darkOrange hover:border-lightOrange'>Read More</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Home
