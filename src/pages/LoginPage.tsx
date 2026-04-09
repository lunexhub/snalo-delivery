import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Navbar from "@/components/Navbar";

const LoginPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="container max-w-md py-16 space-y-8">
        <Link to="/" className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground">
          <ArrowLeft className="h-4 w-4" /> Back to stores
        </Link>

        <div className="text-center space-y-2">
          <div className="flex h-12 w-12 mx-auto items-center justify-center rounded-xl bg-primary">
            <span className="text-2xl font-bold text-primary-foreground">S</span>
          </div>
          <h1 className="text-2xl font-bold text-foreground">Welcome to Snalo</h1>
          <p className="text-muted-foreground">Sign in to track orders and save favourites</p>
        </div>

        <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" placeholder="you@example.com" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="password">Password</Label>
            <Input id="password" type="password" placeholder="••••••••" />
          </div>
          <Button className="w-full" size="lg">Sign In</Button>
          <p className="text-center text-sm text-muted-foreground">
            Don't have an account?{" "}
            <button className="text-primary font-medium hover:underline">Sign Up</button>
          </p>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
