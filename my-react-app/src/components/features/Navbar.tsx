import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuTrigger,
  NavigationMenuContent,
  NavigationMenuLink,
  NavigationMenuIndicator,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu"; // Adjust the import path as per your setup

const Navbar = () => {
  return (
    <header className="bg-background border-b shadow-sm">
      <div className="container mx-auto flex items-center justify-between p-4">
        {/* Logo */}
        <div className="text-xl font-bold text-primary">MyApp</div>

        {/* Navigation Menu */}
        <NavigationMenu>
          <NavigationMenuList>
            {/* Home Link */}
            <NavigationMenuItem>
              <NavigationMenuTrigger>Home</NavigationMenuTrigger>
              <NavigationMenuContent>
                <NavigationMenuLink href="#home">Go to Home</NavigationMenuLink>
              </NavigationMenuContent>
            </NavigationMenuItem>

            {/* Features Dropdown */}
            <NavigationMenuItem>
              <NavigationMenuTrigger>Features</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="p-4 grid gap-2 bg-popover rounded-md shadow">
                  <li>
                    <NavigationMenuLink href="#feature1">
                      Feature 1
                    </NavigationMenuLink>
                  </li>
                  <li>
                    <NavigationMenuLink href="#feature2">
                      Feature 2
                    </NavigationMenuLink>
                  </li>
                  <li>
                    <NavigationMenuLink href="#feature3">
                      Feature 3
                    </NavigationMenuLink>
                  </li>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>

            {/* About Link */}
            <NavigationMenuItem>
              <NavigationMenuTrigger>About</NavigationMenuTrigger>
              <NavigationMenuContent>
                <NavigationMenuLink href="#about">Learn About Us</NavigationMenuLink>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>

          {/* Menu Indicator */}
          <NavigationMenuIndicator />
        </NavigationMenu>

        {/* Action Buttons */}
        <div className="flex gap-2">
          <button className="px-4 py-2 text-sm font-medium bg-secondary text-secondary-foreground rounded-md">
            Sign In
          </button>
          <button className="px-4 py-2 text-sm font-medium bg-primary text-primary-foreground rounded-md">
            Sign Up
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
