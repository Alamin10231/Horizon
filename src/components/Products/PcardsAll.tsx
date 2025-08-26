import  { useState, useEffect } from 'react'
import { Usecards } from '../Shared/Usecards'
import { Pheader } from './Pheader'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination"
import { IoIosArrowDown } from 'react-icons/io'
import { Link } from 'react-router'


export const PcardsAll = () => {
  const { cards, loading } = Usecards()
  const [sortOption, setSortOption] = useState<string>("")
  const [currentPage, setCurrentPage] = useState<number>(1)
  const cardsPerPage = 6
  const [cardsWithPrice, setCardsWithPrice] = useState<any[]>([])

  // Add random price to cards once
  useEffect(() => {
    const updatedCards = cards.map(card => ({
      ...card,
      price: Math.floor(Math.random() * 300) + 50, // Random price between 50$ and 350$
      subtitle: `Price: ${Math.floor(Math.random() * 300) + 50}$`
    }))
    setCardsWithPrice(updatedCards)
  }, [cards])

  if (loading) return <div className='p-6'>loading...</div>

  // --- Sorting ---
  let sortedCards = [...cardsWithPrice]
  if (sortOption === "A-Z") {
    sortedCards.sort((a, b) => a.title.localeCompare(b.title))
  } else if (sortOption === "Z-A") {
    sortedCards.sort((a, b) => b.title.localeCompare(a.title))
  } else if (sortOption === "Low to High Price") {
    sortedCards.sort((a, b) => (a.price ?? 0) - (b.price ?? 0))
  } else if (sortOption === "High to Low Price") {
    sortedCards.sort((a, b) => (b.price ?? 0) - (a.price ?? 0))
  } else if (sortOption === "Featured") {
    sortedCards.sort((a, b) => a.category.localeCompare(b.category))
  }

  // --- Pagination ---
  const totalPages = Math.ceil(sortedCards.length / cardsPerPage)
  const startIndex = (currentPage - 1) * cardsPerPage
  const currentCards = sortedCards.slice(startIndex, startIndex + cardsPerPage)

  return (
    <div>
      <Pheader />

      {/* Sort Dropdown */}
      <div className='flex items-center justify-end py-5 pr-10'>
        <DropdownMenu>
          <DropdownMenuTrigger className='flex items-center gap-2'>
            {sortOption ? `Sort by: ${sortOption}` : "Sort by"} 
            <IoIosArrowDown />
          </DropdownMenuTrigger>
          <DropdownMenuContent className="border-0 shadow-md">
            <DropdownMenuSeparator />
            <DropdownMenuItem onClick={() => setSortOption("A-Z")}>A-Z</DropdownMenuItem>
            <DropdownMenuItem onClick={() => setSortOption("Z-A")}>Z-A</DropdownMenuItem>
            <DropdownMenuItem onClick={() => setSortOption("Featured")}>Featured</DropdownMenuItem>
            <DropdownMenuItem onClick={() => setSortOption("Low to High Price")}>Low to High Price</DropdownMenuItem>
            <DropdownMenuItem onClick={() => setSortOption("High to Low Price")}>High to Low Price</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 py-10 sm:grid-cols-2 md:grid-cols-3 gap-6 justify-items-center">
        {currentCards.map(card => (
          <div key={card.id} className="dark:bg-gray-800 rounded-2xl overflow-hidden flex flex-col hover:shadow-lg transition-shadow w-full max-w-xl">
            {/* Image */}
            <div className="flex items-center justify-center h-full overflow-hidden">
              <img src={card.image} alt={card.title} className="w-full h-full object-cover" />
            </div>

            {/* Content */}
            <div className="p-4 flex-1 flex flex-col justify-between items-start">
              <h1 className="text-3xl font-medium text-gray-900 dark:text-white">{card.title}</h1>
              <p className="text-gray-600 text-2xl font-semibold dark:text-gray-300 mt-1">{card.subtitle}</p>
              <ol className="text-md text-[#3F4919] list-disc list-inside mt-2">
                <li>20 Year limited residential warranty</li>
                <li>Linear grain pattern with refined streaking</li>
              </ol>

              {/* Colors */}
              <div className="flex items-center justify-start mt-3">
                <p className="text-lg font-semibold text-[#3F4919] mr-2">Color:</p>
                <span className="bg-[#898989] rounded-2xl w-5 h-5 ml-2"></span>
                <span className="bg-[#835B45] rounded-2xl w-5 h-5 ml-2"></span>
                <span className="bg-[#A59A88] rounded-2xl w-5 h-5 ml-2"></span>
                <span className="bg-[#C8B095] rounded-2xl w-5 h-5 ml-2"></span>
                <span className="bg-[#CD774B] rounded-2xl w-5 h-5 ml-2"></span>
              </div>
            </div>
    <div className="mt-4 flex w-full gap-10 md:gap-20 py-4"> <button className="flex-1 text-[#3F4919] py-2 hover:bg-green hover:text-white transition-colors border rounded-full border-green"> <Link to="/shopnow">Shop Now</Link> </button> <button className="flex-1 text-[#3F4919] py-2 hover:bg-green hover:text-white transition-colors border rounded-full border-green"> Explore more </button> </div>

          </div>
        ))}
      </div>

      {/* Pagination */}
      <Pagination>
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious href="#" onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))} />
          </PaginationItem>

          {Array.from({ length: totalPages }, (_, i) => (
            <PaginationItem key={i}>
              <PaginationLink
                href="#"
                onClick={() => setCurrentPage(i + 1)}
                className={currentPage === i + 1 ? "font-bold" : ""}
              >
                {i + 1}
              </PaginationLink>
            </PaginationItem>
          ))}

          <PaginationItem className='py-5'>
            <PaginationNext href="#" onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))} />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  )
}
