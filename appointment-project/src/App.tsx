import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Routing from "./Routing"
import { ThemeProvider } from "./context/ThemeContext"
import {AuthProvider} from "./context/AuthContext.tsx";

const queryClient = new QueryClient();

function App() {
  return (
      <QueryClientProvider client={queryClient}>
          <AuthProvider>
              <ThemeProvider>
                <Routing />
              </ThemeProvider>
          </AuthProvider>
      </QueryClientProvider>
  )
}

export default App
