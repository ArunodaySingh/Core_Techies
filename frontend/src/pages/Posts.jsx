import { useContext, useEffect, useState } from "react";
import Home from "../components/Home";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../context/UserContext";

function Posts() {
  const { user } = useContext(UserContext);
  const navigate = useNavigate();
  const [posts, setPosts] = useState([]);

  //api calling
  const fetchPosts = async () => {
    try {
      const res = await axios.get(
        `${import.meta.env.VITE_server_URL}/api/posts`
      );
      setPosts(res.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-5">
        {posts.map((post) => (
          <>
            <Link to={user ? `/posts/post/${post._id}` : navigate("/login")}>
              <Home key={post._id} post={post} />
            </Link>
          </>
        ))}
      </div>
    </>
  );
}

export default Posts;
