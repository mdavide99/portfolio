import { useEffect, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { NavBarItem } from "../Navigation";
import classNames from "classnames";
import { useRouter } from "next/router";

function NavBar() {
  const [isCollapse, setCollapse] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = () => {
      setCollapse(true);
    };
    router.events.on("routeChangeStart", handleRouteChange);
    return () => {
      router.events.off("routeChangeStart", handleRouteChange);
    };
  });

  let menuClass = classNames(
    "fixed inset-x-0 bottom-0 top-0 pb-40 sm:pb-0 sm:static flex flex-col justify-center sm:flex-row items-center bg-neutral-50 dark:bg-neutral-900 sm:bg-transparent",
    { "hidden sm:block ": isCollapse }
  );

  function handleClick() {
    isCollapse ? setCollapse(false) : setCollapse(true);
  }

  return (
    <>
      <button onClick={handleClick}>
        <FaBars className="sm:hidden dark:text-neutral-50 text-xl hover:text-blue-500 hover:dark:text-fuchsia-500 hover:transition-color duration-500" />
      </button>

      <div className={menuClass}>
        <button onClick={handleClick}>
          <FaTimes className="absolute top-7 right-4 sm:hidden dark:text-neutral-50 text-xl hover:text-blue-500 hover:dark:text-fuchsia-500 hover:transition-color duration-500" />
        </button>
        <NavBarItem href={"/"} name={"about"} />
        <NavBarItem href={"/projects"} name={"projects"} />
        <NavBarItem href={"/contact"} name={"contact"} />
      </div>
    </>
  );
}

export { NavBar };
