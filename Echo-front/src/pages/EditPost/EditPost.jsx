import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-hot-toast";
import { z } from "zod";

const postSchema = z.object({
  title: z.string().min(5, "Title must be at least 5 characters"),
  description: z.string().min(10, "Description must be at least 10 characters"),
  imageUrl: z.url("Please enter a valid image URL"),
});

const EditPost = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(postSchema),
    mode: "onBlur",
  });

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const res = await axios.get(`http://localhost:3000/posts/${id}`);
        reset(res.data);
      } catch (error) {
        toast.error(error.response?.data || "Could not find that post.");
        navigate("/");
      }
    };
    fetchPost();
  }, [id, reset, navigate]);

  const onSubmit = async (data) => {
    try {
      const token = localStorage.getItem("token");

      await axios.patch(`http://localhost:3000/posts/${id}`, data, {
        headers: { Authorization: `Bearer ${token}` },
      });

      toast.success("Post updated successfully!");
      navigate("/");
    } catch (error) {
      toast.error(error.response?.data || "Failed to update post.");
    }
  };

  return (
    <section className="flex justify-center items-center bg-black/90 p-4 min-h-screen">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-white/10 shadow-2xl backdrop-blur-lg px-8 border border-white/20 rounded-2xl w-full sm:w-112.5 text-center"
      >
        <h2 className="mt-10 mb-6 font-medium text-white text-3xl">
          Edit Post
        </h2>

        <div className="flex items-center gap-2 bg-white/5 mt-4 p-6 rounded-full ring-2 ring-white/10 focus-within:ring-indigo-500/60 w-full h-12 overflow-hidden transition-all">
          <span className="font-bold text-white/60 text-sm">T</span>
          <input
            {...register("title")}
            placeholder="Post Title"
            className="bg-transparent border-none outline-none w-full text-white placeholder-white/60"
          />
        </div>
        {errors.title && (
          <p className="mt-2 ml-4 text-red-400 text-xs text-left">
            {errors.title.message}
          </p>
        )}

        <div className="flex items-center gap-2 bg-white/5 mt-4 p-6 rounded-full ring-2 ring-white/10 focus-within:ring-indigo-500/60 w-full h-12 overflow-hidden transition-all">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            className="text-white/75"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <rect width="18" height="18" x="3" y="3" rx="2" ry="2" />
            <circle cx="9" cy="9" r="2" />
            <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" />
          </svg>
          <input
            {...register("imageUrl")}
            placeholder="Image URL"
            className="bg-transparent border-none outline-none w-full text-white placeholder-white/60"
          />
        </div>
        {errors.imageUrl && (
          <p className="mt-2 ml-4 text-red-400 text-xs text-left">
            {errors.imageUrl.message}
          </p>
        )}

        <div className="flex items-start gap-2 bg-white/5 mt-4 p-6 py-3 rounded-2xl ring-2 ring-white/10 focus-within:ring-indigo-500/60 w-full min-h-32 overflow-hidden transition-all">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            className="mt-1 text-white/75"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
            <polyline points="14 2 14 8 20 8" />
          </svg>
          <textarea
            {...register("description")}
            placeholder="Post Description"
            className="bg-transparent border-none outline-none w-full h-full text-white resize-none placeholder-white/60"
          />
        </div>
        {errors.description && (
          <p className="mt-2 ml-4 text-red-400 text-xs text-left">
            {errors.description.message}
          </p>
        )}

        <button
          type="submit"
          disabled={isSubmitting}
          className="bg-indigo-600 hover:bg-indigo-500 disabled:opacity-50 mt-8 mb-10 rounded-full w-full h-12 font-semibold text-white transition-colors duration-300 cursor-pointer"
        >
          {isSubmitting ? "Saving Changes..." : "Update Post"}
        </button>
      </form>
    </section>
  );
};

export default EditPost;
