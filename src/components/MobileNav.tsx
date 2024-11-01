import { CircleUserRound, Menu } from "lucide-react";
import { Sheet, SheetContent, SheetDescription, SheetTitle, SheetTrigger } from "./ui/sheet";
import { Separator } from "./ui/separator";
import { Button } from "./ui/button";
import { useAuth0 } from "@auth0/auth0-react";
import MobileNavLinks from "./MobileNavLinks";

const MobileNav = () => {
  const { isAuthenticated, loginWithRedirect, user } = useAuth0();

  return (
    <Sheet>
      {/* Sheet Trigger */}
      <SheetTrigger>
        <Menu className="text-orange-500" />
      </SheetTrigger>
      {/* Sheet Content */}
      <SheetContent className="space-y-3">
        <SheetTitle>
          {isAuthenticated ? (
            <span className="flex items-center font-medium gap-2">
              <CircleUserRound className="text-black" />
              {`${user?.given_name} ${user?.family_name}`}
            </span>
          ) : (
            <span>Welcome to Foody foods</span>
          )}
        </SheetTitle>
        <Separator />
        <SheetDescription className="flex flex-col gap-4">
          {isAuthenticated ? (
            <MobileNavLinks />
          ) : (
            <Button onClick={() => loginWithRedirect()} className="flex-1 font-bold bg-orange-500">
              Login
            </Button>
          )}
        </SheetDescription>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
