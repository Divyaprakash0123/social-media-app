import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Feed() {
  const navigate = useNavigate();

  const [posts, setPosts] = useState([]);
  const [text, setText] = useState("");
  const [comment, setComment] = useState("");

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/posts");
      setPosts(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const createPost = async () => {
    try {
      const token = localStorage.getItem("token");

      await axios.post(
        "http://localhost:5000/api/posts",
        {
          text,
        },
        {
          headers: {
            Authorization: token,
          },
        },
      );

      setText("");
      fetchPosts();
    } catch (error) {
      console.log(error);
    }
  };

  const likePost = async (id) => {
    try {
      const token = localStorage.getItem("token");

      await axios.put(
        `http://localhost:5000/api/posts/like/${id}`,
        {},
        {
          headers: {
            Authorization: token,
          },
        },
      );

      fetchPosts();
    } catch (error) {
      console.log(error);
    }
  };

  const addComment = async (id) => {
    try {
      const token = localStorage.getItem("token");

      await axios.post(
        `http://localhost:5000/api/posts/comment/${id}`,
        {
          text: comment,
        },
        {
          headers: {
            Authorization: token,
          },
        },
      );

      setComment("");
      fetchPosts();
    } catch (error) {
      console.log(error);
    }
  };

  const logout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  return (
    <div>
      <h1>Feed Page</h1>

      <button onClick={logout}>Logout</button>

      <br />
      <br />

      <input
        type="text"
        placeholder="Write a post..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      <button onClick={createPost}>Post</button>

      <hr />

      {posts.map((post) => (
        <div key={post._id} className="post">
          <h3>{post.text}</h3>

          <p>Likes: {post.likes.length}</p>

          <button onClick={() => likePost(post._id)}>Like</button>

          <br />
          <br />

          <input
            type="text"
            placeholder="Write comment..."
            value={comment}
            onChange={(e) => setComment(e.target.value)}
          />

          <button onClick={() => addComment(post._id)}>Comment</button>

          <div>
            {post.comments.map((c, index) => (
              <p key={index}>{c.text}</p>
            ))}
          </div>

          <hr />
        </div>
      ))}
    </div>
  );
}

export default Feed;
