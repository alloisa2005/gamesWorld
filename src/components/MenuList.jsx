"use client";

import Link from "next/link";
import React from "react";
import { AiOutlineClose } from "react-icons/ai";
import { usePathname } from "next/navigation";
import { signOut, useSession } from "next-auth/react";
import Image from "next/image";
import { useSelector } from "react-redux";

const MenuList = ({ open, handleMenu }) => {
  const { data: session } = useSession();
  const { cartTotalItems } = useSelector((state) => state.cart);
  const pathname = usePathname();

  return (
    <div
      onClick={handleMenu}
      className={`${
        open ? "opacity-100 visible" : "invisible opacity-0"
      } z-20 transition-all fixed inset-0 bg-black/70 flex justify-end`}
    >
      <aside
        className={`${
          open ? "" : "translate-x-[50%]"
        } transition-all w-[50%] bg-black/90`}
      >
        <div
          className="flex justify-end text-white text-2xl p-5 hover:cursor-pointer"
          onClick={handleMenu}
        >
          <AiOutlineClose size={30} className="text-white hover:text-black" />
        </div>

        <nav className="flex flex-col gap-5 px-3 text-white font-bold font-montserrat">
          <Link
            href="/"
            className={`${
              pathname === "/" ? "bg-white text-black" : ""
            } font-montserrat hover:text-black hover:bg-white p-2 rounded-md`}
          >
            Inicio
          </Link>
          <Link
            href="/tienda/categorias/all"
            className={`${
              pathname === "/tienda/categorias/all" ? "bg-white text-black" : ""
            } font-montserrat hover:text-black hover:bg-white p-2 rounded-md`}
          >
            Tienda
          </Link>
          {!session?.user?.email ? (
            <Link
              href="/user/login"
              className={`${
                pathname === "/user/login" ? "bg-white text-black" : ""
              } font-montserrat hover:text-black hover:bg-white p-2 rounded-md`}
            >
              LogIn
            </Link>
          ) : (
            <>
              <div className="flex items-center gap-3">
                <Image
                  width={50}
                  height={50}
                  className="border-2 border-white w-[42px] h-[42px] rounded-full object-cover"
                  src={session.user.image}
                  alt="Avatar Image"
                />
                <p>Hola, {session.user.nombre.split(' ')[0]}</p>
              </div>
              <Link
                className="hover:cursor-pointer hover:bg-white hover:text-black p-1"
                href="/carrito"
              >
                Mi Carrito
                <span className="ml-2 w-5 h-5 p-1 rounded-full text-sm bg-red-500 text-white">
                  {cartTotalItems}
                </span>
              </Link>
              <Link
                className="hover:cursor-pointer hover:bg-white hover:text-black p-1"
                href="/favoritos"
              >
                Mis Favoritos
              </Link>
              <Link
                className="hover:cursor-pointer hover:bg-white hover:text-black p-1"
                href="/compras"
              >
                Mis Compras
              </Link>
              <Link
                className="hover:cursor-pointer hover:bg-white hover:text-black p-1"
                href="/user/datos"
              >
                Mis Datos
              </Link>
              {session?.user?.isAdmin && (
                <Link
                  className="hover:cursor-pointer hover:bg-white hover:text-black p-1"
                  href="/admin/productos"
                >
                  Menu Admin
                </Link>
              )}
              <span
                onClick={() => signOut()}
                className="hover:bg-white hover:text-black hover:cursor-pointer p-1"
              >
                Log Out
              </span>
            </>
          )}
        </nav>
      </aside>
    </div>
  );
};

export default MenuList;
