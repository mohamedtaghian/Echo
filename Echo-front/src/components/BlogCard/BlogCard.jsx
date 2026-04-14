import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider/AuthProvider";
import { Link } from "react-router-dom";

function BlogCard({ blog, handleDeleteBlog }) {
  const { user } = useContext(AuthContext);

  return (
    <article className="relative flex md:flex-row flex-col md:items-center bg-white/10 shadow px-4 rounded-2xl max-w-md md:max-w-7xl">
      <div className="mx-auto my-4 md:mr-8 w-full md:w-[300px] md:max-w-sm h-[300px] shrink-0">
        <img
          className="rounded-2xl w-full h-full object-cover"
          src={blog.imageUrl}
          alt={blog.title}
        />
      </div>
      <div className="flex-1 py-4 sm:py-8">
        <h3 className="mb-6 font-medium text-white text-2xl">{blog.title} </h3>
        <p className="mb-6 text-white">{blog.description}</p>
        <p className="flex gap-2 text-slate-300">
          <span>By</span>
          <strong className="font-medium">{blog.authorName}</strong>
        </p>
      </div>
      {user ? (
        user.id === blog.userId ? (
          <div className="right-5 bottom-5 absolute flex gap-2.5">
            <Link
              to={`/edit-post/${blog.id}`}
              className="bg-slate-300 hover:bg-white p-2 rounded-full transition-colors duration-300 cursor-pointer"
            >
              <svg
                width="20px"
                height="20px"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M16.4745 5.40801L18.5917 7.52524M17.8358 3.54289L12.1086 9.27005C11.8131 9.56562 11.6116 9.94206 11.5296 10.3519L11 13L13.6481 12.4704C14.0579 12.3884 14.4344 12.1869 14.7299 11.8914L20.4571 6.16423C21.181 5.44037 21.181 4.26676 20.4571 3.5429C19.7332 2.81904 18.5596 2.81903 17.8358 3.54289Z"
                  stroke="#000000"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M19 15V18C19 19.1046 18.1046 20 17 20H6C4.89543 20 4 19.1046 4 18V7C4 5.89543 4.89543 5 6 5H9"
                  stroke="#000000"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Link>
            <button
              onClick={() => handleDeleteBlog(blog.id)}
              className="bg-slate-300 hover:bg-red-400 p-2 rounded-full hover:text-white transition-colors duration-300 cursor-pointer"
            >
              <svg
                fill="#000000"
                width="20px"
                height="20px"
                viewBox="0 0 16 16"
                id="trash-16px"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  id="Path_23"
                  data-name="Path 23"
                  d="M-250.5-236H-255v-1.5a1.5,1.5,0,0,0-1.5-1.5h-3a1.5,1.5,0,0,0-1.5,1.5v1.5h-4.5a.5.5,0,0,0-.5.5.5.5,0,0,0,.5.5h1.5v10.5a1.5,1.5,0,0,0,1.5,1.5h9a1.5,1.5,0,0,0,1.5-1.5V-235h1.5a.5.5,0,0,0,.5-.5A.5.5,0,0,0-250.5-236Zm-9.5-1.5a.5.5,0,0,1,.5-.5h3a.5.5,0,0,1,.5.5v1.5h-4Zm7,13a.5.5,0,0,1-.5.5h-9a.5.5,0,0,1-.5-.5V-235h10Zm-7-9v8a.5.5,0,0,1-.5.5.5.5,0,0,1-.5-.5v-8a.5.5,0,0,1,.5-.5A.5.5,0,0,1-260-233.5Zm4.5-.5a.5.5,0,0,1,.5.5v8a.5.5,0,0,1-.5.5.5.5,0,0,1-.5-.5v-8A.5.5,0,0,1-255.5-234Zm-2,.5v8a.5.5,0,0,1-.5.5.5.5,0,0,1-.5-.5v-8a.5.5,0,0,1,.5-.5A.5.5,0,0,1-257.5-233.5Z"
                  transform="translate(266 239)"
                />
              </svg>
            </button>
          </div>
        ) : null
      ) : null}
    </article>
  );
}

export default BlogCard;
