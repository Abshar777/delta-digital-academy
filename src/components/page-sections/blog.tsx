import React from "react";

const blogPosts = [
  {
    id: 1,
    image: "images/blogs/blog-01.png",
    alt: "Illustration representing electronic prescription in finance sector",
    category: "Finance",
    author: "Kristin Wat",
    date: "2025-05-20",
    dateLabel: "May 20, 2025",
    title: "An electronic prescription tailored for the finance sector",
    description:
      "An electronic prescription tailored for the finance sector refers to a structured, digital solution that streamlines the process of issuing and managing prescriptions in the financial sector.",
    href: "blog-details-page.html",
  },
  {
    id: 2,
    image: "images/blogs/blog-02.png",
    alt: "A hand holding a bitcoin, representing online banking and rewards",
    category: "Crypto",
    author: "Kristin Watson",
    date: "2025-03-31",
    dateLabel: "March 31, 2025",
    title: "Take control of your online banking and earn rewards.",
    description:
      "Turpis tortor nunc sed amet et faucibus vitae morbi congue sed id mauris.",
    href: "blog-details-page.html",
  },
  {
    id: 3,
    image: "images/blogs/blog-03.png",
    alt: "Person analyzing financial data on multiple monitors, representing banking operations",
    category: "Banking",
    author: "Bessie Cooper",
    date: "2025-04-28",
    dateLabel: "April 28, 2025",
    title: "We've mastered the craft of efficient operations.",
    description:
      "Turpis tortor nunc sed amet et faucibus vitae morbi congue sed id mauris.",
    href: "blog-details-page.html",
  },
];

export const Blog = () => (
  <section
    className="sm:pt-28 pt-20 sm:pb-28 pb-20 md:pt-32 md:pb-32 lg:pt-[128px] lg:pb-[128px] xl:pt-[200px] xl:pb-[200px] bg-background-3 dark:bg-background-5"
    aria-label="Blog posts and insights"
  >
    <div className="main-container">
      <div className="text-center mb-14 md:mb-[70px]">
        <span
          data-ns-animate=""
          data-delay="0.3"
          className="badge badge-green mb-3.5 md:mb-5"
        >
          Blog
        </span>
        <h2 data-ns-animate="" data-delay="0.4" className="mb-3">
          Our recent{" "}
          <span className="text-primary-500 inline-block">
            news &amp; insights
          </span>
        </h2>
        <p
          data-ns-animate=""
          data-delay="0.5"
          className="max-w-[738px] mx-auto"
        >
          Our recent news and insights highlight the latest developments,
          achievements, and thought leadership shaping our journey forward.
          From product innovations and strategic partnerships to industry
          trends
        </p>
      </div>

      {/* Blog Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-7 md:gap-10">
        {blogPosts.map((post, index) => (
          <article key={post.id} data-ns-animate="" data-delay={0.6 + index * 0.1}>
            <div className="bg-background-1 dark:bg-background-6 rounded-[20px] overflow-hidden relative md:min-h-[552px] scale-100 hover:scale-[102%] transition-transform duration-500">
              <figure className="max-w-full xl:max-w-[409px] overflow-hidden">
                <img
                  src={post.image}
                  alt={post.alt}
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
              </figure>
              <div className="p-6 space-y-6">
                <div className="flex items-center gap-2">
                  <span className="badge badge-green mr-1">{post.category}</span>
                  <span
                    rel="author"
                    className="text-tagline-3 font-normal text-secondary/60 dark:text-accent/60"
                  >
                    {post.author}
                  </span>
                  <span className="w-[5px] h-[6px] bg-[#ECE8FF] rounded-full"></span>
                  <time
                    dateTime={post.date}
                    className="text-tagline-3 font-normal text-secondary/60 dark:text-accent/60"
                  >
                    {post.dateLabel}
                  </time>
                </div>
                <div>
                  <h3 className="font-normal sm:text-heading-5 text-heading-6 mb-2 line-clamp-2">
                    <a href={post.href} aria-label={`Read more about ${post.title}`}>
                      {post.title}
                    </a>
                  </h3>
                  <p className="text-tagline-1 font-normal text-secondary/60 dark:text-accent/60 line-clamp-2">
                    {post.description}
                  </p>
                </div>
                <div className="flex justify-start md:block">
                  <a
                    href={post.href}
                    className="btn btn-md btn-white hover:btn-secondary dark:btn-transparent dark:hover:btn-accent dark:hover:text-secondary w-full sm:w-auto"
                    aria-label={`Read full article about ${post.title}`}
                  >
                    <span>Read more</span>
                  </a>
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>

      {/* Explore All Button */}
      <div
        data-ns-animate=""
        data-delay="0.9"
        className="flex justify-center mt-10 md:mt-14"
      >
        <a
          href="blog-page-01.html"
          className="btn btn-white btn-lg md:btn-xl hover:btn-primary dark:btn-transparent w-full md:w-auto mx-auto md:mx-0"
          aria-label="View all blog posts"
        >
          <span>Explore all</span>
        </a>
      </div>
    </div>
  </section>
);
