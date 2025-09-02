const News = () => {
  const newsItems = [
    {
      date: "2025.01.15",
      title: "PRODUCE 101 JAPAN Season 4 Announcement",
      description: "The latest season of Japan's most popular idol survival show has been officially announced.",
      category: "ANNOUNCEMENT"
    },
    {
      date: "2025.01.10", 
      title: "ME:I Achieves Major Milestone",
      description: "The girl group from PRODUCE 101 JAPAN THE GIRLS continues to break records.",
      category: "SUCCESS"
    },
    {
      date: "2024.12.20",
      title: "International Expansion Plans",
      description: "PRODUCE 101 JAPAN announces plans for global audience participation.",
      category: "NEWS"
    },
    {
      date: "2024.12.15",
      title: "JO1 and INI Joint Performance",
      description: "Special collaboration between the two successful groups from previous seasons.",
      category: "PERFORMANCE"
    }
  ]

  return (
    <section id="news" className="py-20 bg-transparent">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 bg-white/90 backdrop-blur-sm rounded-3xl py-16">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Latest News
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {newsItems.map((item, index) => (
            <article key={index} className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden">
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm font-semibold text-blue-600 bg-blue-100 px-3 py-1 rounded-full">
                    {item.category}
                  </span>
                  <span className="text-sm text-gray-500">
                    {item.date}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-3 leading-tight">
                  {item.title}
                </h3>

                <p className="text-gray-700 leading-relaxed mb-4">
                  {item.description}
                </p>

                <button className="text-blue-600 font-semibold hover:text-blue-700 transition-colors duration-200 flex items-center">
                  Read More
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg transition-colors duration-200">
            VIEW MORE
          </button>
        </div>
      </div>
    </section>
  )
}

export default News