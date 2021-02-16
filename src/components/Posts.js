import React from 'react';
import Post from './Post';
// import { connect } from 'react-redux';
import { useSelector } from 'react-redux';

export const Posts = () => {
   
   const syncPosts = useSelector(state => state.posts.posts)

   if(!syncPosts.length) {
      return (
         <p className='text-center'>Постов пока нет</p>
      )
   }

   return (
      syncPosts.map((post) => {
         return (
            <Post post={post} key={post.id} />
         )
      })
   ) 
}

// const mapStateToProps = (state) => {
//    console.log('Posts:', state)
//    return {
//       syncPosts: state.posts.posts
//    }
// }

// export default (Posts)