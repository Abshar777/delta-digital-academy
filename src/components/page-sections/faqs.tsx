type FaqItem = {
    question: string
    answer: string
  }
  
  const faqs: FaqItem[] = [
    {
      question: "What is the primary role of a business agency?",
      answer:
        "When collaborating with a business agency, you can generally expect an extensive array of services designed to not only support your current operations but also to foster growth and innovation within your business. These services often include strategic planning, marketing solutions, financial consulting, and operational improvements.",
    },
    {
      question: "What kinds of services should I anticipate from a business agency?",
      answer:
        "When collaborating with a business agency, you can generally expect an extensive array of services designed to not only support your current operations but also to foster growth and innovation within your business. These services often include strategic planning, marketing solutions, financial consulting, and operational improvements.",
    },
    {
      question: "How often should I consider updating my website?",
      answer:
        "When collaborating with a business agency, you can generally expect an extensive array of services designed to not only support your current operations but also to foster growth and innovation within your business. These services often include strategic planning, marketing solutions, financial consulting, and operational improvements.",
    },
    {
      question: "How often is it recommended to refresh my website?",
      answer:
        "When collaborating with a business agency, you can generally expect an extensive array of services designed to not only support your current operations but also to foster growth and innovation within your business. These services often include strategic planning, marketing solutions, financial consulting, and operational improvements.",
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
  