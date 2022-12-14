import React from 'react'

const Menu = () => {

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
    <div>
      <h2 className='text-2xl text-secondaryBlack font-bold opacity-[95%] mb-5'>Other posts you may like..</h2>
      <div className="flex flex-col gap-6">
        {posts.map(post => {
          return (
            <div key={post.id} className='flex flex-col gap-2'>
                <img src={post.img} alt="" className='w-full h-48 object-cover'/>
                <h3 className='text-xl font-bold text-secondaryBlack opacity-[95%]'>{post.title}</h3>
                <button className='w-max border border-primaryColor text-primaryColor py-1 px-2 text-sm hover:bg-lightOrange delay-100 rounded-sm hover:text-darkOrange hover:border-lightOrange'>Read More</button>
            </div>
          )}
        )}
      </div>
    </div>
  )
}

export default Menu
