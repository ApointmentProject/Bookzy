import Header from "../components/header/Header"
import Footer from "../components/footer/Footer"
import { useTheme } from "../context/ThemeContext"

export default function About() {
    const { isDarkMode } = useTheme()
  return (
    <div className={`flex flex-col min-h-screen transition-colors transition-300 ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-white text-black'}`}>
        <Header />
        <div className='flex-grow flex items-center justify-center'>
            <h1>About</h1>
        </div>
        <Footer />
    </div>
  )
}
