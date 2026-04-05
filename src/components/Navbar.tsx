import { Button } from "@/components/ui/button";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between px-6 md:px-12 lg:px-20 py-5 font-body">
      <span className="text-xl font-semibold tracking-tight text-foreground">Otogent</span>
      <div className="hidden md:flex items-center gap-8">
        {["Home", "Pricing", "About", "Contact"].map((item) => (
          <a
            key={item}
            href="#"
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            {item}
          </a>
        ))}
        <Button className="rounded-full px-5 text-sm font-medium">Get Started</Button>
      </div>
    </nav>
  );
};

export default Navbar;
