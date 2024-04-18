import Image from "next/image";
import { MdOutlineShoppingCart } from "react-icons/md";
import logo from "../../assets/logo.png";

export default function Header() {
  const navList = ["Deals", "Dumbbells", "Kettlebells", "Barbells & Plates "];

  return (
    <>
      <header className="w-screen h-20 absolute inset-0 z-20 flex justify-between items-center px-28 animate-fade-down animate-once">
        <div className="w-52">
          <Image src={logo} alt="logo" width={150} height={150} />
        </div>
        <nav className="mx-auto flex ">
          <ul className="flex justify-between w-[530px]">
            {navList.map((item, index) => (
              <li key={index}>
                <p className="text-white cursor-pointer">{item}</p>
              </li>
            ))}
          </ul>
        </nav>
        <div className="w-52">
          <button className="px-10 py-4 rounded-full bg-white font-bold flex items-center gap-2 text-lg hover:animate-jump animate-once animate-duration-500">
            <MdOutlineShoppingCart size={25} />
            Shop Now
          </button>
        </div>
      </header>
    </>
  );
}
