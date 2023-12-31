import React from 'react'
import { useLoaderData } from 'react-router-dom'
import PostDetails from '../components/PostDetails';

const Details = () => {
    const post = useLoaderData();
  return (
    <>
        <PostDetails post = {post}  />
    </>
  )
}

export default Details

export const loader = async ({request,params}) => {
    const response = await fetch(`http://localhost:8080/posts/${params.id}`)

    if(!response.ok){
        throw new Error();
    }else{
        const data = await response.json();
        return data.post;
    }

}