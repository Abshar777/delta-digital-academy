import { useRouter } from "next/navigation"

const pricingPlans = [
    {
      title: "Crypto Genesis",
      description:
        "Perfect for newcomers to the crypto world. Learn the fundamentals of blockchain, how cryptocurrencies work, basic trading concepts, and wallet security.",
      monthlyPrice: "2000",
      currency: "AED",
      originalPrice: "2500",
      offerPercentage: "20% OFF",
      yearlyPrice: "4420.00",
      buttonStyle: "primary",
      highlight: true,
      lessons: 24,
      hours: 10,
      popular: true,
      delay: 0.1,
      popularText: "Beginner Level Program",
      features: [
//         BREAKING THE BANK MONEY'S STORY
// BLOCKCHAIN STUDY
// UNDERSTANDING CRYPTO CURRENCIES
// CRYPTO PLATFORM SETUPS
// CANDLE STICK ANATOMY
// TECHNICAL ANALYSIS
// EXCLUSIVE CHART PATTERNS FOR CRYPTO MARKET
// MONEY MANAGEMENT AND TRADING PSYCHOLOGY
        { text: "   Breaking the bank money's story", active: true },
        { text: "Blockchain study", active: true },
        { text: "Understanding crypto currencies", active: true },
        { text: "Crypto platform setups", active: true },
        { text: "Candle stick anatomy", active: true },
        { text: "Technical analysis", active: true },
        { text: "Exclusive chart patterns for crypto market", active: true },
        { text: "Money management and trading psychology", active: true },
        { text: "24/7 Support", active: true },
        
      ],
    },
    {
      title: "Crypto Mastery",
      description:
        "Take your crypto knowledge to the next level with advanced trading strategies, technical analysis, portfolio management, and risk assessment techniques.",
      monthlyPrice: "5000",
      currency: "AED",
      originalPrice: "6000",
      delay: 0.2,
      offerPercentage: "16.67% off",
      buttonStyle: "secondary",
      highlight: false,
      lessons: 32,
      hours: 50,
      popular: true,
      popularText: "Intermediate Level Program",
      features: [
//         BREAKING THE BANK MONEY'S STORY
// BLOCKCHAIN STUDY
// UNDERSTANDING CRYPTO CURRENCIES
// CRYPTO PLATFORM SETUPS
// CANDLE STICK ANATOMY
// TECHNICAL ANALYSIS
// EXCLUSIVE CHART PATTERNS FOR CRYPTO MARKET
// MONEY MANAGEMENT AND TRADING PSYCHOLOGY
// ONCHAIN MARKET CYCLE ANALYS
// ONCHAIN PROJECT ANALYSIS
// YIELD FARMING AND AIRDROP FARMING
// BITCOIN STRATEGY
// DECENTRALISED LIQUIDITY PROVIDING AND MARKET MAKING
        { text: "Breaking the bank money's story", active: true },
        { text: "Blockchain study", active: true },
        { text: "Understanding crypto currencies", active: true },
        { text: "Crypto platform setups", active: true },
        { text: "Candle stick anatomy", active: true },
        { text: "Technical analysis", active: true },
        { text: "Exclusive chart patterns for crypto market", active: true },
        { text: "Money management and trading psychology", active: true },
        { text: "Onchain market cycle analysis", active: true },
        { text: "Onchain project analysis", active: true },
        { text: "Yield farming and airdrop farming", active: true },
        { text: "Bitcoin strategy", active: true },
        { text: "Decentralised liquidity providing and market making", active: true },
     
      ],
    },
  ]
  
  const CheckIcon = ({ active }: { active: boolean }) => (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" className="shrink-0">
      <circle cx="10" cy="10" r="10" className={active ? "fill-primary" : "fill-muted stroke-border stroke-1"} />
      <path
        d="M6 10l3 3 5-6"
        stroke={active ? "white" : "currentColor"}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={active ? "" : "opacity-30"}
      />
    </svg>
  )
  
  const Pricing = () => {
    const router=useRouter()
    return (
      <section id="pricing" className="relative py-20 lg:py-32 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16">
          <span
            data-ns-animate=""
            data-delay="0.3"
            className="badge badge-green mb-3.5 md:mb-5"
          >
            our services
          </span>
            <h2   data-ns-animate=""
            data-delay="0.4" className="text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
              Choose Your Crypto Learning Journey
            </h2>
            <p   data-ns-animate=""
            data-delay="0.5" className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
              Select the pricing plan that best suits your needs and start your crypto education today.
            </p>
          </div>
  
          {/* Pricing Cards */}
          <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <div
                data-ns-animate=""
                data-delay={plan.delay}
                key={index}
                className={`relative rounded-2xl p-8 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 ${
                  plan.highlight
                    ? "bg-orange-500/5 border-2 border-orange-500/20 shadow-xl"
                    : "bg-orange-500/5 border-2 border-orange-500/20 shadow-xl"
                }`}
              >
                {/* Popular Badge */}
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-ns-green text-primary-foreground px-6 py-2 rounded-full lg:text-sm text-[.8rem] text-nowrap font-semibold shadow-lg">
                      {plan.popularText}
                    </div>
                  </div>
                )}
  
                {/* Offer Badge */}
                {plan.offerPercentage && (
                  <div className="absolute top-1 right-[-1rem]">
                    <div className="bg-white text-black px-3 py-1 rounded-full text-sm font-bold transform rotate-12 shadow-md">
                      {plan.offerPercentage}
                    </div>
                  </div>
                )}
  
                {/* Plan Header */}
                <div className="mb-8">
                  <h3 className="text-2xl font-bold text-card-foreground mb-3">{plan.title}</h3>
                  <p className="text-muted-foreground text-base leading-relaxed">{plan.description}</p>
                </div>
  
                {/* Pricing */}
                <div className="mb-8">
                  <div className="flex items-baseline gap-2 mb-2">
                    <span className="text-4xl font-bold text-ns-green">{plan.monthlyPrice}</span>
                    <span className="text-lg font-medium text-white">{plan.currency}</span>
                    {plan.originalPrice && (
                      <span className="text-lg text-white/60 line-through ml-2">
                        {plan.originalPrice} {plan.currency}
                      </span>
                    )}
                  </div>
                 <div className="flex text-white/80 items-center gap-2">
                    <div className="flex text-white/60 items-center gap-2">
                        {plan.lessons} Lessons
                    </div> |
                    <div className="flex text-white/60 items-center gap-2">
                        {plan.hours} Hours
                    </div> 
                 </div>
                </div>
  
                {/* CTA Button */}
                <button
                onClick={()=>{
                   
                    router.push("https://wa.link/z7re0z")                    
                }}
                  className={`w-full cursor-pointer py-4 px-6 rounded-xl font-semibold text-base transition-all duration-200 mb-8 ${
                   "bg-ns-green shadow-orange-500/20 text-primary-foreground hover:bg-primary/90 shadow-lg hover:shadow-xl"
                     
                  }`}
                >
                  Get Started
                </button>
  
                {/* Features */}
                <div>
                  <h4 className="font-semibold text-card-foreground mb-4">What you'll learn:</h4>
                  <ul className="space-y-3">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-3">
                        <CheckIcon active={true} />
                        <span className={`text-sm ${feature.active ? "text-white/60" : "text-white/40"}`}>
                          {feature.text}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
  
          {/* Bottom CTA */}
          <div   data-ns-animate=""
            data-delay="0.4" className="text-center mt-16">
            <p className="text-white/60 mb-4">Need a custom plan for your organization?</p>
            <button className="text-ns-green hover:text-ns-green/80 font-semibold underline underline-offset-4">
              Contact our sales team
            </button>
          </div>
        </div>
      </section>
    )
  }
  
  export default Pricing
  