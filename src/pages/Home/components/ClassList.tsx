// import { useState } from "react";
import { Link } from "react-router-dom";

const classList = [
  {
    name: "워리어",
    content:
      "검과 방패를 사용하며 <br />공격과 방어가 적절한 조화를 이루는 근접형 캐릭터",
    charactorImg:
      "https://s1.pearlcdn.com/KR/contents/img/portal/main/main_character_class_0.png?v=1",
    iconImg:
      "https://s1.pearlcdn.com/KR/contents/img/portal/main/main_character_class_symbol_8.png",
    xy: {
      default: { x: "0", y: "0" },
      active: { x: "0", y: "-11.5rem" },
    },
  },
];

function ClassList() {
  //   const [selectClass, setSelectClass] = useState(1);
  return (
    <>
      <section id="classlist-section">
        <div className="section-wrap">
          <picture className="class-icon">
            <img
              src="https://s1.pearlcdn.com/KR/contents/img/portal/main/main_character_class_symbol_8.png"
              alt=""
            />
          </picture>
          <picture className="class-charactor">
            <img
              src="https://s1.pearlcdn.com/KR/contents/img/portal/main/main_character_class_0.png?v=1"
              alt=""
            />
          </picture>
          <div className="class-profile">
            <h2>워리어</h2>
            <p>
              검과 방패를 사용하며 <br /> 공격과 방어가 적절한 조화를 이루는
              근접형 캐릭터
            </p>
            <Link to={"/"}>자세히 알아보기</Link>
            <button>지금 시작하기</button>
          </div>
          <ul className="class-list flex-center">
            {classList.map(({ name, xy }) => (
              <li key={name} />
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}

export default ClassList;
