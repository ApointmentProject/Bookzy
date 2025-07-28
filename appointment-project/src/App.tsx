import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Routing from "./Routing"
import { ThemeProvider } from "./context/ThemeContext"
import { AuthProvider } from "./context/AuthContext.tsx";
import { ToastProvider } from "./context/ToastContext.tsx";
import { BusinessProvider } from "./context/BusinessContext.tsx";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ToastProvider>
        <BusinessProvider>
        <AuthProvider>
          <ThemeProvider>
            <Routing />
          </ThemeProvider>
        </AuthProvider>
        </BusinessProvider>
      </ToastProvider>
    </QueryClientProvider>
  )
}

export default App
