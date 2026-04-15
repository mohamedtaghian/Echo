import { useContext, useEffect, useState } from "react";
import BlogCard from "../../components/BlogCard/BlogCard";
import NavBar from "../../components/NavBar/NavBar";
import axios from "axios";
import toast from "react-hot-toast";
import { AuthContext } from "../../providers/AuthProvider/AuthProvider";
import { Link } from "react-router-dom";

function Home() {
  const { user } = useContext(AuthContext);

  // States
  const [blogs, setBlogs] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  // Handlers
  const getAllBlogs = async () => {
    try {
      const res = await axios.get("http://localhost:3000/posts");
      setBlogs(res.data);
    } catch (error) {
      console.log(error);
      setError(error);
    } finally {
      setIsLoading(false);
    }
  };

  const getAuthHeaders = () => {
    const token = localStorage.getItem("token");

    return {
      Authorization: `Bearer ${token}`,
    };
  };

  const handleDeleteBlog = async (id) => {
    try {
      await axios.delete(`http://localhost:3000/posts/${id}`, {
        headers: getAuthHeaders(),
      });

      setBlogs((prevBlogs) => prevBlogs.filter((blog) => blog.id !== id));
      console.log(id);
      toast.success("Post deleted successfully");
    } catch (error) {
      if (error.response?.status === 401) {
        toast.error("You are not authorized to delete this post.");
      } else {
        toast.error("Failed to delete post");
      }
    }
  };

  useEffect(() => {
    getAllBlogs();
  }, []);

  return (
    <div className="bg-black/90 pt-2.5 min-h-screen">
      <NavBar />

      {!blogs ? (
        <div className="flex justify-center items-center h-[calc(100vh-82px)]">
          <h2 className="font-bold text-red-400 text-2xl text-center">
            No Posts to show!
          </h2>
        </div>
      ) : (
        <>
          <div className="mt-10 text-white text-center container">
            <h2 className="font-bold text-4xl">Latest Posts</h2>
            <p className="mt-2.5 text-base">
              Discover stories, thinking, and expertise from writers on any
              topic.
            </p>
          </div>
          <div className="flex flex-col gap-10 py-10 container">
            {isLoading && (
              <>
                <article className="relative flex md:flex-row flex-col md:items-center bg-white/10 shadow px-4 rounded-2xl max-w-md md:max-w-7xl animate-pulse">
                  <div className="mx-auto my-4 md:mr-8 w-full md:w-75 md:max-w-sm h-75 shrink-0">
                    <div className="bg-slate-700 rounded-2xl w-full h-full"></div>
                  </div>
                  <div className="flex-1 py-4 sm:py-8">
                    <div className="bg-slate-700 mb-6 rounded w-2/3 h-6"></div>
                    <div className="space-y-3 mb-6">
                      <div className="bg-slate-700 rounded h-4"></div>
                      <div className="bg-slate-700 rounded h-4"></div>
                      <div className="bg-slate-700 rounded w-5/6 h-4"></div>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="bg-slate-700 rounded w-6 h-4"></div>
                      <div className="bg-slate-700 rounded w-24 h-4"></div>
                    </div>
                  </div>
                  <div className="right-5 bottom-5 absolute flex gap-2.5">
                    <div className="bg-slate-700 rounded-full w-9 h-9"></div>
                    <div className="bg-slate-700 rounded-full w-9 h-9"></div>
                  </div>
                </article>
                <article className="relative flex md:flex-row flex-col md:items-center bg-white/10 shadow px-4 rounded-2xl max-w-md md:max-w-7xl animate-pulse">
                  <div className="mx-auto my-4 md:mr-8 w-full md:w-75 md:max-w-sm h-75 shrink-0">
                    <div className="bg-slate-700 rounded-2xl w-full h-full"></div>
                  </div>
                  <div className="flex-1 py-4 sm:py-8">
                    <div className="bg-slate-700 mb-6 rounded w-2/3 h-6"></div>
                    <div className="space-y-3 mb-6">
                      <div className="bg-slate-700 rounded h-4"></div>
                      <div className="bg-slate-700 rounded h-4"></div>
                      <div className="bg-slate-700 rounded w-5/6 h-4"></div>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="bg-slate-700 rounded w-6 h-4"></div>
                      <div className="bg-slate-700 rounded w-24 h-4"></div>
                    </div>
                  </div>
                  <div className="right-5 bottom-5 absolute flex gap-2.5">
                    <div className="bg-slate-700 rounded-full w-9 h-9"></div>
                    <div className="bg-slate-700 rounded-full w-9 h-9"></div>
                  </div>
                </article>
              </>
            )}
            {blogs?.map((blog) => (
              <BlogCard
                key={blog.id}
                blog={blog}
                handleDeleteBlog={handleDeleteBlog}
              />
            ))}
          </div>
          {user && (
            <Link
              to={"/add-post"}
              className="right-5 bottom-5 fixed bg-slate-500 hover:bg-green-500 p-2 rounded-full transition-colors duration-300 cursor-pointer hover:"
            >
              <svg
                fill="#fff"
                xmlns="http://www.w3.org/2000/svg"
                width="20px"
                height="20px"
                viewBox="0 0 52 52"
                enableBackground="new 0 0 52 52"
                xmlSpace="preserve"
              >
                <path
                  d="M30,29h16.5c0.8,0,1.5-0.7,1.5-1.5v-3c0-0.8-0.7-1.5-1.5-1.5H30c-0.6,0-1-0.4-1-1V5.5C29,4.7,28.3,4,27.5,4
	h-3C23.7,4,23,4.7,23,5.5V22c0,0.6-0.4,1-1,1H5.5C4.7,23,4,23.7,4,24.5v3C4,28.3,4.7,29,5.5,29H22c0.6,0,1,0.4,1,1v16.5
	c0,0.8,0.7,1.5,1.5,1.5h3c0.8,0,1.5-0.7,1.5-1.5V30C29,29.4,29.4,29,30,29z"
                />
              </svg>
            </Link>
          )}
        </>
      )}
    </div>
  );
}

export default Home;
