import React from "react";


// export const testimonials = [
//   {
//       name: "Sachin",
//       role: "student",
//       text: "Good support and guidance. Truly appreciated the efforts and dedication.",
//   },
//   {
//       name: "Hussain",
//       role: "student",
//       text: "Mr. Fawas explained crypto basics and strategies so clearly. Helped me understand market news, valuations, and investments with ease.",
//   },
//   {
//       name: "Teja",
//       role: "student",
//       text: "Delta Trading Team’s course was exceptional. Clear teaching, practical strategies, and strong support boosted my trading confidence. Highly recommended!",
//   },


// ];

const testimonials = [
  {
    id: 1,
    avatar: "/our/image.png",
    name: "Sachin",
    title: "student",
    review:
      "Good support and guidance. Truly appreciated the efforts and dedication.",
  },
  {
    id: 2,
    avatar: "/our/image.png",
    name: "Hussain",
    title: "student",
    review: "Mr. Fawas explained crypto basics and strategies so clearly. Helped me understand market news, valuations, and investments with ease.",
  },
  {
    id: 3,
    avatar: "/our/image.png",
    name: "Teja",
    title: "student",
    review:
      "Delta Trading Team’s course was exceptional. Clear teaching, practical strategies, and strong support boosted my trading confidence. Highly recommended!",
  },
  {
    id: 4,
    avatar: "/our/image.png",
    name: "Sachin",
    title: "student",
    review:
      "Good support and guidance. Truly appreciated the efforts and dedication.",
  },
  {
    id: 5,
    avatar: "/our/image.png",
    name: "Hussain",
    title: "student",
    review: "Mr. Fawas explained crypto basics and strategies so clearly. Helped me understand market news, valuations, and investments with ease.",
  },
  {
    id: 6,
    avatar: "/our/image.png",
    name: "Teja",
    title: "student",
    review: "Delta Trading Team’s course was exceptional. Clear teaching, practical strategies, and strong support boosted my trading confidence. Highly recommended!",
  },
 
];

const Testimonials = () => {
  return (
    <section className="relative pt-14 md:pt-16 lg:pt-[88px] xl:pt-[100px] pb-14 md:pb-16 lg:pb-[88px] xl:pb-[100px] dark:bg-background-6 pb-24 md:pb-36 lg:pb-44 xl:pb-[200px]">
      <div className="main-container flex flex-col gap-[70px] max-[426px]:gap-10">
        {/* Header */}
        <div className="flex flex-col items-center text-center">
          <span data-ns-animate data-delay="0.1" className="badge badge-yellow mb-5">
            Customer Success
          </span>
          <h2
            data-ns-animate
            data-delay="0.2"
            className="max-w-[750px] mx-auto mb-4 max-[426px]:mb-3"
          >
           What Our Students Say
          </h2>
          <p
            data-ns-animate
            data-delay="0.3"
            className="max-w-[490px] max-[426px]:text-tagline-2 max-[426px]:max-w-[320px]"
          >
           Join thousands of successful students who have transformed their careers with our cutting-edge crypto education.
          </p>
        </div>

        {/* Swiper */}
        <div data-ns-animate data-delay="0.4" className="relative">
          <div className="swiper reviews-swiper">
            <div className="swiper-wrapper">
              {testimonials.map((t) => (
                <div key={t.id} className="swiper-slide">
                  <div className="bg-background-2 dark:bg-[#0D0B07] rounded-[20px] relative overflow-hidden p-8 flex flex-col gap-y-8 z-0 mx-1 sm:mx-0">
                    {/* Gradient Overlay */}
                    <div className="absolute max-md:w-[350px] max-md:h-[300px] -left-[180px] -top-[180px] md:-left-[190px] md:-top-[190px] lg:-left-[150px] lg:-top-[150px] xl:-left-[220px] xl:-top-[220px] w-full h-full -z-10 opacity-0 transition-opacity duration-300 gradient-overlay  select-none pointer-events-none">
                      <img
                        src="images/gradient/gradient-9.png"
                        alt="Decorative gradient background overlay"
                        className="-rotate-[90deg]"
                      />
                    </div>

                    {/* Avatar */}
                    <figure className="inline-block size-14 rounded-full bg-linear-[156deg,_#FFF_32.92%,_#83E7EE_91%] overflow-hidden relative">
                      <img src={t.avatar} alt={t.name} className="max-w-full" />
                    </figure>

                    {/* Review */}
                    <p className="text-secondary/60 dark:text-accent/60 review-text">
                      "{t.review}"
                    </p>

                    {/* Author */}
                    <div>
                      <p className="text-secondary dark:text-accent font-medium text-lg leading-[1.5] review-name">
                        {t.name}
                      </p>
                      <p className="text-secondary/60 dark:text-accent/60 text-tagline-2 review-title">
                        {t.title}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Button */}
        <div data-ns-animate data-delay="0.5" className="text-center">
          <a
            href="testimonial-page-01.html"
            className="btn btn-md btn-secondary dark:btn-transparent hover:btn-white w-full sm:w-auto"
          >
            <span>Get Started</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
