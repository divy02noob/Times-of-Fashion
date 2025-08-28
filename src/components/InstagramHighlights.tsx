


/*import React from "react";
import { Heart, MessageCircle, Share2 } from "lucide-react";

const instagramPosts = [
  {
    image: "https://images.pexels.com/photos/1821095/pexels-photo-1821095.jpeg",
    caption: "Street Style #OOTD",
    description: "Bold and effortless — today’s street style moment captured in the heart of Milan.",
    likes:  324,
  },
  {
    image: "https://images.unsplash.com/photo-1573563927684-e2ec81db2740?w=600&auto=format&fit=crop&q=60&fm=webp",
    caption: "Runway Trends",
    description: "The latest silhouettes walking the runway this season. Pure elegance.",
    likes:  211,
  },
  {
    image: "https://images.unsplash.com/photo-1662289032144-3ed681fdd260?w=600&auto=format&fit=crop&q=60&fm=webp",
    caption: "Beauty Close-Up",
    description: "Glow up your glam with this dewy beauty editorial inspired by soft tones.",
    likes: 412,
  },
  {
    image: "https://plus.unsplash.com/premium_photo-1737370658985-cdd72f1c244d?w=600&auto=format&fit=crop&q=60&fm=webp",
    caption: "Accessories",
    description: "Statement pieces that define every outfit — from bold to minimal.",
    likes: 153,
  },
];

const InstagramHighlights = () => (
  <section className="py-16 bg-white">
    <div className="max-w-7xl mx-auto px-4 text-center mb-12">
      <h2 className="text-4xl font-playfair font-bold mb-4">
        From Our <span className="text-rose-gold">Instagram</span>
      </h2>
      <p className="text-lg text-muted-foreground font-inter max-w-2xl mx-auto">
        A curated glimpse from our fashion feed
      </p>
    </div>

    <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-6 px-4 max-w-7xl mx-auto">
      {instagramPosts.map((post, idx) => (
        <div
          key={idx}
          className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-md transition-transform duration-300 hover:shadow-xl hover:scale-105"
>

          {/* Image *
          <div className="relative h-60 overflow-hidden">
            <img
              src={post.image}
              alt={post.caption}
              className="w-full h-full object-cover transform transition-transform duration-300 hover:scale-105"
            />
            {/* Optional caption overlay *
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent px-3 py-2 text-white text-sm font-inter opacity-0 group-hover:opacity-100 transition-opacity">
              {post.caption}
            </div>
          </div>

          {/* Icons *
          <div className="flex items-center space-x-4 px-4 py-2 text-gray-700">
            <Heart className="w-5 h-5 hover:text-rose-500 cursor-pointer transition-colors" />
            <MessageCircle className="w-5 h-5 hover:text-blue-500 cursor-pointer transition-colors" />
            <Share2 className="w-5 h-5 hover:text-green-500 cursor-pointer transition-colors" />
          </div>

          {/* Likes *
          <div className="px-4 text-sm font-medium text-gray-600">
            ❤️{post.likes.toLocaleString()} likes
          </div>

          {/* Description *
          <div className="px-4 pb-4 pt-1 text-sm text-gray-700 font-inter">
            {post.description}
          </div>
        </div>
      ))}
    </div>
     {/* Follow Button *
   <div className="text-center mt-12">
     
     <button className="text-white font-semibold font-inter px-8 py-3 rounded-full bg-gradient-to-r from-green-400 via-blue-500 to-teal-400 hover:from-teal-400 hover:via-blue-600 hover:to-green-500 transition-all duration-300 shadow-lg hover:shadow-xl">

        FollowUs @thetimesoffashion
      </button>
    </div>
  </section>
);

export default InstagramHighlights;
*/


import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { Heart, MessageCircle, Share2 } from "lucide-react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const instagramPosts = [
  {
    image: "https://images.pexels.com/photos/1821095/pexels-photo-1821095.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    description: "Bold and effortless — today’s street style moment captured in the heart of Milan",
    likes: 324,
  },
  {
    image: "https://images.unsplash.com/photo-1573563927684-e2ec81db2740?w=600&auto=format&fit=crop&q=60&fm=webp",
    description: "The latest silhouettes walking the runway this season. Pure elegance.",
    likes: 211,
  },
  {
    image: "https://images.unsplash.com/photo-1662289032144-3ed681fdd260?w=600&auto=format&fit=crop&q=60&fm=webp",
    description: "Glow up your glam with this dewy beauty editorial inspired by soft tones.",
    likes: 412,
  },
  {
    image: "https://plus.unsplash.com/premium_photo-1737370658985-cdd72f1c244d?w=600&auto=format&fit=crop&q=60&fm=webp",
    description: "Statement pieces that define every outfit — from bold to minimal.",
    likes: 153,
  },
  {
    image: "https://media.istockphoto.com/id/2173912005/photo/the-fashion-model-turns-away-from-photographers-to-look-at-the-camera-behind-her.jpg?s=612x612&w=0&k=20&c=zttZqS9OUXppMVO6Nf0D05pfkLVX6mus0ZITpgdcNQ4=",
    description: "Star-studded looks on the red carpet.",
    likes: 213,
  },
  {
    image: "https://media.istockphoto.com/id/559536481/photo/smiling-celebrity-at-event-with-photographing-paparazzi-in-background.jpg?s=612x612&w=0&k=20&c=QorFiejtwu8UX0uMnDYaF9M97t3jvhIeuStDwRespA8=",
    description: "Iconic looks that blend luxury and personality — straight from the red carpet to real life.",
    likes: 298,
  },
  {
    image: "https://images.unsplash.com/photo-1721206624412-cfa399668d46?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjN8fGZhc2hpb24lMjB0cmVuZHN8ZW58MHx8MHx8fDA%3D",
    description: "Effortlessly chic with coastal flair — a modern silhouette set against timeless seaside tones.",
    likes: 298,
  },
  {
    image: "https://media.istockphoto.com/id/2190706437/photo/young-businesswoman-walking-confidently-across-a-pedestrian-crossing-holding-a-coffee-and.jpg?s=612x612&w=0&k=20&c=WDqqYZ5a2Gwe1XInB9-1NOcYlJjtfnYKcMhpLdh8W4Y=",
    description: "Bold, expressive fashion born on the streets — where individuality meets everyday cool.",
    likes: 298,
  },
];

const InstagramCarousel = () => {
  return (
    <section className="py-20 bg-white max-w-7xl mx-auto px-4">
      <h2 className="text-3xl font-bold text-center mb-3">
        From Our <span className="text-rose-gold">Instagram</span>
      </h2>
      <p className="text-gray-500 text-center mb-10 max-w-xl mx-auto">
        From the runway to real life — a curated look at the textures and timeless moments shaping today’s style.
      </p>

      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={24}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{
          delay: 1000,
          disableOnInteraction: false,
        }}
        loop={true}
        breakpoints={{
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 4 },
        }}
      >
        {instagramPosts.map((post, index) => (
          <SwiperSlide key={index} className="h-full">
            <div className="flex flex-col justify-between h-full bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100 group relative overflow-hidden hover:-translate-y-1">
              {/* Image */}
              {post.image && (
                <div className="h-60 overflow-hidden rounded-t-2xl">
                  <img
                    src={post.image}
                    alt="Post"
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
              )}

              {/* Content */}
              <div className="p-5 relative z-10 bg-white flex flex-col justify-between flex-grow min-h-[160px]">
                {/* Icons */}
                <div className="flex gap-4 mb-2 text-gray-500">
                  <Heart className="w-5 h-5 hover:text-rose-500 transition-transform duration-300 hover:scale-110 cursor-pointer" />
                  <MessageCircle className="w-5 h-5 hover:text-blue-500 transition-transform duration-300 hover:scale-110 cursor-pointer" />
                  <Share2 className="w-5 h-5 hover:text-green-500 transition-transform duration-300 hover:scale-110 cursor-pointer" />
                </div>

                {/* Likes */}
                <div className="text-sm font-medium text-gray-700 mb-1">
                  ❤️ {post.likes.toLocaleString()} likes
                </div>

                {/* Description */}
                <p className="text-sm text-gray-600">{post.description}</p>
              </div>

              {/* Decorative Gradient Border */}
              <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-[95%] h-1 bg-gradient-to-r from-pink-400 via-red-400 to-purple-500 rounded-full blur-[1px] opacity-80" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Follow Button */}
      <div className="text-center mt-14">
        <button className="text-white font-semibold font-inter px-8 py-3 rounded-full bg-gradient-to-r from-green-400 via-blue-500 to-teal-400 hover:from-teal-400 hover:via-blue-600 hover:to-green-500 transition-all duration-300 shadow-lg hover:shadow-xl">
          Follow Us @thetimesoffashion
        </button>
      </div>
    </section>
  );
};

export default InstagramCarousel;

