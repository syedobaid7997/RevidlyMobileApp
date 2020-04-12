import React from 'react';
import App from './App';
import { BrowserRouter,Route,Switch } from 'react-router-dom';
import './Post.css';

class Post extends React.Component{
  state={
    value:"Hello"
  }
  handleChange = e => {
    this.setState({value:e.target.value});
  }

  goBack = () => {
    this.props.history.push('/app');
    }
  render(){
    return (
      <div>
      <button className='primary' type="button" onClick={this.goBack}>Click here to return</button>
      <Route path="/app" component={App}/>
        <form>
          <label id="postlabel">Your Post:</label><br/>
          <textarea className="textarea" cols={70} rows={5} value={this.state.value} onChange={this.handleChange}/>
          <br></br>
          <input className="imageupload" style={{align:'center'}} type="file" id="myfile" name="myfile" placeholder="Upload images"></input>
          <p>
            <label className="checkboxes" for="int1">
                <input  type="checkbox" id="int1" name="int1" value="post"/>
                &nbsp;All Clans
            </label><br/> 
            <label className="checkboxes" for="int2">
                <input  type="checkbox" id="int2" name="int2" value="post"/>
                &nbsp;Revidly Internships
            </label><br/>
            <label  className="checkboxes" for="int3">
                <input type="checkbox" id="int3" name="int3" value="post"/>
                &nbsp;Web Development
            </label><br/>
          </p>
          <button type="submit" value="text">Post</button>
        </form>

      </div>
    )
  }
}

export default Post;