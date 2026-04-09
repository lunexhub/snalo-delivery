import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { CartProvider } from "@/context/CartContext";
import Index from "./pages/Index.tsx";
import StorePage from "./pages/StorePage.tsx";
import CartPage from "./pages/CartPage.tsx";
import LoginPage from "./pages/LoginPage.tsx";
import NotFound from "./pages/NotFound.tsx";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <CartProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <div className="min-h-screen flex flex-col">
            <div className="flex-1">
              <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/store/:id" element={<StorePage />} />
                <Route path="/cart" element={<CartPage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </div>
            <footer className="py-4 text-center text-sm text-gray-600 border-t">
              <p>
                coded by{" "}
                <a 
                  href="https://www.lunexweb.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800 underline"
                >
                  lunexweb
                </a>
              </p>
            </footer>
          </div>
        </BrowserRouter>
      </CartProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
