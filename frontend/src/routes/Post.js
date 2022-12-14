import React from 'react'
import { Link } from 'react-router-dom'
import Menu from '../components/Menu.js'

const Post = () => {
  return (
    <div className='flex gap-[50px] mt-10'>
      <div className="flex-[5] flex flex-col gap-4">

        <div className="content">
          <img src="https://images.unsplash.com/photo-1661956602868-6ae368943878?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60" alt="" className='w-full h-96 object-cover'/>
        </div>

        <div className="flex items-center gap-4">
          <img src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bWFufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="" className='w-[50px] h-[50px] rounded-full object-cover'/>
          <div className="info text-sm">
            <span className='font-bold leading-3'>John</span>
            <p>Posted 2 days ago</p>
          </div>
          <div className="edit">
            {/* Use images for both */}
            <Link to={`write?edit=2`}><p>Edit</p></Link>
            <p>Delete</p>
          </div>
        </div>

        <div className='mt-4 flex flex-col gap-8'>
          <h2 className='text-4xl font-bold text-secondaryBlack'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem quas laudantiug elit. Hic, sunt.</h2>
          <p className='text-secondaryBlack text-justify leading-7'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, vitae ut, provident enim, eveniet voluptates qui rem animi culpa blanditiis libero quo assumenda dolor aliquam magnam dolores obcaecati nihil facilis quisquam. Eos obcaecati aspernatur <br /><br/>perspiciatis. Ad cupiditate eos, provident tenetur placeat animi amet eum nam praesentium, cumque architecto facilis totam at ea eveniet nostrum quibusdam maxime officia eaque voluptate labore iste ullam. Architecto, consequuntur saepe deserunt illo ullam maxime totam doloremque tenetur dignissimos nam voluptates assumenda ut eum blanditiis laudantium nisi voluptatum aperiam a modi in vitae nihil esse! Exercitationem!lorem30<br/><br/>

            Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum labore facilis excepturi possimus numquam animi esse veritatis dicta, assumenda eveniet? Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quod dolorem ad quaerat natus sit corporis excepturi fuga tempora omnis accusamus magnam non necessitatibus, esse pariatur vitae maxime cupiditate dicta iusto facere tempore dolorum ea debitis? Ea minus aperiam vel? Nulla, deleniti ab. Ut ullam maxime tempora dicta c<br/><br/>
            
            ulpa, velit quis ad nobis, magni corporis quos eos at necessitatibus rem ex pariatur, vitae veritatis ducimus impedit iste dolore deleniti? Nobis aspernatur eligendi, repellat quisquam iusto repellendus cumque temporibus totam voluptatibus maiores! Blanditiis sunt hic sint laborum ullam? Voluptates quaerat laboriosam officia!lorem90
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit corrupti culpa doloremque? Quos, sint animi voluptatum ea ipsa fugit corrupti nihil aliquam, sapiente eveniet consectetur cumque et autem optio illo facere officia. Cumque neque earum magnam ad porro modi expedita!
          </p>
        </div>
      </div>
      <div className="flex-[2]">
        <Menu />
      </div>
    </div>
  )
}

export default Post
