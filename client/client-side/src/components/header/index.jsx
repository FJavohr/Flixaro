import React from "react";
import { useState, useEffect } from "react";
import "./Header.scss";
import { useLocation, useNavigate } from "react-router-dom";
import { HiOutlineSearch } from "react-icons/hi";
import { SlMenu } from "react-icons/sl";
import { VscChromeClose } from "react-icons/vsc";
import ContentWrapper from "../contentWrapper/ContentWrapper";
import logo from "../../assets/logo.ico";
// заимпортировать лого  // сделать лог
const Header = () => {
  //скрол эффект
  const [show, setShow] = useState("top");
  // фича - убираем навлайн при скролле на определённое значение
  const [lastScroll, setLastScroll] = useState(0);
  // мобилка - бургер меню для navbar
  const [burgerMenu, setBurgerMenu] = useState(false);
  // мобильная - появление поиска (дропдаун)
  const [query, setQuery] = useState("");
  const [showSearch, setShowSearch] = useState("");

  const navigate = useNavigate();
  // возвращает текущую локацию (адресс url, поисковый адресс так сказать).
  const location = useLocation();

  console.log(window)
  console.log(window.scrollTo)

  useEffect(() => {
  window.scrollTo(0, 0)
  },[location])


  const controlNavbar = () => {
    // ваууу, мэджик. Передаёт значение скролла.
    console.log(window.scrollY)
    if(window.scrollY > 200){
      if(window.scrollY > lastScroll && !burgerMenu ){
        setShow("hide")
      } else {
        setShow("show")
      } 
    }
    else{
      setShow("top")
    }
    setLastScroll(window.scrollY);
  }

  useEffect(() => {
    window.addEventListener("scroll", controlNavbar)
    return () => {
      window.removeEventListener("scroll", controlNavbar)
    }
  }, [lastScroll])

  const searchQueryHandler = (event) => {
    if (event.key === "Enter" && query.length > 0) {
      navigate(`/search/${query}`);
      console.log("rhuma");
      setTimeout(() => {
        setShowSearch(false)
      },1000)
    }
    console.log("rhuma");
  };

  const openSearch = () => {
    setBurgerMenu(false);
    setShowSearch(!showSearch);
  };
  const openBurgerMenu = () => {
    setBurgerMenu(true);
    setShowSearch(false);
  };
  //проверяем тупе, а дальше переход по explore/movie
    const navigationHandler = (type) => {
      if(type === "movie"){
        navigate("/explore/movie")
      }
      else{
        navigate("/explore/tv")
      }
      setBurgerMenu(false)
  }

  // спустя сто лет, решил написать функцию, которая при нажатии меняет current значение showSearch на противоположное ему и следовательно производит появление или закрытие элемента поиска. 
  const setShowSearchHandler = () => {
    setShowSearch(!showSearch)
  }
  return ( 
    // мэджик: появление/исчезновение бургер меню в зависимости
    <header className={`header ${burgerMenu ? "mobileView" : ""} ${show} `}>
        <div className="logo">
          <img onClick={() => navigate("/")} src={logo} alt="logotip ne rabotaet" />
        </div>
        <ul className="menuItems">
          <li className="menuItem" onClick={() => navigationHandler("movie")} >Movies</li>
          <li className="menuItem" onClick={() => navigationHandler("tv")} >TV Shows</li>
          <li className={`menuItem `} onClick={openSearch} >
            <HiOutlineSearch onClick={setShowSearchHandler}/>
          </li>
        </ul>
        <div className="burgerMenuItems">
          <HiOutlineSearch onClick={setShowSearchHandler} />
          {burgerMenu ? (
            <VscChromeClose
              onClick={() => {
                setBurgerMenu(false);
              }}
            />
          ) : (
            <SlMenu onClick={openBurgerMenu} />
          )}
        </div>
     {showSearch && 
     ( 
      <div className="searchBar">
        <ContentWrapper>
          <div className={`searchInput ${showSearch === false ? "searchInputClose" : ""}`}>
            <input
              type="text"
              placeholder="Search for a movie or tv show ..."
              onKeyUp={searchQueryHandler}
              onChange={(e) => setQuery(e.target.value)}
            />
          </div>
        </ContentWrapper>
      </div>
      )
      }
    </header>
  );
};

export default Header;
