"use client"

import { Play } from "lucide-react"
import { useNavigate } from 'react-router-dom'

import weddingImage from '../assets/wedding_management.png'
import planningImage from '../assets/planning.png';
import notepadImage from '../assets/notepad.png';

const Memories = () => {

  const navigate = useNavigate();

  const memoryCards = [
    {
      id: 1,
      title: "Wedding Memories",
      videoUrl: "https://www.youtube.com/watch?v=XsSEBVuF34E",
      thumbnail: weddingImage,
    },
    {
      id: 2,
      title: "Event Highlights",
      videoUrl: "https://www.youtube.com/watch?v=XsSEBVuF34E",
      thumbnail: planningImage,
    },
    {
      id: 3,
      title: "Special Moments",
      videoUrl: "https://www.youtube.com/watch?v=Za0ghsTnYWI",
      thumbnail: notepadImage,
    },
  ]

  const handlePlayVideo = (cardId) => {
    const video = memoryCards.find((card) => card.id === cardId);
    if (video) {
      window.open(video.videoUrl, '_blank');
    }
  };


  const handleShopNow = (cardId) => {
    console.log(`Shop Now clicked for card ${cardId}`)
    // Add your navigation logic here
    // navigate(`/shop/memories/${cardId}`)
  }

  return (
    <div className="w-full py-16 px-4 md:px-8" style={{ backgroundColor: "#8B4513" }}>
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight">
            Save, Share, Memories - Let Every Memory Shine Forever
          </h1>
          <p className="text-lg md:text-xl text-white opacity-90 max-w-4xl mx-auto">
            Timeless Moments - Endless Memories "Make Every Moment Memorable with Nyouta"
          </p>
        </div>

        {/* Memory Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {memoryCards.map((card) => (
            <div key={card.id} className="flex flex-col items-center">
              {/* Video Card */}
              <div
                onClick={() => handlePlayVideo(card.id)}
                className="w-full max-w-sm h-64 md:h-72 bg-white rounded-2xl shadow-lg cursor-pointer group transition-transform duration-200 hover:scale-105 flex items-center justify-center mb-6"
                style={{
                  backgroundImage: `url(${card.thumbnail})`,
                  backgroundSize: 'contain',
                  backgroundPosition: 'center',
                }}
              >

                {/* Play Button */}
                <div

                  className="w-16 h-16 md:w-20 md:h-20 bg-red-600 rounded-full flex items-center justify-center group-hover:bg-red-700 transition-colors duration-200 shadow-lg">
                  <Play className="w-8 h-8 md:w-10 md:h-10 text-white ml-1" fill="currentColor" />
                </div>
              </div>

              {/* Shop Now Button */}
              <button
                onClick={() => navigate('/books')}
                className="bg-pink-600 hover:bg-pink-700 text-white font-bold py-3 px-8 rounded-full text-lg transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                SHOP NOW
              </button>
            </div>
          ))}
        </div>

        {/* Description Text */}
        <div className="text-center">
          <p className="text-white text-base md:text-lg leading-relaxed max-w-5xl mx-auto">
            Every moment deserves to be remembered. With Nyouta's unique personalized gifts, stylish decor, and
            beautifully crafted keepsakes, we turn your memories into timeless treasures. Celebrate your love, joy, and
            milestones with products designed to preserve the essence of every special occasion. Let Nyouta help you
            make memories that will last a lifetime.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Memories
