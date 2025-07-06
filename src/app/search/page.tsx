"use client"

import { useState } from "react"
import { Search, RefreshCw } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import QuoteCard from "@/components/QuoteCard"
import quotesData from "@/data/quotes.json"

export default function SearchPage() {
    const [selectedTopic, setSelectedTopic] = useState<string>("")
    const [displayedQuotes, setDisplayedQuotes] = useState<any[]>([])
    const [isLoading, setIsLoading] = useState(false)

    const handleSearch = () => {
        if (!selectedTopic) return

        setIsLoading(true)

        // Simulate loading delay for better UX
        setTimeout(() => {
            const topicQuotes = quotesData.quotes[selectedTopic as keyof typeof quotesData.quotes] || []

            // Get at least 3 quotes, or all if less than 3
            const quotesToShow = topicQuotes.length >= 3
                ? topicQuotes.slice(0, 3)
                : topicQuotes

            setDisplayedQuotes(quotesToShow)
            setIsLoading(false)
        }, 500)
    }

    const handleRefresh = () => {
        if (!selectedTopic) return

        setIsLoading(true)

        setTimeout(() => {
            const topicQuotes = quotesData.quotes[selectedTopic as keyof typeof quotesData.quotes] || []

            // Shuffle and get 3 random quotes
            const shuffled = [...topicQuotes].sort(() => 0.5 - Math.random())
            const quotesToShow = shuffled.length >= 3
                ? shuffled.slice(0, 3)
                : shuffled

            setDisplayedQuotes(quotesToShow)
            setIsLoading(false)
        }, 500)
    }

    return (
        <div className="min-h-screen py-8 sm:py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-8 sm:mb-12">
                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-3 sm:mb-4">
                        Find Your Perfect Quote
                    </h1>
                    <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl mx-auto px-4">
                        Select a topic and discover inspiring quotes that resonate with your journey.
                    </p>
                </div>

                {/* Search Form */}
                <Card className="max-w-2xl mx-auto mb-8 sm:mb-12 glass-effect">
                    <CardHeader className="pb-4 sm:pb-6">
                        <CardTitle className="text-xl sm:text-2xl font-bold text-center gradient-text">
                            Choose Your Topic
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4 sm:space-y-6 px-4 sm:px-6">
                        <div className="space-y-2">
                            <label className="text-sm font-medium text-gray-700">
                                Select a topic to explore quotes
                            </label>
                            <Select value={selectedTopic} onValueChange={setSelectedTopic}>
                                <SelectTrigger className="w-full">
                                    <SelectValue placeholder="Choose a topic..." />
                                </SelectTrigger>
                                <SelectContent>
                                    {quotesData.topics.map((topic) => (
                                        <SelectItem key={topic.id} value={topic.id}>
                                            <div className="flex flex-col">
                                                <span className="font-medium">{topic.name}</span>
                                                <span className="text-xs text-gray-500">{topic.description}</span>
                                            </div>
                                        </SelectItem>
                                    ))}
                                </SelectContent>
                            </Select>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                            <Button
                                onClick={handleSearch}
                                disabled={!selectedTopic || isLoading}
                                className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white"
                            >
                                {isLoading ? (
                                    <RefreshCw className="w-4 h-4 mr-2 animate-spin" />
                                ) : (
                                    <Search className="w-4 h-4 mr-2" />
                                )}
                                {isLoading ? "Searching..." : "Find Quotes"}
                            </Button>

                            {displayedQuotes.length > 0 && (
                                <Button
                                    onClick={handleRefresh}
                                    disabled={!selectedTopic || isLoading}
                                    variant="outline"
                                    className="flex-1"
                                >
                                    <RefreshCw className="w-4 h-4 mr-2" />
                                    Refresh
                                </Button>
                            )}
                        </div>
                    </CardContent>
                </Card>

                {/* Results Section */}
                {displayedQuotes.length > 0 && (
                    <div className="space-y-6 sm:space-y-8">
                        <div className="text-center">
                            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
                                {quotesData.topics.find(t => t.id === selectedTopic)?.name} Quotes
                            </h2>
                            <p className="text-gray-600">
                                Here are {displayedQuotes.length} inspiring quotes for you
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                            {displayedQuotes.map((quote) => (
                                <QuoteCard key={quote.id} quote={quote} />
                            ))}
                        </div>

                        <div className="text-center">
                            <p className="text-gray-600 mb-4">
                                Want to see different quotes from this topic?
                            </p>
                            <Button
                                onClick={handleRefresh}
                                variant="outline"
                                className="px-6"
                            >
                                <RefreshCw className="w-4 h-4 mr-2" />
                                Get New Quotes
                            </Button>
                        </div>
                    </div>
                )}

                {/* Empty State */}
                {selectedTopic && !isLoading && displayedQuotes.length === 0 && (
                    <div className="text-center py-8 sm:py-12">
                        <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                            <Search className="w-6 h-6 sm:w-8 sm:h-8 text-gray-400" />
                        </div>
                        <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">
                            No quotes found
                        </h3>
                        <p className="text-gray-600">
                            Try selecting a different topic or refreshing the search.
                        </p>
                    </div>
                )}
            </div>
        </div>
    )
} 