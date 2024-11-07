import { useAuth0 } from "@auth0/auth0-react";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem } from "./ui/dropdown-menu";
import { DropdownMenuTrigger } from "./ui/dropdown-menu";
import { CircleUserRound } from "lucide-react";
import { Link } from "react-router-dom";
import { Separator } from "./ui/separator";
import { Button } from "./ui/button";

function UsernameMenu() {
  const { user, logout } = useAuth0();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="flex items-center px-3 font-medium hover:text-orange-500 gap-2">
        <CircleUserRound className="text-black" />
        {`${user?.given_name} ${user?.family_name}`}
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        {/* Manage Restaurant */}
        <DropdownMenuItem>
          <Link to="/manage-restaurant" className="font-bold text-orange-500">
            Manage Restaurant
          </Link>
        </DropdownMenuItem>
        {/* User Profile */}
        <DropdownMenuItem>
          <Link to="/user-profile" className="font-bold text-orange-500">
            User profile
          </Link>
        </DropdownMenuItem>
        <Separator />
        {/* Logout */}
        <DropdownMenuItem>
          <Button onClick={() => logout()} className="flex flex-1 font-bold bg-orange-500">
            Logout
          </Button>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export default UsernameMenu;
