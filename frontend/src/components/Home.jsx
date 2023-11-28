function Home({ post }) {
  console.log(post);
  return (
    <div className="bg-white p-4 rounded-md">
      <img
        className="w-full mx-auto mt-8"
        src={`${import.meta.env.VITE_server_URL}/images/${post.photo}`}
        alt="postImage"
      />
      <div>
        <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
        <div className="flex mb-2 text-sm font-semibold text-gray-500 items-center justify-between md:mb-4">
          <p>@{post.username}</p>
          <div className="flex space-x-2 text-sm">
            {/* <p>{new Date(post.updatedAt)}</p> */}
            <p>16:45</p>
          </div>
        </div>
        <p className="text-gray-600">{post.desc.slice(0, 199)}...Read More</p>
      </div>
      <p className="text-gray-600 mt-2">Categories: {post.categories}</p>
    </div>
  );
}

export default Home;
