import Link from "next/link"
import { ArrowRight, Sparkles, Heart, Brain, Target } from "lucide-react"
import { Button } from "@/components/ui/button"
import QuoteCard from "@/components/QuoteCard"
import quotesData from "@/data/quotes.json"

// Define Quote type
interface Quote {
  id: number;
  text: string;
  author: string;
  reference: string;
}

export default function HomePage() {
  // Get random quotes from different topics for the homepage
  const getRandomQuotes = () => {
    const allQuotes: Quote[] = []
    Object.values(quotesData.quotes).forEach(topicQuotes => {
      allQuotes.push(...topicQuotes)
    })

    // Shuffle and get 3 random quotes
    const shuffled = allQuotes.sort(() => 0.5 - Math.random())
    return shuffled.slice(0, 3)
  }

  const featuredQuotes = getRandomQuotes()

  const features = [
    {
      icon: Sparkles,
      title: "Curated Collection",
      description: "Handpicked quotes from the world&#39;s greatest thinkers, leaders, and visionaries."
    },
    {
      icon: Heart,
      title: "Inspirational Topics",
      description: "Explore motivation, success, wisdom, love, leadership, and creativity."
    },
    {
      icon: Brain,
      title: "Proper References",
      description: "Every quote comes with accurate attribution and source information."
    },
    {
      icon: Target,
      title: "Easy Discovery",
      description: "Find the perfect quote for any moment with our intuitive search system."
    }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-purple-50 py-12 sm:py-16 md:py-20 lg:py-24">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center space-x-2 bg-blue-100 text-blue-800 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-medium mb-4 sm:mb-6">
              <Sparkles className="w-3 h-3 sm:w-4 sm:h-4" />
              <span>Discover Inspirational Quotes</span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight">
              Find Your
              <span className="gradient-text"> Inspiration</span>
            </h1>

            <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-6 sm:mb-8 max-w-2xl sm:max-w-3xl mx-auto leading-relaxed px-4">
              Discover powerful quotes from history&#39;s greatest minds. Get motivated, find wisdom,
              and unlock your potential with our curated collection of inspirational quotes.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4">
              <Link href="/search" className="w-full sm:w-auto">
                <Button size="lg" className="w-full sm:w-auto bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6 sm:px-8 py-3 text-base sm:text-lg">
                  Explore Quotes
                  <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5" />
                </Button>
              </Link>
              <Link href="/about" className="w-full sm:w-auto">
                <Button variant="outline" size="lg" className="w-full sm:w-auto px-6 sm:px-8 py-3 text-base sm:text-lg">
                  Learn More
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
              Why Choose QuoteGen?
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl mx-auto px-4">
              We bring you the best quotes with proper attribution and beautiful presentation.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon
              return (
                <div key={index} className="text-center group">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed px-2">
                    {feature.description}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Featured Quotes Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-gray-50 to-blue-50/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
              Featured Quotes
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl mx-auto px-4">
              Here are some inspiring quotes to get you started on your journey.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {featuredQuotes.map((quote) => (
              <QuoteCard key={quote.id} quote={quote} />
            ))}
          </div>

          <div className="text-center mt-10 sm:mt-12">
            <Link href="/search">
              <Button size="lg" variant="outline" className="px-6 sm:px-8 py-3 text-base sm:text-lg">
                View All Quotes
                <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3 sm:mb-4">
            Ready to Find Your Inspiration?
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-blue-100 mb-6 sm:mb-8 px-4">
            Start exploring our collection of inspirational quotes today and discover the wisdom that can transform your life.
          </p>
          <Link href="/search">
            <Button size="lg" variant="secondary" className="px-6 sm:px-8 py-3 text-base sm:text-lg bg-white text-blue-600 hover:bg-gray-100">
              Get Started Now
              <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  )
}
