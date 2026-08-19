import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Calendar, Clock, ArrowLeft, BookOpen, Smartphone } from 'lucide-react';
import { blogPosts } from './BlogPage';
import { FadeInUp } from '../components/AnimatedReveal';

export const BlogPostPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const post = blogPosts.find((p) => p.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!post) {
    return (
      <section className="py-32 bg-white min-h-screen flex items-center justify-center text-center">
        <div className="max-w-md px-4">
          <h2 className="text-2xl font-black text-brand-deepIndigo mb-2">Article Not Found</h2>
          <p className="text-sm text-brand-mutedText font-semibold mb-6">The article you are looking for does not exist or has been removed.</p>
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl text-xs font-black uppercase tracking-wider text-white bg-[#17172B] hover:bg-brand-indigo transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Insights</span>
          </Link>
        </div>
      </section>
    );
  }

  // Find other posts to display in the "Recent Articles" sidebar list
  const recentPosts = blogPosts.filter((p) => p.id !== post.id).slice(0, 2);

  return (
    <article className="py-32 bg-[#F9FAFC] relative overflow-hidden text-left min-h-screen">
      {/* Background Graphic Accents */}
      <div className="absolute inset-0 opacity-[0.015] pointer-events-none bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] [background-size:24px_24px]" />
      
      {/* Dynamic inline styles for the rich-text blog typography */}
      <style>{`
        .blog-body-content p {
          font-size: 0.95rem;
          line-height: 1.75;
          margin-bottom: 1.5rem;
          color: #4B4F9F;
          font-weight: 500;
        }
        .blog-body-content p.lead {
          font-size: 1.1rem;
          line-height: 1.8;
          color: #17172B;
          font-weight: 700;
          margin-bottom: 2rem;
        }
        .blog-body-content h3 {
          font-size: 1.4rem;
          font-weight: 900;
          margin-top: 2.2rem;
          margin-bottom: 0.75rem;
          color: #17172B;
          letter-spacing: -0.025em;
        }
        .blog-body-content ul {
          list-style-type: none;
          padding-left: 0;
          margin-bottom: 1.5rem;
        }
        .blog-body-content ul li {
          font-size: 0.9rem;
          font-weight: 500;
          line-height: 1.6;
          margin-bottom: 0.5rem;
          color: #4B4F9F;
          display: flex;
          align-items: flex-start;
          gap: 0.5rem;
        }
        .blog-body-content ul li::before {
          content: "●";
          color: #a7195b;
          font-size: 0.75rem;
          margin-top: 0.2rem;
          flex-shrink: 0;
        }
        .blog-body-content table td {
          padding: 0.75rem;
          font-size: 0.85rem;
          font-weight: 600;
          color: #4B4F9F;
        }
        .blog-body-content table th {
          font-size: 0.85rem;
          font-weight: 800;
        }
      `}</style>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Back Link Breadcrumb */}
        <div className="mb-8">
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-wider text-brand-magenta hover:text-brand-indigo transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>All Insights</span>
          </Link>
        </div>

        {/* Article Meta Header */}
        <div className="max-w-4xl mb-12">
          <span className="text-[10px] font-black uppercase tracking-widest text-brand-magenta bg-brand-magenta/5 border border-brand-magenta/10 px-3 py-1 rounded-full mb-4 inline-block">
            {post.category}
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-brand-deepIndigo tracking-tight leading-tight mb-6">
            {post.title}
          </h1>

          <div className="flex flex-wrap items-center gap-6 text-xs font-bold text-brand-mutedText border-y border-brand-indigo/5 py-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-brand-indigo text-white flex items-center justify-center font-extrabold text-[10px] shadow-sm">
                HS
              </div>
              <span className="text-brand-deepIndigo font-black">{post.author}</span>
            </div>
            <span className="flex items-center gap-1.5"><Calendar className="w-4 h-4" />{post.date}</span>
            <span className="flex items-center gap-1.5"><Clock className="w-4 h-4" />{post.readTime}</span>
          </div>
        </div>

        {/* Feature Image Banner */}
        <div className="aspect-video max-h-[480px] w-full rounded-[2.5rem] overflow-hidden shadow-premium mb-12">
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Two Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Main Column: Body rich content */}
          <div className="lg:col-span-8 bg-white p-8 sm:p-10 rounded-[2.5rem] border border-brand-indigo/5 shadow-premium">
            <div 
              className="blog-body-content"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
          </div>

          {/* Sidebar Column: Ads and Recent Guides */}
          <div className="lg:col-span-4 space-y-8 lg:sticky lg:top-28">
            
            {/* Download Mobile App CTA Card */}
            <FadeInUp>
              <div className="p-8 rounded-[2.5rem] bg-gradient-to-br from-[#17172B] to-[#2E2E5D] text-white shadow-xl relative overflow-hidden text-left">
                <div className="absolute right-0 bottom-0 opacity-10 pointer-events-none translate-x-8 translate-y-8">
                  <Smartphone className="w-48 h-48" />
                </div>
                
                <span className="text-[9px] font-black uppercase tracking-widest text-brand-magenta bg-white/10 px-3 py-1 rounded-full mb-4 inline-block">
                  PREPARATION APP
                </span>
                
                <h4 className="text-xl font-black mb-3 leading-snug">
                  Learn Directly From Hardik Sir
                </h4>
                <p className="text-xs text-white/70 leading-relaxed mb-6 font-semibold">
                  Get structural teaching materials, chapter tests, GCERT textbooks summary notes, and daily live courses on the academy app.
                </p>

                <a
                  href="https://play.google.com/store/apps/details?id=com.nxphmn.xmkenj&hl=en_IN"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 py-3.5 px-5 rounded-2xl text-xs font-black uppercase tracking-wider text-white bg-brand-magenta hover:bg-brand-magenta/80 shadow-md transition-colors"
                >
                  <Smartphone className="w-4 h-4" />
                  <span>Download Play Store App</span>
                </a>
              </div>
            </FadeInUp>

            {/* Recent Guides List */}
            <FadeInUp delay={0.1}>
              <div className="p-6 rounded-[2.5rem] bg-white border border-brand-indigo/5 shadow-premium text-left">
                <h4 className="font-extrabold text-brand-deepIndigo text-sm mb-4 flex items-center gap-2 border-b border-brand-indigo/5 pb-3">
                  <BookOpen className="w-4.5 h-4.5 text-brand-magenta" />
                  <span>Recent Articles</span>
                </h4>
                
                <div className="space-y-4">
                  {recentPosts.map((rPost) => (
                    <Link
                      key={rPost.id}
                      to={`/blog/${rPost.id}`}
                      className="group flex gap-3 text-left border-b border-brand-indigo/5 last:border-0 pb-4 last:pb-0"
                    >
                      <div className="w-16 h-16 rounded-xl overflow-hidden shrink-0">
                        <img 
                          src={rPost.image} 
                          alt={rPost.title} 
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                        />
                      </div>
                      <div>
                        <h5 className="font-extrabold text-xs text-brand-deepIndigo group-hover:text-brand-indigo transition-colors line-clamp-2 leading-snug mb-1">
                          {rPost.title}
                        </h5>
                        <span className="text-[9px] font-bold text-brand-mutedText block">
                          {rPost.date}
                        </span>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </FadeInUp>

          </div>

        </div>

      </div>
    </article>
  );
};
