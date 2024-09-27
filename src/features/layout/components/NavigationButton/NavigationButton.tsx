import { Link } from "react-router-dom";
import { navIcons } from "../../../../shared/data/nav-icons";

export default function NavigationButton({
  to,
  title,
  isActive,
  icon,
}: {
  to: string;
  title: string;
  isActive: boolean;
  icon: string;
}) {
  return (
    <>
      <Link
        to={to}
        className={`w-full mt-2 flex items-center justify-center lg:justify-start py-3.5 lg:py-2.5 px-2 lg:px-6 rounded-lg ${
          isActive && "bg-primary-950"
        } overflow-hidden hover:bg-primary-950 transition duration-300`}
      >
        {navIcons[icon]}
        <p className="text-white text-base hidden lg:flex">{title}</p>
      </Link>
    </>
  );
}
