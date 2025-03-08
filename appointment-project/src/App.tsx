import React from "react"
import Routing from "./Routing"
import { ThemeProvider } from "./context/ThemeContext"

function App() {
  return (
      <ThemeProvider>
        <Routing />
      </ThemeProvider>
  )
}

export default App
