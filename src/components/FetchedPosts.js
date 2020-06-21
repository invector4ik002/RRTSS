import React from 'react';
import Post from './Post';

export default ({ posts }) => {

   if(!posts.length) {
      return (
         <button className='btn btn-primary'>Loaded</button>
      )
   }

   return (
      posts.map((post) => {
        return (
           <Post post={post} key={post} />
        )
     })
  )
}