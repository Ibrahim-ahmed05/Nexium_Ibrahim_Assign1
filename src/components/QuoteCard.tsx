import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Quote } from "lucide-react"

interface QuoteCardProps {
    quote: {
        id: number
        text: string
        author: string
        reference: string
    }
}

const QuoteCard = ({ quote }: QuoteCardProps) => {
    return (
        <Card className="group hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-br from-white to-gray-50/50 backdrop-blur-sm h-full">
            <CardContent className="p-4 sm:p-6">
                <div className="flex items-start space-x-2 sm:space-x-3">
                    <div className="flex-shrink-0 w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                        <Quote className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
                    </div>
                    <div className="flex-1 min-w-0">
                        <blockquote className="text-sm sm:text-base md:text-lg font-medium text-gray-900 leading-relaxed">
                            "{quote.text}"
                        </blockquote>
                    </div>
                </div>
            </CardContent>
            <CardFooter className="px-4 sm:px-6 pb-4 sm:pb-6 pt-0">
                <div className="w-full">
                    <div className="flex items-center justify-between">
                        <div className="flex-1 min-w-0">
                            <p className="text-xs sm:text-sm font-semibold text-gray-900 truncate">
                                — {quote.author}
                            </p>
                            <p className="text-xs text-gray-500 mt-1 truncate">
                                {quote.reference}
                            </p>
                        </div>
                        <div className="text-xs text-gray-400 bg-gray-100 px-2 py-1 rounded-full flex-shrink-0 ml-2">
                            #{quote.id}
                        </div>
                    </div>
                </div>
            </CardFooter>
        </Card>
    )
}

export default QuoteCard 