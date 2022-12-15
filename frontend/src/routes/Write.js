import React, { useState } from 'react'

import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'
import axios from 'axios'
import { useLocation } from 'react-router-dom'

const Write = () => {

  const state = useLocation().state
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [img, setImg] = useState(null)
  const [cat, setCat] = useState('')

  const upload = async () => {
    try {
      const formData = new FormData()
      formData.append('file', img)
      const res = await axios.post('/upload', formData)
      return res.data
    }
    catch (err) {
      console.log(err)
    }
  }

  const handleSubmit = async e => {
    e.preventDefault()
    const url = upload()

    try {
      
    } catch (error) {
      
    }
  }


  return (
    <div className="mt-10 flex gap-6">

      <div className="flex-[5] flex flex-col gap-4">
        <input type="text" placeholder='Title' className='py-4 px-5 border border-gray-300 focus:ring-darkOrange text-2xl rounded-md' onChange={e => setTitle(e.target.value)}/>
        <ReactQuill theme='snow' value={description} onChange={setDescription} className='h-[400px] border border-gray-300 focus:ring-darkOrange'></ReactQuill>
      </div>

      <div className="flex-[2] flex flex-col gap-6">
        <div className="item1 border border-gray-300 py-3 px-2">
          <h3 className='text-xl font-bold opacity-90 mb-2'>Publish</h3>
          <span><b>Status: </b>Draft</span><br />
          <span><b>Visibility: </b>Public</span><br />
          <label className='underline cursor-pointer'>
            <input type="file" className='hidden' onChange={e => setImg(e.target.files[0])} />
          Upload Image</label>
          <div className="flex justify-between">
            <button className='py-1 px-2 border rounded-md border-darkOrange text-darkOrange'>Save as draft</button>
            <button className='py-1 px-2 border rounded-md border-darkOrange bg-darkOrange text-white' onClick={handleSubmit}>Publish</button>
          </div>
        </div>
        <div className="flex flex-col border border-gray-300 py-3 px-2 justify-between">
          <h3 className='text-xl font-bold opacity-90 mb-2'>Category</h3>
          <label className='selected:bg-lightOrange py-1 px-2'><input type="radio" name='cat' value='art' id='art' className='' onChange={e => setCat(e.target.value)} />ART</label>
          <label className='selected:bg-lightOrange py-1 px-2'><input type="radio" name='cat' value='tech' id='tech' className='' onChange={e => setCat(e.target.value)} />TECH</label>
          <label className='selected:bg-lightOrange py-1 px-2'><input type="radio" name='cat' value='business' id='business' className='' onChange={e => setCat(e.target.value)} />BUSINESS</label>
          <label className='selected:bg-lightOrange py-1 px-2'><input type="radio" name='cat' value='science' id='science' className='' onChange={e => setCat(e.target.value)} />SCIENCE</label>
          <label className='selected:bg-lightOrange py-1 px-2'><input type="radio" name='cat' value='food' id='food' className='' onChange={e => setCat(e.target.value)} />FOOD</label>
          <label className='selected:bg-lightOrange py-1 px-2'><input type="radio" name='cat' value='design' id='design' className='' onChange={e => setCat(e.target.value)} />DESIGN</label>
        </div>
      </div>

    </div>
  )
}

export default Write
