import React, { useState } from 'react';
import { Play, X, Film, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const categories = [
  'All',
  'Wedding Teasers',
  'Full Wedding Films',
  'Rice Ceremony & Birthday',
];

const youtubeVideos = [
  {
    id: 'fTtsW8Ragxs',
    title: 'Rupsa Weds Krishnayan',
    subtitle: 'Bengali Wedding Cinematic Teaser',
    category: 'Wedding Teasers',
    duration: '3:16',
    uploaded: '7 hours ago'
  },
  {
    id: 'PukkzRjg9bs',
    title: 'Payel Weds Pranoy',
    subtitle: 'Cinematic Teaser',
    category: 'Wedding Teasers',
    duration: '2:48',
    uploaded: '1 day ago'
  },
  {
    id: 'CH_4gCHZrKQ',
    title: 'Ananya Weds Arumay',
    subtitle: 'Wedding Cinematic Teaser',
    category: 'Wedding Teasers',
    duration: '2:53',
    uploaded: '8 days ago'
  },
  {
    id: 'V52Q0mnncCM',
    title: 'Riju Weds Riya',
    subtitle: 'Wedding Full Film',
    category: 'Full Wedding Films',
    duration: '1:15:09',
    uploaded: '2 days ago'
  },
  {
    id: 'TDrudLkqzgc',
    title: 'Aliva Weds Sourav',
    subtitle: 'Bengali Wedding Cinematic Teaser',
    category: 'Wedding Teasers',
    duration: '2:45',
    uploaded: '2 weeks ago'
  },
  {
    id: 'ch3gIVIhbx0',
    title: 'Adhyudh',
    subtitle: 'Rice Ceremony Cinematic Teaser',
    category: 'Rice Ceremony & Birthday',
    duration: '2:47',
    uploaded: '2 weeks ago'
  },
  {
    id: 'LsQOtYsx2_0',
    title: 'Namrata & Arijit',
    subtitle: 'Wedding Full Video',
    category: 'Full Wedding Films',
    duration: '33:40',
    uploaded: '2 weeks ago'
  },
  {
    id: 'ejan_AC2h80',
    title: 'Swastika & Subham',
    subtitle: 'Bengali Wedding Full Video',
    category: 'Full Wedding Films',
    duration: '1:21:48',
    uploaded: 'Golden Moments Photography Studio'
  },
  {
    id: 'UEMm6IX1rt0',
    title: "Rishan's 1st Birthday Celebration",
    subtitle: 'Birthday Highlights',
    category: 'Rice Ceremony & Birthday',
    duration: '4:02',
    uploaded: 'Golden Moments Photography Studio'
  }
];

export default function Cinema() {
  const [playingVideoId, setPlayingVideoId] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [showAll, setShowAll] = useState(false);

  const filteredVideos = selectedCategory === 'All'
    ? youtubeVideos
    : youtubeVideos.filter((v) => v.category === selectedCategory);

  const displayedVideos = showAll ? filteredVideos : filteredVideos.slice(0, 6);

  const handleVideoClick = (videoId) => {
    setPlayingVideoId((prev) => (prev === videoId ? null : videoId));
  };

  const renderVideoCard = (video) => {
    const isPlaying = playingVideoId === video.id;

    return (
      <motion.div 
        layout
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        transition={{ duration: 0.3 }}
        key={video.id} 
        className="group cursor-pointer text-left"
      >
        {/* Thumbnail or Inline Player Container */}
        <div 
          className="relative aspect-video bg-line overflow-hidden w-full mb-4 rounded-xl border border-line/80 shadow-md group-hover:border-accent/50 transition-colors"
          onClick={() => handleVideoClick(video.id)}
        >
          {isPlaying ? (
            <div className="w-full h-full relative">
              <iframe 
                src={`https://www.youtube.com/embed/${video.id}?autoplay=1`}
                title={video.title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                className="w-full h-full"
              />
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setPlayingVideoId(null);
                }}
                className="absolute top-2 right-2 bg-ink/90 text-paper p-1.5 rounded-full hover:bg-accent transition-colors z-20 shadow-lg"
                title="Close Video"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          ) : (
            <>
              <img 
                src={`https://img.youtube.com/vi/${video.id}/maxresdefault.jpg`} 
                alt={video.title}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.05]"
                onError={(e) => {
                  e.target.src = `https://img.youtube.com/vi/${video.id}/0.jpg`;
                }}
              />
              {/* Play Button Overlay */}
              <div className="absolute inset-0 bg-ink/30 opacity-60 group-hover:opacity-80 transition-opacity duration-300 flex items-center justify-center">
                <div className="p-4 bg-paper/90 border border-line text-ink transition-transform duration-300 group-hover:scale-110 rounded-full shadow-lg">
                  <Play className="h-5 w-5 fill-accent text-accent" />
                </div>
              </div>
              
              {/* Category Tag Badge */}
              <span className="absolute top-3 left-3 text-[10px] uppercase tracking-widest text-paper bg-accent/80 backdrop-blur-md px-2.5 py-1 rounded font-medium shadow-sm">
                {video.category}
              </span>

              {/* Duration Badge */}
              <span className="absolute bottom-3 right-3 text-[10px] uppercase tracking-widest text-paper bg-ink/80 px-2 py-1 font-mono rounded">
                {video.duration}
              </span>
            </>
          )}
        </div>

        {/* Title & Metadata */}
        <h3 
          className="font-serif text-xl font-light text-ink group-hover:text-accent transition-colors duration-300"
          onClick={() => handleVideoClick(video.id)}
        >
          {video.title}
        </h3>
        <p className="text-[10px] uppercase tracking-widest text-stone mt-1.5 flex items-center gap-2">
          <span>{video.subtitle}</span>
          {video.uploaded && <span>&middot; {video.uploaded}</span>}
        </p>
      </motion.div>
    );
  };

  return (
    <section 
      id="cinema" 
      className="py-20 md:py-28 scroll-mt-20 md:scroll-mt-24 bg-paper px-6 md:px-16 lg:px-20 w-full mx-auto border-t border-accent/15"
    >
      <div className="text-center mb-12 max-w-3xl mx-auto space-y-3">
        <span className="text-xs font-medium uppercase tracking-[0.35em] text-accent flex items-center justify-center gap-1.5">
          <Film className="w-3.5 h-3.5" /> Our Films
        </span>
        <h2 className="font-serif text-3xl md:text-5xl font-light text-ink">
          Cinematic <span className="italic text-gold-shimmer font-normal">Stories</span>
        </h2>
        <p className="font-sans text-stone text-xs uppercase tracking-widest font-light leading-relaxed">
          Cinematic love stories &amp; memorable moments captured in light and motion
        </p>
      </div>

      {/* Category Filter Tabs */}
      <div className="flex flex-wrap justify-center items-center gap-2.5 sm:gap-3 mb-12">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => {
              setSelectedCategory(cat);
              setShowAll(false);
              setInlineVideoId(null);
            }}
            className={`px-4 sm:px-6 py-2 rounded-full text-xs uppercase tracking-widest transition-all duration-300 font-medium ${
              selectedCategory === cat
                ? 'bg-accent text-paper shadow-md shadow-accent/25 border border-accent'
                : 'bg-paper/80 border border-line text-stone hover:border-accent/50 hover:text-accent'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Video Grid */}
      <motion.div layout className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
        <AnimatePresence>
          {displayedVideos.map((video) => renderVideoCard(video))}
        </AnimatePresence>
      </motion.div>

      {/* Load More & YouTube Button */}
      <div className="flex justify-center items-center gap-4 mt-12 flex-wrap">
        {filteredVideos.length > 6 && (
          <button 
            onClick={() => {
              if (showAll) {
                document.getElementById('cinema')?.scrollIntoView({ behavior: 'smooth' });
              }
              setShowAll(!showAll);
            }}
            className="px-8 py-3.5 rounded-full border border-accent/50 bg-accent/10 text-accent hover:bg-accent hover:text-paper text-xs uppercase tracking-widest font-semibold transition-all duration-300 focus:outline-none shadow-md hover:shadow-lg"
          >
            {showAll ? 'Show Less' : `Load More `}
          </button>
        )}

        <a
          href="https://www.youtube.com/@goldenmomentsphotography2025"
          target="_blank"
          rel="noopener noreferrer"
          className="px-8 py-3.5 rounded-full border border-[#FF0000] text-[#FF0000] hover:bg-[#FF0000] hover:text-white text-xs uppercase tracking-widest font-semibold transition-all duration-300 flex items-center gap-2 shadow-md"
        >
          <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg> Official YouTube Channel
        </a>
      </div>
    </section>
  );
}
