import { Menu, X } from "lucide-react";
import { Button } from "./ui/button";

interface MenuHamburguerProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

export const MenuHamburguer = ({ isOpen, setIsOpen }: MenuHamburguerProps) => {
  return (
    <div className="md:hidden flex items-center">
      <Button
        onClick={() => setIsOpen(!isOpen)}
        className="text-slate-600 hover:text-slate-900 bg-white hover:bg-white hover:cursor-pointer focus:outline-none p-2"
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </Button>
    </div>
  );
};
