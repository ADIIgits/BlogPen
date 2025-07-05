import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const HomePage = ({uimode}) => {
  const navigate = useNavigate();

  const sliderImages = [
    "/images/wallp4.jpg",
    "/images/wallp2.jpg",
    "/images/wallp3.jpg",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  var k=0;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === sliderImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000); // Auto-slide every 3 seconds
    
    return () => clearInterval(interval);
    
  }, []);

  const cards = [
    { title: "Express Yourself", text: "Share your thoughts with a vast audience." },
    { title: "Engaging Community", text: "Join discussions and interact with like-minded people." },
    { title: "Seamless Writing", text: "A clean, distraction-free interface to help you focus." },
    { title: "Grow Your Reach", text: "SEO-friendly platform helps your blogs get discovered." },
  ];
  
  const gradientarr = ["linear-gradient(316deg, #74ebd5CC, #ACB6E5CC)","linear-gradient(316deg, #acb6e5CC, #e5a2b6CC)","linear-gradient(316deg, #74ebd5CC, #d5eb74CC)","linear-gradient(316deg, #74ebd5CC, #b674e5CC)","linear-gradient(316deg, #ff9a9eCC, #fad0c4CC, #fbc2ebCC)","linear-gradient(316deg, #74ebd5CC, #acb6e5CC, #e5a2b6CC)","linear-gradient(316deg, #ff9a9eCC, #fad0c4CC, #fbc2ebCC)"]
  function randomer() {
    return Math.floor(Math.random() * (gradientarr.length));
  }
  return (
    <div className="h-full">
      {/* Banner with Sliding Images */}
      <div className="relative z-0 w-full mx-auto mt-1 h-84 overflow-hidden rounded-lg shadow-lg">
        <div className="buttons absolute top-3 right-20 z-5">
          <button className={`h-fit w-25 p-1 place-self-end m-1 rounded-md ${uimode==0?"bg-white/90 text-black":"bg-black/90 text-white/90"}`} onClick={() => navigate("/login")}>Login</button>
          <button className={`h-fit w-25 p-1 place-self-end m-1 rounded-md ${uimode==0?"bg-white/90 text-black":"bg-black/90 text-white/90"}`} onClick={() => navigate("/signup")}>Signup</button>
        </div>
        <div
          className="w-full h-full flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          
          {sliderImages.map((img, index) => (
            <img key={index} src={img} alt={`Slide ${index + 1}`} className="w-full h-full object-cover flex-shrink-0" />
          ))}
        </div>
      </div>

      
      {/* Grid Section */}
      <div className="mx-auto mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-2 place-items-center">
        {cards.map((card, index) => (
          <div key={index} className={`h-50 w-full p-6 rounded-lg shadow-lg hover:shadow-2xl transition duration-300 contrast-150 ${uimode==1?"text-white/80 bg-blue-300/30":"text-black/80 bg-[#3CA6A6]/30"}`}>
            <h3 className="text-xl font-bold">{card.title}</h3>
            <p className="mt-2">{card.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;