import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Login from "./pages/Login";
import Register from "./pages/Register";
import PostDetails from "./pages/PostDetails";
import Posts from "./pages/Posts";
import CreatePost from "./pages/CreatePost";
import EditPost from "./pages/EditPost";
import { UserContextProvider } from "./context/UserContext";
import MyBlogs from "./pages/MyBlogs";

function App() {
  return (
    <UserContextProvider>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Posts />}></Route>
        <Route exact path="/login" element={<Login />}></Route>
        <Route exact path="/register" element={<Register />}></Route>
        <Route exact path="/posts/post/:id" element={<PostDetails />}></Route>
        <Route exact path="/edit/post/:id" element={<EditPost />}></Route>
        <Route exact path="/write" element={<CreatePost />}></Route>
        <Route exact path="/myblogs/:id" element={<MyBlogs />}></Route>
      </Routes>
      <Footer />
    </UserContextProvider>
  );
}

export default App;
