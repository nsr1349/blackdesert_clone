import { Link } from "react-router-dom";

function ClassList() {
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
          <div className="class-list flex-center">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
      </section>
    </>
  );
}

export default ClassList;
