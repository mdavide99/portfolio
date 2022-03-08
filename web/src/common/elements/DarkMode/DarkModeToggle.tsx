import { useEffect, useState } from "react";
import { FaMoon } from "react-icons/fa";
import { BsFillSunFill } from "react-icons/bs";
import classNames from "classnames";

enum ThemeState {
  Dark,
  Light,
}

interface DarkModeToggleProps {
  className?: string;
}

function DarkModeToggle(props: DarkModeToggleProps) {
  let btnClass = classNames("text-lg", props.className);
  const [theme, setTheme] = useState<ThemeState>(ThemeState.Light);

  useEffect(() => {
    if (window !== undefined) {
      if (window.localStorage.theme === "dark") {
        setDark();
      } else setLight();
    }
  });

  function setDark() {
    window.localStorage.theme = "dark";
    document.documentElement.classList.add("dark");
    setTheme(ThemeState.Dark);
  }

  function setLight() {
    window.localStorage.theme = "light";
    document.documentElement.classList.remove("dark");
    setTheme(ThemeState.Light);
  }

  return (
    <button
      onClick={theme === ThemeState.Light ? setDark : setLight}
      className={btnClass}
    >
      {theme === ThemeState.Light ? (
        <FaMoon className="text-neutral-600 hover:text-blue-600" />
      ) : (
        <BsFillSunFill className="text-neutral-50 hover:text-fuchsia-600" />
      )}
    </button>
  );
}

export { DarkModeToggle };
