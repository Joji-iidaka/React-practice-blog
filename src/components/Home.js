import './Home.css';
import { collection,getDocs } from 'firebase/firestore';
import { db } from '../firebase';
import { useEffect } from'react';
import { useState } from'react';

const Home = () => {
  const [postList, setPostList] = useState([]);

  useEffect(() => {
    const getPosts = async () =>{
      const data = await getDocs(collection(db,"posts"));
      setPostList(data.docs.map((doc) => ({...doc.data(),id:doc.id })));
    };
    getPosts();
  },[]);

  return <div className='homePage'>
    {postList.map((post) => {
      return (
        <div key={post.id} className='postContents'>
        <div className='postHeader'>
          <h1 >{post.title}</h1>
        </div>

        <div className='postTextContainer'>
          {post.postText}
        </div>
        <div className="nameAndDeleteButton">
          <h3>@{post.auth.username}</h3>
          <button>削除</button>
        </div>
      </div>
      )
    })}
  </div>
}

export default Home;