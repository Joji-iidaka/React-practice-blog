import './Home.css';
import { doc,collection,deleteDoc,getDocs } from 'firebase/firestore';
import { auth, db } from '../firebase';
import { useEffect } from'react';
import { useState } from'react';

const Home = () => {
  const [postList, setPostList] = useState([]);

  const deleteData = async (id) => {
    await deleteDoc(doc(db,"posts",id));
    window.location.href = "/";
  }

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
          {post.auth.id === auth.currentUser?.uid && (
            <button onClick={() => deleteData(post.id)}>削除</button>
          )}
        </div>
      </div>
      )
    })}
  </div>
}

export default Home;