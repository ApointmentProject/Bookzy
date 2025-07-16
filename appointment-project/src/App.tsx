import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Routing from "./Routing"
import { ThemeProvider } from "./context/ThemeContext"
import { AuthProvider } from "./context/AuthContext.tsx";
import { ToastProvider } from "./context/ToastContext.tsx";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ToastProvider>
        <AuthProvider>
          <ThemeProvider>
            <Routing />
          </ThemeProvider>
        </AuthProvider>
      </ToastProvider>
    </QueryClientProvider>
  )
}

export default App
