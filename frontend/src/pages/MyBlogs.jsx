import { Link } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "../context/UserContext";
import axios from "axios";
import Home from "../components/Home";

const MyBlogs = () => {
  // console.log(search)
  const [posts, setPosts] = useState([]);
  const [noResults, setNoResults] = useState(false);
  const { user } = useContext(UserContext);
  // console.log(user)

  const fetchPosts = async () => {
    try {
      const res = await axios.get(
        `${import.meta.env.VITE_server_URL}/api/posts/user/${user._id}`
      );
      console.log(res.data);
      setPosts(res.data);
      if (res.data.length === 0) {
        setNoResults(true);
      } else {
        setNoResults(false);
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-5">
        <div className="h-[40vh] flex justify-center items-center"></div>
        {!noResults ? (
          posts.map((post) => (
            <>
              <Link
                key={post._id}
                to={user ? `/posts/post/${post._id}` : "/login"}
              >
                <Home key={post._id} post={post} />
              </Link>
            </>
          ))
        ) : (
          <h3 className="text-center font-bold mt-16">No posts available</h3>
        )}
      </div>
    </div>
  );
};

export default MyBlogs;
