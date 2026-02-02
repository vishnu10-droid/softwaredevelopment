import { useEffect, useState } from "react";

const ScrollToTopArrow = () => {
  const [showArrow, setShowArrow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowArrow(window.scrollY > 300);
    };

    

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {showArrow && (
        <button
          onClick={scrollToTop}
          className="
            fixed bottom-6 right-0 z-50
            flex h-14 w-14 items-center justify-center
            rounded-full
            bg-linear-to-r from-indigo-600 via-purple-600 to-pink-600
            text-white
            shadow-xl
            transition-all duration-300
            hover:scale-110 hover:shadow-2xl
            active:scale-95
          "
        >
          <span className="text-3xl font-extrabold leading-none">↑</span>
        </button>
      )}
    </>
  );
};

export default  ScrollToTopArrow;
