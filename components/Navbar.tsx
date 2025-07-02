"use client"
import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown, Menu, Search, X, Home, Users, Lightbulb, HandHeart, TrendingUp, Mail, Building2, Briefcase, Newspaper, BrainCircuitIcon } from "lucide-react"
import { usePathname, useRouter } from "next/navigation"

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isSolutionsOpen, setIsSolutionsOpen] = useState(false)
  const [isAboutOpen, setIsAboutOpen] = useState(false)
  const [hoveredItem, setHoveredItem] = useState<string | null>(null)
  const [searchQuery, setSearchQuery] = useState("")
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const searchInputRef = useRef<HTMLInputElement>(null)
  const pathname = usePathname()
  const router = useRouter()

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    // Focus the search input when the search is opened
    if (isSearchOpen && searchInputRef.current) {
      searchInputRef.current.focus()
    }
  }, [isSearchOpen])

  // Close search if Escape key is pressed
  useEffect(() => {
    const handleEscKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isSearchOpen) {
        setIsSearchOpen(false)
      }
    }

    document.addEventListener('keydown', handleEscKey)
    return () => document.removeEventListener('keydown', handleEscKey)
  }, [isSearchOpen])

  const solutionsItems = [
    {title:"Solutions overview" , href: "/solutions", icon: BrainCircuitIcon },
    { title: "Digital Inclusion", href: "/solutions/digital-inclusion", icon: Lightbulb },
    { title: "E-Learning", href: "/solutions/e-learning", icon: Users },
    { title: "Gig Economy", href: "/solutions/gig-economy", icon: TrendingUp },
    { title: "Skill Development", href: "/solutions/skill-development", icon: HandHeart },
  ]

  const aboutItems = [
    { title: "About Us", href: "/about", icon: Users },
    { title: "Partners", href: "/about/partners", icon: Building2 },
    { title: "Careers", href: "/about/careers", icon: Briefcase },
    { title: "News", href: "/about/news", icon: Newspaper },
  ]

  const navItems = [
    { title: "Home", href: "/", hasDropdown: false, icon: Home },
    { title: "About", href: "/about", hasDropdown: true, icon: Users },
    { title: "Solutions", href: "/solutions", hasDropdown: true, icon: Lightbulb },
    { title: "Get-Involved", href: "/get-involved", hasDropdown: false, icon: HandHeart },
    { title: "Impact", href: "/impact", hasDropdown: false, icon: TrendingUp },
    { title: "Contact", href: "/contact", hasDropdown: false, icon: Mail },
  ]

  const isActiveRoute = (href: string) => {
    if (href === "/") {
      return pathname === "/"
    }
    return pathname.startsWith(href)
  }

  const handleDropdownHover = (itemTitle: string, isEntering: boolean) => {
    if (itemTitle === "Solutions") {
      setIsSolutionsOpen(isEntering)
    } else if (itemTitle === "About") {
      setIsAboutOpen(isEntering)
    }
    
    if (isEntering) {
      setHoveredItem(itemTitle)
    } else {
      setHoveredItem(null)
    }
  }

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (searchQuery.trim()) {
      router.push(`/search?q=${encodeURIComponent(searchQuery.trim())}`)
      setIsSearchOpen(false)
      setSearchQuery("")
    }
  }

  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen)
    if (!isSearchOpen) {
      // Close mobile menu if it's open
      setIsMobileMenuOpen(false)
    }
  }

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-500 ${
        isScrolled ? "bg-white/10 backdrop-blur-xl border-b border-white/20 py-2 shadow-2xl" : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center group">
            <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.2 }}>
              <Image
                src="/assets/logo.png"
                alt="Brilliant Minds Logo"
                width={180}
                height={40}
                className="transition-all duration-300 group-hover:brightness-110"
              />
            </motion.div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-1 relative">
            {navItems.map((item) => (
              <div key={item.title} className="relative group">
                {item.hasDropdown ? (
                  <div className="relative">
                    <Link
                      href={item.href}
                      className={`flex items-center px-4 py-3 rounded-lg transition-all duration-300 relative group ${
                        isActiveRoute(item.href)
                          ? "text-white"
                          : isScrolled
                            ? "text-white hover:text-cyan-400"
                            : "text-white hover:text-cyan-400"
                      } hover:bg-white/10`}
                      onMouseEnter={() => handleDropdownHover(item.title, true)}
                      onMouseLeave={() => handleDropdownHover(item.title, false)}
                    >
                      <item.icon size={18} className="mr-2" />
                      {item.title}
                      <ChevronDown
                        size={16}
                        className={`ml-2 transition-transform duration-300 ${
                          (item.title === "Solutions" && isSolutionsOpen) || (item.title === "About" && isAboutOpen)
                            ? "rotate-180" : "rotate-0"
                        }`}
                      />

                      {/* Animated underline */}
                      {(isActiveRoute(item.href) || hoveredItem === item.title) && (
                        <motion.div
                          layoutId="navbar-indicator"
                          className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full"
                          initial={false}
                          transition={{
                            type: "spring",
                            stiffness: 500,
                            damping: 30,
                          }}
                        />
                      )}
                    </Link>
                  </div>
                ) : (
                  <Link
                    href={item.href}
                    className={`flex items-center px-4 py-3 rounded-lg transition-all duration-300 relative group ${
                      isActiveRoute(item.href)
                        ? "text-white"
                        : isScrolled
                          ? "text-white hover:text-cyan-400"
                          : "text-white hover:text-cyan-400"
                    } hover:bg-white/10`}
                    onMouseEnter={() => setHoveredItem(item.title)}
                    onMouseLeave={() => setHoveredItem(null)}
                  >
                    <item.icon size={18} className="mr-2" />
                    {item.title}

                    {/* Animated underline */}
                    {(isActiveRoute(item.href) || hoveredItem === item.title) && (
                      <motion.div
                        layoutId="navbar-indicator"
                        className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full"
                        initial={false}
                        transition={{
                          type: "spring",
                          stiffness: 500,
                          damping: 30,
                        }}
                      />
                    )}
                  </Link>
                )}

                {/* About Dropdown */}
                {item.hasDropdown && item.title === "About" && (
                  <AnimatePresence>
                    {isAboutOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 10, scale: 0.95 }}
                        transition={{ duration: 0.2 }}
                        className="absolute left-0 mt-2 w-72 rounded-2xl shadow-2xl bg-white/10 backdrop-blur-xl border border-white/20 ring-1 ring-black/5 focus:outline-none overflow-hidden"
                        onMouseEnter={() => setIsAboutOpen(true)}
                        onMouseLeave={() => setIsAboutOpen(false)}
                      >
                        <div className="py-2">
                          {aboutItems.map((aboutItem) => (
                            <Link
                              key={aboutItem.title}
                              href={aboutItem.href}
                              className="flex items-center px-4 py-3 text-sm text-white hover:bg-gradient-to-r hover:from-cyan-500/20 hover:to-blue-500/20 transition-all duration-300 group"
                            >
                              <aboutItem.icon
                                size={16}
                                className="mr-3 text-cyan-400 group-hover:text-white transition-colors"
                              />
                              <div>
                                <div className="font-medium">{aboutItem.title}</div>
                              </div>
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                )}

                {/* Solutions Dropdown */}
                {item.hasDropdown && item.title === "Solutions" && (
                  <AnimatePresence>
                    {isSolutionsOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 10, scale: 0.95 }}
                        transition={{ duration: 0.2 }}
                        className="absolute left-0 mt-2 w-72 rounded-2xl shadow-2xl bg-white/10 backdrop-blur-xl border border-white/20 ring-1 ring-black/5 focus:outline-none overflow-hidden"
                        onMouseEnter={() => setIsSolutionsOpen(true)}
                        onMouseLeave={() => setIsSolutionsOpen(false)}
                      >
                        <div className="py-2">
                          {solutionsItems.map((solution) => (
                            <Link
                              key={solution.title}
                              href={solution.href}
                              className="flex items-center px-4 py-3 text-sm text-white hover:bg-gradient-to-r hover:from-cyan-500/20 hover:to-blue-500/20 transition-all duration-300 group"
                            >
                              <solution.icon
                                size={16}
                                className="mr-3 text-cyan-400 group-hover:text-white transition-colors"
                              />
                              <div>
                                <div className="font-medium">{solution.title}</div>
                              </div>
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                )}
              </div>
            ))}

            {/* Enhanced Search Button */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={toggleSearch}
              className="ml-4 px-4 py-2.5 bg-transparent border-2 border-white/30 text-white font-medium rounded-full hover:bg-gradient-to-r hover:from-cyan-500/20 hover:to-blue-500/20 hover:border-cyan-400/50 transition-all duration-300 backdrop-blur-sm group"
              aria-label="Search"
            >
              <Search size={18} className="group-hover:text-cyan-400 transition-colors" />
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center md:hidden">
            {/* Mobile Search Button */}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={toggleSearch}
              className="text-white p-2 mr-2 rounded-lg hover:bg-white/10 transition-all duration-300"
              aria-label="Search"
            >
              <Search size={24} />
            </motion.button>
            
            {/* Mobile Menu Toggle */}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="text-white p-2 rounded-lg hover:bg-white/10 transition-all duration-300"
              onClick={() => {
                setIsMobileMenuOpen(!isMobileMenuOpen)
                setIsSearchOpen(false) // Close search when opening menu
              }}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </motion.button>
          </div>
        </div>
      </div>

      {/* Search Overlay */}
      <AnimatePresence>
        {isSearchOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full left-0 right-0 bg-white/10 backdrop-blur-xl border-b border-white/20 shadow-2xl"
          >
            <div className="container mx-auto px-4 py-4">
              <form onSubmit={handleSearchSubmit} className="relative">
                <input
                  ref={searchInputRef}
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search for solutions, news, careers..."
                  className="w-full pl-12 pr-12 py-4 text-lg bg-white/10 backdrop-blur-sm border-2 border-white/20 text-white placeholder-white/70 rounded-full focus:outline-none focus:border-cyan-400/50 transition-all duration-300"
                />
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white/70 w-5 h-5" />
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  type="button"
                  onClick={() => setIsSearchOpen(false)}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white/70 hover:text-white transition-colors"
                >
                  <X size={20} />
                </motion.button>
              </form>
              <div className="mt-3 text-sm text-white/70 flex flex-wrap gap-2">
                <span>Popular searches:</span>
                {["Digital inclusion", "E-learning", "Skill development", "Career opportunities"].map((term) => (
                  <button
                    key={term}
                    onClick={() => {
                      setSearchQuery(term)
                      router.push(`/search?q=${encodeURIComponent(term)}`)
                      setIsSearchOpen(false)
                    }}
                    className="hover:text-cyan-400 transition-colors"
                  >
                    {term}
                  </button>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white/10 backdrop-blur-xl border-t border-white/20"
          >
            <div className="px-4 pt-2 pb-6 space-y-2">
              {navItems.map((item) => (
                <div key={item.title} className="py-1">
                  {item.hasDropdown ? (
                    <div>
                      <div className="flex items-center justify-between">
                        <Link
                          href={item.href}
                          className={`flex items-center py-3 px-3 rounded-lg transition-all duration-300 ${
                            isActiveRoute(item.href)
                              ? "text-white"
                              : "text-white hover:text-cyan-400 hover:bg-white/10"
                          }`}
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          <item.icon size={18} className="mr-3" />
                          {item.title}
                        </Link>
                        <motion.button
                          whileTap={{ scale: 0.9 }}
                          className="text-white hover:text-cyan-400 transition-colors p-2 rounded-lg hover:bg-white/10"
                          onClick={() => {
                            if (item.title === "Solutions") {
                              setIsSolutionsOpen(!isSolutionsOpen)
                            } else if (item.title === "About") {
                              setIsAboutOpen(!isAboutOpen)
                            }
                          }}
                        >
                          <ChevronDown
                            size={16}
                            className={`transition-transform duration-300 ${
                              (item.title === "Solutions" && isSolutionsOpen) || (item.title === "About" && isAboutOpen)
                                ? "rotate-180" : "rotate-0"
                            }`}
                          />
                        </motion.button>
                      </div>

                      {/* About Mobile Dropdown */}
                      {item.title === "About" && (
                        <AnimatePresence>
                          {isAboutOpen && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: "auto" }}
                              exit={{ opacity: 0, height: 0 }}
                              transition={{ duration: 0.2 }}
                              className="pl-4 mt-2 space-y-1"
                            >
                              {aboutItems.map((aboutItem) => (
                                <Link
                                  key={aboutItem.title}
                                  href={aboutItem.href}
                                  className="flex items-center py-2 px-3 text-gray-300 hover:text-cyan-400 hover:bg-white/10 rounded-lg transition-all duration-300"
                                  onClick={() => setIsMobileMenuOpen(false)}
                                >
                                  <aboutItem.icon size={16} className="mr-3" />
                                  {aboutItem.title}
                                </Link>
                              ))}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      )}

                      {/* Solutions Mobile Dropdown */}
                      {item.title === "Solutions" && (
                        <AnimatePresence>
                          {isSolutionsOpen && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: "auto" }}
                              exit={{ opacity: 0, height: 0 }}
                              transition={{ duration: 0.2 }}
                              className="pl-4 mt-2 space-y-1"
                            >
                              {solutionsItems.map((solution) => (
                                <Link
                                  key={solution.title}
                                  href={solution.href}
                                  className="flex items-center py-2 px-3 text-gray-300 hover:text-cyan-400 hover:bg-white/10 rounded-lg transition-all duration-300"
                                  onClick={() => setIsMobileMenuOpen(false)}
                                >
                                  <solution.icon size={16} className="mr-3" />
                                  {solution.title}
                                </Link>
                              ))}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      )}
                    </div>
                  ) : (
                    <Link
                      href={item.href}
                      className={`flex items-center py-3 px-3 rounded-lg transition-all duration-300 ${
                        isActiveRoute(item.href)
                          ? "text-white"
                          : "text-white hover:text-cyan-400 hover:bg-white/10"
                      }`}
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      <item.icon size={18} className="mr-3" />
                      {item.title}
                    </Link>
                  )}
                </div>
              ))}
              <div className="pt-4">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={toggleSearch}
                  className="flex items-center justify-center w-full px-5 py-3 rounded-full bg-transparent border-2 border-white/30 text-white font-medium hover:bg-gradient-to-r hover:from-cyan-500/20 hover:to-blue-500/20 hover:border-cyan-400/50 transition-all duration-300"
                >
                  <Search size={18} className="mr-2" />
                  Search
                </motion.button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}

export default Navbar