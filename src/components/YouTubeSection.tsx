import React from 'react';
import { Youtube, Play, ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';
import { FadeInUp, SplitTextReveal, StaggerContainer } from './AnimatedReveal';

export const YouTubeSection: React.FC = () => {
  const channelHandles = [
    { name: '@TheTeachersAcademyOfficial', url: 'https://www.youtube.com/@TheTeachersAcademyOfficial' }
  ];

  const videos = [
    {
      title: 'TET-1 Primary School Complete Exam Preparation',
      topic: 'TET-1 Class',
      duration: 'Watch Playlist',
      url: 'https://www.youtube.com/watch?v=iw0VOA8FiCU&list=PLZkFdarCflx8'
    },
    {
      title: 'TET-2 Upper Primary Complete Syllabus Strategy',
      topic: 'TET-2 Class',
      duration: 'Watch Playlist',
      url: 'https://www.youtube.com/watch?v=3s0PkJ-XxuU&list=PLOvX14j--yvs'
    },
    {
      title: 'TAT Secondary Gujarati Mains Masterclass Class',
      topic: 'TAT Class',
      duration: 'Watch Playlist',
      url: 'https://www.youtube.com/watch?v=hhXDm7xf30Y&list=PLPCSrW4L6b0vcKqI0_OTJSJaf6a48qBBt'
    }
  ];

  return (
    <section className="py-24 bg-[#0E0E1F] text-white relative overflow-hidden">
      {/* Background blobs for depth */}
      <div className="absolute right-0 bottom-0 w-96 h-96 bg-brand-magenta/10 rounded-full blur-3xl pointer-events-none -mr-40" />
      <div className="absolute left-0 top-0 w-80 h-80 bg-brand-indigo/10 rounded-full blur-3xl pointer-events-none -ml-40" />

      {/* Grid background */}
      <div className="absolute inset-0 opacity-[0.015] pointer-events-none bg-[radial-gradient(white_1px,transparent_1px)] [background-size:20px_20px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <FadeInUp delay={0.1}>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-500/10 border border-red-500/20 text-red-500 text-xs font-bold uppercase tracking-wider mb-4 animate-pulse">
              <Youtube className="w-3.5 h-3.5 fill-current" />
              <span>FREE YOUTUBE CLASSES</span>
            </div>
          </FadeInUp>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            <SplitTextReveal text="Learn With Us on YouTube" delay={0.2} />
          </h2>
          <FadeInUp delay={0.6}>
            <p className="text-sm text-white/70 mt-4 font-semibold">
              Free lessons, exam updates, strategies and valuable preparation content.
            </p>
          </FadeInUp>
          <FadeInUp delay={0.7}>
            <div className="h-1 w-12 bg-red-500 mx-auto mt-4 rounded-full" />
          </FadeInUp>
        </div>

        {/* Video Cards Grid with Stagger */}
        <StaggerContainer staggerInterval={0.1} className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {videos.map((video, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, y: 25, scale: 0.95 },
                visible: {
                  opacity: 1,
                  y: 0,
                  scale: 1,
                  transition: { type: 'spring', stiffness: 90, damping: 15 }
                }
              }}
              whileHover={{
                y: -6,
                scale: 1.01,
                boxShadow: '0 25px 40px -15px rgba(0, 0, 0, 0.3)'
              }}
              onClick={() => window.open(video.url, '_blank')}
              className="group bg-white/5 border border-white/10 rounded-[2rem] overflow-hidden hover:bg-white/10 hover:border-white/20 transition-all duration-300 cursor-pointer"
            >
              {/* Labeled Video Thumbnail Frame */}
              <div className="relative aspect-video bg-gradient-to-br from-brand-indigo/30 to-brand-magenta/30 flex items-center justify-center border-b border-white/5 overflow-hidden">
                
                {/* Simulated Play Button */}
                <motion.div
                  whileHover={{ scale: 1.15 }}
                  className="w-12 h-12 rounded-full bg-red-500 text-white flex items-center justify-center shadow-lg transition-transform duration-300 z-10 relative"
                >
                  <Play className="w-5 h-5 fill-current ml-0.5" />
                  <div className="absolute inset-0 rounded-full border border-red-500 animate-ping opacity-60 pointer-events-none" />
                </motion.div>
                
                {/* Duration Badge */}
                <span className="absolute bottom-2.5 right-2.5 text-[9px] font-bold bg-[#17172B]/80 px-2 py-0.5 rounded text-white">
                  {video.duration}
                </span>

                <span className="absolute top-2.5 left-2.5 text-[8px] font-extrabold bg-brand-magenta text-white px-2 py-0.5 rounded-full uppercase tracking-wider flex items-center gap-1.5 shadow-sm">
                  <span className="w-1.5 h-1.5 rounded-full bg-red-400 animate-pulse" />
                  {video.topic}
                </span>
              </div>

              {/* Title Content */}
              <div className="p-6 text-left">
                <h3 className="font-bold text-white text-base leading-snug min-h-[44px] line-clamp-2 mb-2 group-hover:text-brand-magenta transition-colors">
                  {video.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </StaggerContainer>

        {/* Channels Action Card */}
        <FadeInUp delay={0.6}>
          <div className="max-w-xl mx-auto bg-white/5 border border-white/10 p-6 rounded-[2rem]">
            <h3 className="font-extrabold text-sm text-white/95 uppercase tracking-wider mb-4">
              Official Channels & Handles
            </h3>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              {channelHandles.map((handle, idx) => (
                <motion.a
                  key={idx}
                  href={handle.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.02, backgroundColor: 'rgba(239, 68, 68, 0.15)' }}
                  className="flex items-center justify-between sm:justify-center gap-3 px-5 py-3 rounded-xl bg-white/5 border border-white/10 text-white font-bold text-sm transition-all duration-300"
                >
                  <span>{handle.name}</span>
                  <ExternalLink className="w-4 h-4 text-white/50" />
                </motion.a>
              ))}
            </div>
          </div>
        </FadeInUp>

      </div>
    </section>
  );
};
