import { useState } from "react";
import { BiUser, BiSearch, BiMenu, BiX, BiChevronDown } from "react-icons/bi";
import { Link } from "react-router-dom";
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
      {/* dd */}
      {openModalContent === "rightBar" && (
        <div className="rightBar">
          <BiX
            onClick={() => handleOpenModal(null)}
            className="close-rightBar"
          />
          <div className="rightBar-top-img-box">
            <img
              src="https://s1.pearlcdn.com/KR/contents/img/common/cm_bi_black.svg"
              alt=""
            />
          </div>
          <div className="rightBar-login-box">
            <button className="rightBar-login-btn">로그인</button>
            <div>
              <img src="" alt="" />
              <span>펄어비스 ID 생성</span>
            </div>
          </div>
          <ul>
            <li>
              <span>게임</span>
              <ul>
                <li>검은사막</li>
              </ul>
            </li>
            <li>
              <span>뉴스</span>
            </li>
            <li>
              <span>스토어</span>
            </li>
          </ul>
          <span>Copyright © Pearl Abyss Corp. All Rights Reserved.</span>
        </div>
      )}
      <div className="top-menu"></div>
      <header className="text-white flex">
        <BiMenu
          className="header-icon pc-hide"
          onClick={() => handleOpenModal("leftNav")}
        />
        <a href="/valid-path" className="logo pc-hide">
          <img
            src="https://s1.pearlcdn.com/KR/contents/img/common/logo_bdo_kr.svg?v=1"
            alt="dd"
          />
        </a>
        <div className="h-full pc-hide">
          <BiSearch className="header-icon" />
          <BiUser
            className="header-icon "
            onClick={() => handleOpenModal("rightBar")}
          />
        </div>
        <nav
          className={
            (openModalContent === "leftNav" ? "nav-show" : "") + " flex"
          }
        >
          <div className="nav-close pc-hide">
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
                  onClick={() => handleMobileSubMenuOpen(i)}
                >
                  <Link to={link}> {title}</Link>
                  <BiChevronDown className="nav-list-head-arrow pc-hide" />
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
            <BiSearch className="header-icon mobile-hide" />
            <BiUser className="header-icon mobile-hide" />
            <button className="login pc-hide">로그인</button>
            <button className="game-start hover-before-slide">게임 시작</button>
          </div>
        </nav>
      </header>
    </>
  );
}

export default Header;
