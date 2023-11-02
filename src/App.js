import 'App.css';
import React from 'react';
import PropTypes from "prop-types";
import {Button} from 'antd';
import ThemedButton from 'ThemedButton';
import Counter from "Counter";
import Profile from "Profile";
import Message from 'Message';

class PostDetail extends React.Component {
  static propTypes = {
    postId: PropTypes.number.isRequired,
  }
  state = {
    PostDetail: null,
  }
  componentDidMount(){
    const { postId } = this.props;
    this.requestPost(postId);
  }

  componentDidUpdate(prevProps){
    const { postId } = this.props;
    if(postId !== prevProps.postId) {
      this.requestPost(postId);
     }
  }
  requestPost(postId){
    console.log(`request post #${postId}`);
    this.setState({
      postDetail:null
    })
    setTimeout(() => {
      this.setState({
        postDetail: `로딩된 post #${postId}`
      })
    }, 3000)
  }

  render() {
    const { postId } = this.props;
    const {postDetail} = this.state;
    return (
      <div>
        포스팅 #{postId}
        <hr/>
        {!postDetail && "로딩중 ..."}
        {postDetail}
      </div>
    )
  }
}

class App extends React.Component {
  render() {
    return(
      <div>
        <Profile />
        <Message />
        <Counter/>
        <Counter color='green'/>
        <Counter color='blue'/>
      </div>
    )
  }
}

export default App;
