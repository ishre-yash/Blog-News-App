import React from "react";
import styles from "../styles/Home.module.css";
import Link from "next/link";

function NavBar() {
  return (
      <nav className="text-black bg-white body-font drop-shadow-lg">
        <div className="container mx-auto flex flex-wrap p-2 flex-col md:flex-row items-center drop-shadow-lg">
          <a className="flex title-font font-medium items-center text-blue-700 mb-4 md:mb-0 cursor-pointer">
            <img src="https://raw.githubusercontent.com/ishre-yash/ishre-yash/37393106a622a4c0245d5f2933091aeb24441c87/logoName.svg" alt="ShreYash Logo" />
          </a>
          <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
            <Link href="/"><a className="mr-5 hover:text-blue-700 hover:scale-105">Home</a></Link>
            <Link href="/about"><a className="mr-5 hover:text-blue-700 hover:scale-105">About</a></Link>
            <Link href="/blog"><a className="mr-5 hover:text-blue-700 hover:scale-105">Blog</a></Link>
            <Link href="/contact"><a className="mr-5 hover:text-blue-700 hover:scale-105">Contact</a></Link>
          </nav>
        </div>
      </nav>
  );
}

export default NavBar;
