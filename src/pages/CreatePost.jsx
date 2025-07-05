import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const CreatePost = ({uimode}) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handlePostCreation = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    const username = localStorage.getItem("username");

    if (!username) {
      setError("User not authenticated. Please log in.");
      setLoading(false);
      return;
    }

    try {
      const response = await axios.post("http://localhost:5000/createpost", {
        title,
        content,
        username,
      });

      alert(response.data.message);
      navigate("/dashboard");
    } catch (err) {
      setError(err.response?.data?.message || "Failed to create post");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className={`p-6 rounded-lg shadow-lg w-96 ${uimode==0?"bg-white text-black":"bg-blue-200/10 text-white"}`}>
        <h2 className="text-2xl font-bold text-center">Create a Post</h2>
        {error && <p className="text-red-500 text-center mt-2">{error}</p>}
        <form className="mt-4" onSubmit={handlePostCreation}>
          <div className="mb-4">
            <label className="block font-semibold">Title</label>
            <input
              type="text"
              className={`w-full p-2 border ${uimode==0?"bg-black/5 border-black/10":"bg-blue-200/30 border-blue-200/20"}  rounded`}
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block font-semibold">Content</label>
            <textarea
              className={`w-full p-2 border ${uimode==0?"bg-black/5 border-black/10":"bg-blue-200/30 border-blue-200/20"} rounded h-32`}
              value={content}
              onChange={(e) => setContent(e.target.value)}
              required
            />
          </div>
          <button
            type="submit"
            className="w-full p-2 bg-blue-600 text-white rounded hover:bg-blue-700"
            disabled={loading}
          >
            {loading ? "Posting..." : "Create Post"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreatePost;
