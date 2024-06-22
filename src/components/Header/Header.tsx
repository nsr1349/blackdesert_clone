import { useState } from "react";
import { BiUser, BiSearch, BiMenu, BiX, BiChevronDown } from "react-icons/bi";
import { NavMenus } from "./NavMenus";
import "./header.css";

function Header() {
  const [openModalContent, setOpenModalContent] = useState<string | null>(null);
  const [mobileNavListOpenIndex, setMobileNavListOpenIndex] = useState<
    number | null
  >(null);

  const handleOpenModal = (modalName: string | null) => {
    setOpenModalContent(modalName);
  };
  const handleMobileSubMenuOpen = (i: number) => {
    setMobileNavListOpenIndex(mobileNavListOpenIndex === i ? null : i);
  };

  return (
    <>
      {openModalContent && (
        <div className="modal-overlay" onClick={() => handleOpenModal(null)} />
      )}
      <div className="top-menu"></div>
      <header className="text-white flex">
        <BiMenu
          className="header-icon"
          onClick={() => handleOpenModal("leftNav")}
        />
        <a href="/valid-path" className="logo">
          <img
            src="https://s1.pearlcdn.com/KR/contents/img/common/logo_bdo_kr.svg?v=1"
            alt="dd"
          />
        </a>
        <div className="h-full">
          <BiSearch className="header-icon" />
          <BiUser
            className="header-icon"
            onClick={() => handleOpenModal("rightNav")}
          />
        </div>
        <nav
          className={
            (openModalContent === "leftNav" ? "nav-show" : "") + " flex"
          }
        >
          <div className="nav-close">
            <BiX onClick={() => handleOpenModal(null)} />
          </div>
          <img
            className="logo"
            src="https://s1.pearlcdn.com/KR/contents/img/common/logo_bdo_kr.svg?v=1"
            alt="dd"
          />
          <ul className="nav-list w-full">
            {NavMenus.map(({ title, link, subMenu }, i) => (
              <li key={title}>
                <div
                  className={
                    (mobileNavListOpenIndex === i ? "mobile-nav-open" : "") +
                    " nav-list-head flex"
                  }
                >
                  <a href={link}>{title}</a>
                  <BiChevronDown
                    className="nav-list-head-arrow"
                    onClick={() => handleMobileSubMenuOpen(i)}
                  />
                </div>
                <ul className="nav-list-sub">
                  {subMenu.map(({ title, link }) => (
                    <li key={title}>
                      <a href={link} style={{ color: "gray" }}>
                        {title}
                      </a>
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
          <div className="nav-buttons">
            <button className="login">로그인</button>
            <button className="game-start hover-before-slide">게임 시작</button>
          </div>
        </nav>
      </header>
    </>
  );
}

export default Header;
