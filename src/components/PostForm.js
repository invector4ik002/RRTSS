import React from 'react';
import { connect } from 'react-redux';
import { createPost, showAlert } from '../redux/actions';
import { Alert } from './Alert';

class PostForm extends React.Component {
   constructor(props) {
      super(props) 
      this.state = {
         title: '',
      }
   }

   handleSubmit = (event) => {

      event.preventDefault();
      const {title} = this.state;

      if(!title.trim()){
         return this.props.showAlert('Ну что то нужно написать, ты же понимаешь')
      }

      const newPost = {
         title, id: Date.now().toString()
      }

      // console.log(newPost) 
      this.props.createPost(newPost)
      this.setState({title: ''})

   };

   changeInutHandler = (event) => {
      event.persist();
      this.setState((prev) => (
         {
         ...prev, 
            ...{ [event.target.name]: event.target.value }
         }
      ))
   };

   render() {
      return (
         <div>
            <h1>Post Form</h1>
            <form onSubmit={this.handleSubmit}>
               {this.props.alert && <Alert text={this.props.alert}/>}
               <div className="form-group">
                  <label htmlFor="TitleName">TitleName</label>
                  <input 
                     onChange={this.changeInutHandler}
                     value={this.state.title}
                     name='title'
                     type="text" 
                     className="form-control" 
                     id="TitleName" 
                  />
               </div>
            </form>
            <button 
               onClick={this.handleSubmit}
               type='submit' 
               className="btn btn-primary"
            >Submit
            </button>
         </div>
      )
   }
}

const mapDispatchToProps = {
   createPost,
   showAlert
};

const mapStateToProps = (state) => ({
   alert: state.app.alert
});

export default connect(mapStateToProps, mapDispatchToProps)(PostForm);