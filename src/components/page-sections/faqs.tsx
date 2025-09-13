type FaqItem = {
    question: string
    answer: string
  }
  
  const faqs: FaqItem[] = [

    {
      question: "What kinds of courses does Delta Blockchain Academy offer?",
      answer:
        "We offer beginner to intermediate courses in crypto, blockchain, Web3 & DeFi. Beginner-level (Crypto Genesis) is for newcomers; intermediate-level (Crypto Mastery) includes more advanced topics like yield farming, project analysis, etc.",
    },
    {
      question: "How long are the courses?",
      answer:
        "Courses range in hours: for example, Crypto Genesis ~10 hours across 24 lessons, Crypto Mastery ~50 hours across 32 lessons.",
    },
    {
      question: "What is the cost of the courses?",
      answer:
        "Pricing is given in AED. For instance, Crypto Genesis ~2000 AED (with discount), Crypto Mastery ~5000 AED (with discount).",
    },
    {
      question: "Do you provide certification?",
      answer:
        "Yes – there is a blockchain certification that is stored on-chain to verify your credentials.",
    },
    {
      question: "What is the difference between beginner and intermediate level?",
      answer:
        "Beginner level focuses on fundamentals: blockchain basics, how cryptocurrencies work, wallets, basic chart patterns. Intermediate adds technical and project analysis, yield farming, market making, etc.",
    },
    {
      question: "How often is course content updated?",
      answer:
        "Content is advertised as “real-time updates” or evolving with the market. For specifics (how often, for which modules), you may contact support.",
    },

    {
      question: "How do I enroll and what payment methods are accepted?",
      answer:
        "The enrollment process is via the “Enroll Now” links. Payment is presumably in AED; exactly which payment methods (credit card, bank transfer, crypto) are accepted should be confirmed.",
    },
    {
      question: "Is there any hands-on / practical component (labs, projects)?",
      answer:
        "The site shows lesson topics, but does not clearly list practical labs or personal project work. You may ask whether projects or internships are included.",
    },
   
  ]
  
  export const Faqs = () => (
    <section className="pb-14 pt-14 md:pb-16 md:pt-16 lg:pb-[88px] lg:pt-[88px] xl:pb-[100px] xl:pt-[100px]">
      <div className="main-container">
        {/* Section Heading */}
        <div className="text-center space-y-3 mb-14 md:mb-[70px]">
          <span
            data-ns-animate=""
            data-delay="0.1"
            className="badge badge-green mb-3.5 md:mb-5"
          >
            Faq’s
          </span>
          <h2 data-ns-animate="" data-delay="0.2">
            Commonly <span className="text-primary-500 inline-block">asked</span> questions
          </h2>
          <p
            data-ns-animate=""
            data-delay="0.3"
            className="lg:max-w-[620px] mx-auto"
          >
            By offering concise and informative responses, this section helps users
            find solutions without the need to contact customer support, saving time
          </p>
        </div>
  
        {/* FAQ Items */}
        <div
          data-ns-animate=""
          data-delay="0.4"
          className="accordion max-w-[850px] w-full space-y-4 mx-auto"
        >
          {faqs.map((faq, idx) => (
            <div
              key={idx}
              className={`dark:bg-background-7 bg-white rounded-[20px] px-6 sm:px-8 accordion-item ${
                idx === 0 ? "active-accordion" : ""
              }`}
            >
              <button className="accordion-action flex items-center cursor-pointer justify-between sm:pt-8 pt-5 sm:pb-8 pb-5 w-full">
                <span className="flex-1 text-left sm:text-heading-6 text-tagline-1 font-normal text-secondary dark:text-accent">
                  {faq.question}
                </span>
                <span className="sm:ml-auto ml-2.5 block accordion-arrow">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    width={16}
                    height={16}
                  >
                    <path
                      strokeOpacity="0.8"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m19.5 8.25-7.5 7.5-7.5-7.5"
                      className="stroke-secondary dark:stroke-accent"
                    />
                  </svg>
                </span>
              </button>
              <div className="accordion-content">
                <div className="border-t border-t-stroke-2 dark:border-t-stroke-6 sm:pt-6 pt-5 sm:pb-8 pb-5">
                  <p>{faq.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
  