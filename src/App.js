import React from 'react';
import { PostForm } from './components/PostForm';
import { Posts } from './components/Posts';
import FetchedPosts from './components/FetchedPosts';
import './index.css';

function App () {
   
   return (
      <div className="container pt-3">
         <div className="row form--outline form--padding">
            <div className="col">
               <PostForm />
            </div>
         </div>

         <div className="row form--outline">
            <div className="col form--outline form--padding">
               <h2>Синхронные запросы</h2>
               <Posts />
            </div>

            <div className="col form--outline form--padding">
            <h2>Асинхронные запросы</h2>
               <FetchedPosts />
            </div>
         </div>
      </div>
   );
}

export default App;
