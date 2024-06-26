import React from 'react';
import './CreatePost.css';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../firebase';
import { auth } from '../firebase';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { Navigate } from 'react-router-dom';

const CreatePost = ({isAuth}) => {
  const [title, setTitle] = React.useState('');
  const [postText, setPostText] = React.useState('');
  const navigate = useNavigate();

  useEffect (() => {
    if(!isAuth){
      navigate('/login');
    }
  },[]);

  const createPost = async () => {
    await addDoc(collection(db, "posts"), {
      title: title,
      postText: postText,
      auth: {
        username: auth.currentUser.displayName,
        id: auth.currentUser.uid,
      }
      })

      navigate('/');
  };

  return (
    <div className='createPostPage'>
      <div className='postContainer'>
        <h1>記事を投稿する</h1>
        <div className="inputPost">
          <div>タイトル</div>
          <input type="text" placeholder='タイトルを記入'
          onChange={(e) => setTitle(e.target.value)}/>
        </div>
        <div className="inputPost">
          <div>投稿内容</div>
          <textarea placeholder='投稿内容を記入'
          onChange={(e) => setPostText(e.target.value)}></textarea>
        </div>
        <button className='postButton' onClick={createPost}>投稿する</button>
      </div>
    </div>
  );
}

export default CreatePost
