import { useState } from "react";
import { Link } from "react-router-dom";
import { classList } from "../mocks";

function ClassList() {
  const [selectClassIdx, setSelectClassIdx] = useState(0);

  return (
    <>
      <section id="classlist-section">
        <div className="section-wrap">
          <picture className="class-icon">
            <img src={classList[selectClassIdx].icon} alt="" />
          </picture>
          <picture className="class-charactor">
            <img src={classList[selectClassIdx].charactorImg} alt="" />
          </picture>
          <div className="class-profile">
            <h2>{classList[selectClassIdx].name}</h2>
            <p>{classList[selectClassIdx].content}</p>
            <Link to={"/"}>자세히 알아보기</Link>
            <button>지금 시작하기</button>
          </div>
          <div className="class-list flex-center">
            {classList.map(({ name }, i) => (
              <div
                key={name}
                style={{
                  backgroundPosition: "0 -276px",
                  ...(selectClassIdx === i && {
                    filter: `grayscale(0%)`,
                    borderColor: "var(--color-light-gold)",
                  }),
                }}
                onClick={() => setSelectClassIdx(i)}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default ClassList;
