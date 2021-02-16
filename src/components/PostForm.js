import React, { useState } from 'react';
import { connect } from 'react-redux';
import { useSelector } from 'react-redux';
import { createPost, showAlert } from '../redux/actions';
import { Alert } from './Alert';

// class PostForm extends React.Component {
//    constructor(props) {
//       super(props) 
//       this.state = {
//          title: '',
//       }
//    }
export const PostForm = () => {

   const [newpost, setPost] = useState({title: ''});
   const alert = useSelector(state => state.app.alert)

   // console.log('object');
   const handleSubmit = (event) => {

      event.preventDefault();
      // const {title} = this.state;
      if(!newpost.title.trim()){
         return this.props.showAlert('Ну что то нужно написать, ты же понимаешь')
      }
      const newPost = {
         title: newpost.title, 
         id: Date.now().toString()
      }
      console.log(newPost) 
      // createPost(newPost)
      // this.setState({title: ''})

   };

   const changeInutHandler = (event) => {
      event.persist();
      setPost((prev) => (
         {
         ...prev, 
            ...{ [event.target.name]: event.target.value }
         }
      ))
   };


   return (
      <div>
         <h1>Post Form</h1>
         <form onSubmit={handleSubmit}>
            {/* {this.props.alert && <Alert text={this.props.alert}/>} */}
            <div className="form-group">
               <label htmlFor="TitleName">TitleName</label>
               <input 
                  onChange={changeInutHandler}
                  value={newpost.title}
                  name='title'
                  type="text" 
                  className="form-control" 
                  id="TitleName" 
               />
            </div>
         </form>
         <button 
            onClick={handleSubmit}
            type='submit' 
            className="btn btn-primary"
         >Submit
         </button>
      </div>
   )
}

// const mapDispatchToProps = {
//    createPost,
//    showAlert
// };

// const mapStateToProps = (state) => ({
//    alert: state.app.alert
// });

// export default connect(mapStateToProps, mapDispatchToProps)(PostForm);