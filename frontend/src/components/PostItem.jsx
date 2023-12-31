import React from 'react'
import { Link } from 'react-router-dom'
import {CalendarDaysIcon} from "@heroicons/react/24/solid"

const PostItem = ({post}) => {
    const {id,title,image,date} = post
  return (
    <section className='post'>
        <Link to={`/post-details/${id}`} > <img src={image} alt={title} /> </Link>
        <Link to={`/post-details/${id}`} ><p className='title' > {title} </p></Link>
        <p className='date' > 
          <CalendarDaysIcon className='clockIcon' /> <span> {date} </span>
        </p>
        <hr />
    </section>
  )
}

export default PostItem