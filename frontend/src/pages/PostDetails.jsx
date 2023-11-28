import { BiEdit } from "react-icons/bi";
import { MdDelete } from "react-icons/md";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "../context/UserContext";

function PostDetails() {
  const [post, setPost] = useState();
  const [comment, setComment] = useState("");
  const [commentlist, setCommentList] = useState([]);
  const id = useParams().id;
  const { user } = useContext(UserContext);
  const navigate = useNavigate();

  // Api calling
  const fetchPost = async () => {
    try {
      let res = await axios.get(
        `${import.meta.env.VITE_server_URL}/api/posts/${id}`
      );

      setPost(res.data);
      // console.log(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchPost();
  }, [id]);

  // Delete post Request Handler
  const deleteRequest = async () => {
    try {
      await axios.delete(`${import.meta.env.VITE_server_URL}/api/posts/${id}`, {
        withCredentials: true,
      });
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };

  // Edit post Request Handler
  const postEditRequest = () => {
    navigate(`/edit/post/${id}`);
  };

  // add comment
  const addComment = async () => {
    try {
      await axios.post(
        `${import.meta.env.VITE_server_URL}/api/comments/create`,
        { comment, author: user.username, postId: id, userId: user._id },
        { withCredentials: true }
      );
      setComment("");
    } catch (error) {
      console.log(error);
    }
  };

  // fetch comment
  const fetchComment = async () => {
    try {
      let res = await axios.get(
        `${import.meta.env.VITE_server_URL}/api/comments/post/${id}`,
        { withCredentials: true }
      );
      console.log(res.data);
      setCommentList(res.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchComment();
  }, [comment]);

  return (
    <>
      {post && (
        <div className="px-8 md:px-[200] mt-8">
          <div className="flex justify-between items-center mx-auto max-w-5xl ">
            <h1 className="text-2xl font-bold text-black md:text-3xl ">
              {post.title}
            </h1>
            {(user._id === post.userId ||
              user._id === import.meta.env.VITE_adminId) && (
              <div className="flex items-center justify-center space-x-2">
                <p>
                  <BiEdit
                    onClick={postEditRequest}
                    className="cursor-pointer"
                  />
                </p>
                <p>
                  <MdDelete
                    onClick={deleteRequest}
                    className="cursor-pointer"
                  />
                </p>
              </div>
            )}
          </div>
          <div className="flex items-center justify-between mt-2 mx-auto md:mt-4 max-w-5xl">
            <p>{post.username}</p>
            <div className="flex space-x-2">
              <p>{new Date(post.updatedAt).toString().slice(0, 15)}</p>
              <p>{new Date(post.updatedAt).toString().slice(16, 24)}</p>
            </div>
          </div>
          <img
            className="w-full mx-auto mt-8 max-h-96 max-w-5xl"
            src={`${import.meta.env.VITE_server_URL}/images/${post.photo}`}
            alt="postImage"
          />

          <p className="mx-auto mt-8 max-w-5xl">{post.desc}</p>
          {/* Categories */}
          <div className="flex items-center justify-left mt-8 mb-4 space-x-4 font-semibold  mx-auto max-w-5xl">
            <p>Categories:</p>
            <div className="flex justify-center items-center space-x-2">
              {post.categories.map((ele, id) => {
                return (
                  <div key={id} className="bg-gray-300 rounded-lg px-3 py-1">
                    {ele}
                  </div>
                );
              })}
            </div>
          </div>
          {/* Comment */}
          <div className="flex flex-col mt-4  mx-auto max-w-5xl">
            <h3 className="mt-6 mb-4 font-semibold">Comments:</h3>
            {/* New Comment */}
            {commentlist.map((ele) => {
              return (
                <>
                  <div className="px-2 my-2 py-2 flex items-center justify-between bg-gray-200 rounded-lg">
                    <div className="flex items-center justify-between">
                      <h3 className="font-bold text-gray-600 ">
                        {ele.comment}
                      </h3>
                    </div>

                    <div className="flex items-center md:mt-4 flex-col md:flex-row">
                      <h3 className="text-gray-600 font-bold mx-2">
                        {ele.author}
                      </h3>
                      <div className="flex space-x-2 ">
                        <p className="text-gray-500 text-sm">
                          {new Date(ele.updatedAt).toString().slice(0, 15)}
                        </p>
                        <p className="text-gray-500 text-sm">
                          {new Date(ele.updatedAt).toString().slice(16, 24)}
                        </p>
                      </div>
                    </div>
                  </div>
                </>
              );
            })}
          </div>
          {/* Write a New Comment */}
          <div className="flex-col my-2 flex mt-4 md:flex-row  mx-auto max-w-5xl">
            <input
              type="text"
              className="md:w-[90%] outline-none py-2 px-4 mt-4 md:mt-0 "
              placeholder="Write a Comment"
              value={comment}
              onChange={(e) => setComment(e.target.value)}
            />
            <button
              className="px-2.5 py-1 text-white bg-black rounded-lg"
              type="button"
              onClick={addComment}
            >
              Add Comment
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default PostDetails;
