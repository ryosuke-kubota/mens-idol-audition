import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'

const Video = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })
  const [selectedVideo, setSelectedVideo] = useState(0)

  // YouTube video IDs - replace with actual video IDs
  const videos = [
    {
      id: 'dQw4w9WgXcQ', // Replace with actual video ID
      title: 'PRODUCE 101 JAPAN THE GIRLS',
      description: '2023年シーズン ハイライト'
    },
    {
      id: 'dQw4w9WgXcQ', // Replace with actual video ID
      title: 'JO1 デビュー特集',
      description: 'SEASON 1 優勝グループ'
    },
    {
      id: 'dQw4w9WgXcQ', // Replace with actual video ID
      title: 'INI パフォーマンス',
      description: 'SEASON 2 優勝グループ'
    }
  ]

  return (
    <section id="video" className="relative py-32 bg-transparent overflow-hidden" ref={ref}>
      <motion.div
        className="relative z-10 max-w-7xl mx-auto px-6"
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, ease: [0.43, 0.13, 0.23, 0.96] }}
      >
        {/* Section Title */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <span className="text-purple-600 font-bold text-sm tracking-widest uppercase mb-4 block">
            VIDEOS
          </span>
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-black text-gray-900 leading-tight mb-6">
            WATCH THE
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">
              JOURNEY
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            過去のシーズンのハイライトと感動の瞬間をご覧ください
          </p>
        </motion.div>

        {/* Main Video Container */}
        <motion.div
          className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-2xl"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          {/* YouTube Embed */}
          <div className="relative aspect-video rounded-2xl overflow-hidden bg-gray-900">
            <iframe
              className="absolute inset-0 w-full h-full"
              src={`https://www.youtube.com/embed/${videos[selectedVideo].id}?rel=0&modestbranding=1`}
              title={videos[selectedVideo].title}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>

          {/* Video Info */}
          <div className="mt-6 text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">
              {videos[selectedVideo].title}
            </h3>
            <p className="text-lg text-gray-600">
              {videos[selectedVideo].description}
            </p>
          </div>
        </motion.div>

        {/* Video Thumbnails */}
        <motion.div
          className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          {videos.map((video, index) => (
            <motion.button
              key={index}
              onClick={() => setSelectedVideo(index)}
              className={`relative group overflow-hidden rounded-2xl transition-all duration-300 ${
                selectedVideo === index 
                  ? 'ring-4 ring-purple-600 shadow-xl' 
                  : 'hover:shadow-lg'
              }`}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="bg-white/80 backdrop-blur-sm p-6">
                {/* Thumbnail */}
                <div className="relative aspect-video bg-gray-200 rounded-lg overflow-hidden mb-4">
                  <img 
                    src={`https://img.youtube.com/vi/${video.id}/maxresdefault.jpg`}
                    alt={video.title}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      // Fallback to medium quality if maxres doesn't exist
                      e.target.src = `https://img.youtube.com/vi/${video.id}/mqdefault.jpg`
                    }}
                  />
                  {/* Play Button Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center">
                      <svg className="w-6 h-6 text-gray-900 ml-1" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                      </svg>
                    </div>
                  </div>
                </div>
                
                {/* Video Info */}
                <h4 className="text-lg font-bold text-gray-900 mb-1">
                  {video.title}
                </h4>
                <p className="text-sm text-gray-600">
                  {video.description}
                </p>
              </div>

              {/* Selected Indicator */}
              {selectedVideo === index && (
                <motion.div
                  className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-600 to-pink-600"
                  layoutId="selectedVideo"
                />
              )}
            </motion.button>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <a
            href="https://www.youtube.com/@produce101japan"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 bg-red-600 hover:bg-red-700 text-white font-bold text-lg rounded-full transition-all duration-300 hover:scale-105 shadow-xl"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
            </svg>
            YouTubeチャンネルを見る
          </a>
        </motion.div>

        {/* Decorative Elements */}
        <motion.div
          className="absolute top-20 left-20 w-32 h-32 bg-purple-400 rounded-full blur-3xl opacity-20"
          animate={{
            x: [0, 30, 0],
            y: [0, -20, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-20 right-20 w-32 h-32 bg-pink-400 rounded-full blur-3xl opacity-20"
          animate={{
            x: [0, -30, 0],
            y: [0, 20, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </motion.div>
    </section>
  )
}

export default Video