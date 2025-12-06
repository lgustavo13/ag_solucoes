import Link from "next/link";

interface MenuHamburguerContentProps {
  navigation: {
    name: string;
    href: string;
  }[];
  setIsOpen: (isOpen: boolean) => void;
  isActive: (path: string) => boolean;
}

export const MenuHamburguerContent = ({
  navigation,
  setIsOpen,
  isActive,
}: MenuHamburguerContentProps) => {
  return (
    <div className="md:hidden bg-white border-t border-slate-100 absolute w-full shadow-lg">
      <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
        {navigation.map((item) => (
          <Link
            key={item.name}
            href={item.href}
            onClick={() => setIsOpen(false)}
            className={`block px-3 py-3 rounded-md text-base font-medium ${
              isActive(item.href)
                ? "bg-company-primary text-white"
                : "text-slate-600 hover:bg-company-primary/85 hover:text-white"
            }`}
          >
            {item.name}
          </Link>
        ))}
      </div>
    </div>
  );
};
