import { use, useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";



const Skeleton = () => <div className="h-20 w-full bg-gray-300 animate-pulse" />;

const Card = ({ children }) => (
  <div className="border rounded-lg shadow p-4 bg-white">{children}</div>
);

const Dashboard = () => {
  const [data, setData] = useState([]);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [expandedPost, setExpandedPost] = useState(null);
  var k=0;

  useEffect(() => {
    const fetchAllBlogs = async() => {
      const username = localStorage.getItem("username"); // ✅ Get username from localStorage
      if (!username) {
      console.error("No username found in localStorage");
      return;
      }
      const response = await axios.post("http://localhost:5000/dashboard",{username});
      setData(response.data.allblogs);
      setUser(response.data.user);
      
    }

    fetchAllBlogs();
  }, []);

  useEffect(() => {
    console.log("Runs only once when the component mounts");
  }, []); // Empty dependency array means it runs only once
  
  

  const toggleExpand = (postId) => {
    setExpandedPost(expandedPost === postId ? null : postId);
  };
  
  async function likeupdate(flag,id)
  {
    if(flag=="comment")
    {
        const response = await axios.post(`http://localhost:5000/likeupdate/${id}`);
        setData((prevData) =>
          prevData.map((post) => ({
            ...post,
            comments: post.comments.map((comment) =>
              comment._id === id
                ? { ...comment, noOfLikes: comment.noOfLikes + 1 } // Update likes
                : comment
            ),
          }))
        );
        
        
          
    }
    else if(flag=="post")
    {
      const response = await axios.post(`http://localhost:5000/postlikeupdate/${id}`);
      setData((prevData) =>
        prevData.map((post) =>
          post._id === id
            ? { ...post, noOfLikes: post.noOfLikes + 1 } // Update post likes
            : post
        )
      );
      
    }
    else
    {
      console.log("hell");
    }

    
  }

  const AddNewComment = async (e, postId) => {
    e.preventDefault();
  
    const commentContent = e.target.commentcontent.value.trim();
    console.log(commentContent)
    if (!commentContent) return; // Prevent empty comments
  
    try {
      const response = await axios.post("http://localhost:5000/addcomment", {
        postId,
        userId: user._id,
        content: commentContent,
      });

      if(response) {

      }
  
      // Update comments in state
      setData((prevData) =>
        prevData.map((post) =>
          post._id === postId
            ? { ...post, comments: [...post.comments, response.data.newComment] }
            : post
        )
      );
  
      e.target.reset(); // Clear input field after posting
    } catch (error) {
      console.error("Error adding comment:", error);
    }
  };



const deletepost = async (postId) => {
    try {
        const response = await axios.delete(`http://localhost:5000/deleteblog/${postId}`);
        
        alert("Blog deleted successfully");

        // Optionally, update the UI by removing the deleted post from state
    } catch (error) {
        console.error("Error deleting post:", error);
        alert(error.response?.data?.message || "Failed to delete post");
    }
};




  
  function rendercom(com)
  {
    return(
      <div className="flex justify-between items-center h-fit w-fit m-2">
        <img src={com.commenter.profile} alt="" className="h-14 w-14 rounded-[50%]"/>
        <div className="h-fit w-100 relative mx-2">
          <h2 className="text-md">{com.commenter.name}</h2>
          <p className="text-sm">{com.content}</p>
          <div className="flex absolute bottom-0 right-0 items-center">
            <p className="text-sm m-1 p-2">{com.noOfLikes}</p>
            <button className="h-fit w-fit rounded-lg p-2"
            onClick={()=>likeupdate("comment",com._id)}>
                  <img src="/icons/likeblack.png" alt="" className="h-7"/>
            </button>
          </div>
        </div>
      </div>
      
    )
  }
  const gradientarr = ["linear-gradient(316deg, #74ebd5CC, #ACB6E5CC)","linear-gradient(316deg, #acb6e5CC, #e5a2b6CC)","linear-gradient(316deg, #74ebd5CC, #d5eb74CC)","linear-gradient(316deg, #74ebd5CC, #acb6e5CC, #b674e5CC)","linear-gradient(316deg, #ff9a9eCC, #fad0c4CC, #fbc2ebCC)","linear-gradient(316deg, #74ebd5CC, #acb6e5CC, #e5a2b6CC)","linear-gradient(316deg, #ff9a9eCC, #fad0c4CC, #fbc2ebCC)"]
  function randomer() {
    // return Math.floor(Math.random() * (gradientarr.length));
    // setk((prev)=>prev+1);
    if(k>6)
    k=0;
    
    return k++;
  }
  // const red= "linear-gradient(to right, #ff7e5f, #feb47b)"
  const navigate = useNavigate();
  return (
    <div className="space-y-6 h-fit w-full mt-1">
      {data && data.map((item) => (
        <div key={item._id} className=" flex flex-col w-full justify-center p-4 rounded-2xl" style={{ background: gradientarr[randomer()] }}
        
        >
          <h2 className={`text-3xl font-bold my-3 mx-5 text-black ${expandedPost==item._id?"":"text-center"}`}>{item.title}</h2>

          {expandedPost===item._id?(
            <div className="flex relative ">
              <div className="bg-white/30 rounded-2xl mx-3 w-2/3">
                <p className=" text-lg mt-5 w-full h-full p-3  place-self-center ">{item.content}</p>

                <div className="flex place-self-end justify-center items-center m-3 w-full absolute bottom-0">
                  
                  <button className=" p-1.5 rounded-lg"
                  onClick={()=>likeupdate("post",item._id)}
                  ><img src="/icons/likeblack.png" alt="" className="h-7"/></button>
                  <p className="text-lg">{item.noOfLikes}</p>

                  <button onClick={()=>deletepost(item._id)} className="mx-6">
                  <img src="/icons/deletefilled.png" alt="" className="h-6"/></button>

                  {/* <p className="text-black/60 place-self-end">Created At: {new Date(item.createdAt).toLocaleString()}</p>
                  <p className="text-black/60 place-self-end">Updated At: {new Date(item.updatedAt).toLocaleString()}</p> */}
                </div>

              </div>
              
              <div className="mt-4 text-sm ">

                
              
              </div>


            <div className="mt-4 bg-white/20 rounded-2xl p-3">
              <h3 className="font-semibold text-md">Comments: {item.noOfComments}</h3>
              <ul className="list-disc list-inside ">
                {item.comments.map((comment) => (
                  <li key={comment._id} className="list-none">{rendercom(comment)}</li>
                ))}
                <form action="" onSubmit={(e)=>AddNewComment(e,item._id)}>
                  <div className="flex">
                    <img src={user.profile} alt="" className="h-14 w-14 rounded-[50%] m-2" />
                    <div className=" flex flex-col relative w-100 justify-center">
                      <h2 className="text-md">{user.name}</h2>
                      <input type="text" className="bg-black/20 m-1 w-60" name="commentcontent"/>
                      <button className="absolute  right-0 bg-black text-white p-2 rounded-lg" type="submit">Post</button>
                    </div>
                  </div>
                </form>

              </ul>

            </div>

            
          </div>
          
          ):(
            <p className="text-gray-600 text-sm text-center" onClick={() => toggleExpand(item._id)}>Click to expand</p>
          )} 
        
        </div>
      ))}

      

      
    </div>

    
  );
};

export default Dashboard;
