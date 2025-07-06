import { Heart, Users, BookOpen, Award, Quote, Sparkles } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function AboutPage() {
    const features = [
        {
            icon: BookOpen,
            title: "Curated Collection",
            description: "Our quotes are carefully selected from the world's greatest thinkers, leaders, and visionaries across different eras and cultures."
        },
        {
            icon: Award,
            title: "Proper Attribution",
            description: "Every quote comes with accurate author attribution and source information, ensuring proper credit and context."
        },
        {
            icon: Users,
            title: "User-Friendly",
            description: "Simple and intuitive interface designed to help you quickly find the perfect quote for any moment or situation."
        },
        {
            icon: Sparkles,
            title: "Beautiful Design",
            description: "Modern, responsive design that makes reading and sharing quotes a delightful experience."
        }
    ]

    const topics = [
        {
            name: "Motivation",
            description: "Inspirational quotes to boost your motivation and drive",
            count: 5
        },
        {
            name: "Success",
            description: "Quotes about achieving success and reaching your goals",
            count: 5
        },
        {
            name: "Wisdom",
            description: "Timeless wisdom and life lessons from great thinkers",
            count: 5
        },
        {
            name: "Love",
            description: "Beautiful quotes about love, relationships, and connection",
            count: 5
        },
        {
            name: "Leadership",
            description: "Quotes about leadership, influence, and making a difference",
            count: 5
        },
        {
            name: "Creativity",
            description: "Quotes to inspire creativity and innovation",
            count: 5
        }
    ]

    return (
        <div className="min-h-screen py-8 sm:py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Hero Section */}
                <div className="text-center mb-12 sm:mb-16">
                    <div className="inline-flex items-center space-x-2 bg-blue-100 text-blue-800 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-medium mb-4 sm:mb-6">
                        <Heart className="w-3 h-3 sm:w-4 sm:h-4" />
                        <span>About QuoteGen</span>
                    </div>

                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight">
                        Discover the Power of
                        <span className="gradient-text"> Words</span>
                    </h1>

                    <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl sm:max-w-3xl mx-auto leading-relaxed px-4">
                        QuoteGen is your gateway to inspiration, wisdom, and motivation. We believe that the right words
                        at the right time can transform lives, spark creativity, and provide the guidance we all need
                        on our journey through life.
                    </p>
                </div>

                {/* Mission Section */}
                <section className="mb-16 sm:mb-20">
                    <Card className="glass-effect">
                        <CardHeader className="text-center pb-4 sm:pb-6">
                            <CardTitle className="text-2xl sm:text-3xl font-bold gradient-text">
                                Our Mission
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="px-4 sm:px-6">
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 items-center">
                                <div>
                                    <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-4">
                                        We're passionate about bringing you the most inspiring and thought-provoking quotes
                                        from history's greatest minds. Our carefully curated collection spans centuries of
                                        human wisdom, from ancient philosophers to modern visionaries.
                                    </p>
                                    <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                                        Whether you're seeking motivation for a challenging day, wisdom for important decisions,
                                        or simply a moment of reflection, our quotes are here to guide and inspire you.
                                    </p>
                                </div>
                                <div className="flex justify-center">
                                    <div className="w-48 h-48 sm:w-64 sm:h-64 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                                        <Quote className="w-24 h-24 sm:w-32 sm:h-32 text-white" />
                                    </div>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </section>

                {/* Features Section */}
                <section className="mb-16 sm:mb-20">
                    <div className="text-center mb-8 sm:mb-12">
                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
                            What Makes Us Special
                        </h2>
                        <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl mx-auto px-4">
                            We're committed to providing you with the best quote experience possible.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
                        {features.map((feature, index) => {
                            const Icon = feature.icon
                            return (
                                <Card key={index} className="hover-lift">
                                    <CardHeader className="pb-4">
                                        <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center mb-3 sm:mb-4">
                                            <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                                        </div>
                                        <CardTitle className="text-lg sm:text-xl font-semibold">
                                            {feature.title}
                                        </CardTitle>
                                    </CardHeader>
                                    <CardContent className="pt-0">
                                        <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                                            {feature.description}
                                        </p>
                                    </CardContent>
                                </Card>
                            )
                        })}
                    </div>
                </section>

                {/* Topics Section */}
                <section className="mb-16 sm:mb-20">
                    <div className="text-center mb-8 sm:mb-12">
                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
                            Explore Our Topics
                        </h2>
                        <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl mx-auto px-4">
                            Discover quotes across six carefully curated categories to match your needs.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                        {topics.map((topic, index) => (
                            <Card key={index} className="hover-lift">
                                <CardContent className="p-4 sm:p-6">
                                    <div className="flex items-center justify-between mb-3">
                                        <h3 className="text-base sm:text-lg font-semibold text-gray-900">
                                            {topic.name}
                                        </h3>
                                        <span className="text-xs sm:text-sm text-gray-500 bg-gray-100 px-2 py-1 rounded-full">
                                            {topic.count} quotes
                                        </span>
                                    </div>
                                    <p className="text-xs sm:text-sm text-gray-600">
                                        {topic.description}
                                    </p>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </section>

                {/* Stats Section */}
                <section className="mb-16 sm:mb-20">
                    <Card className="glass-effect">
                        <CardContent className="p-6 sm:p-8">
                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 text-center">
                                <div>
                                    <div className="text-2xl sm:text-3xl font-bold gradient-text mb-2">30+</div>
                                    <div className="text-sm sm:text-base text-gray-600">Curated Quotes</div>
                                </div>
                                <div>
                                    <div className="text-2xl sm:text-3xl font-bold gradient-text mb-2">6</div>
                                    <div className="text-sm sm:text-base text-gray-600">Topic Categories</div>
                                </div>
                                <div>
                                    <div className="text-2xl sm:text-3xl font-bold gradient-text mb-2">100%</div>
                                    <div className="text-sm sm:text-base text-gray-600">Proper Attribution</div>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </section>

                {/* CTA Section */}
                <section className="text-center">
                    <Card className="glass-effect">
                        <CardContent className="p-6 sm:p-8">
                            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
                                Ready to Get Inspired?
                            </h2>
                            <p className="text-base sm:text-lg text-gray-600 mb-6 max-w-2xl mx-auto">
                                Start exploring our collection of inspirational quotes and discover the wisdom that can transform your life.
                            </p>
                            <a
                                href="/search"
                                className="inline-flex items-center px-6 sm:px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-200"
                            >
                                Explore Quotes
                            </a>
                        </CardContent>
                    </Card>
                </section>
            </div>
        </div>
    )
} 