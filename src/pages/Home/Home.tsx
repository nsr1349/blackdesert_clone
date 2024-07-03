import { Link } from "react-router-dom";
import ClassList from "./components/ClassList";
import { homeNews } from "./mocks";
import "./Home.css";

function Home() {
  return (
    <>
      <section id="video-section">
        <video className="pc-show" muted preload="none" loop autoPlay>
          <source
            type="video/webm"
            src="https://s1.pearlcdn.com/global_static/video/bdo_dosa_main_loop.webm"
          />
        </video>
        <div>
          <h1>신규 클래스 도사</h1>
          <h4>7월 3일 업데이트</h4>
          <button>지금 시작하기</button>
        </div>
      </section>
      <section id="news-section">
        {homeNews.map(({ id, image, title }) => (
          <article key={id}>
            <Link to={id}>
              <div style={{ backgroundImage: `url('${image}')` }} />
              <h4>{title}</h4>
            </Link>
          </article>
        ))}
      </section>
      <section id="new-class-section">
        <div className="section-wrap">
          <picture>
            <img
              src="https://s1.pearlcdn.com/KR/contents_event/floating/202406/main_new_char/character_dosa_767.png"
              alt="신규 클래스 배너"
            />
          </picture>
          <div className="flex-center">
            <picture>
              <img
                src="https://s1.pearlcdn.com/KR/contents_event/floating/202406/main_new_char/main_title_ko-KR.png"
                alt="신규 클래스 타이틀"
                className="flex-center"
              />
            </picture>
            <p>
              도법과 도술에 통달한 도사는 춤추듯 적을 베어냅니다. <br /> 그
              움직임에서 피어난 안개는 병사가 되어 전장을 혼란스럽게 만듭니다.
            </p>
            <Link to={"/news/dosa"}>더 알아보기</Link>
          </div>
        </div>
      </section>
      <ClassList />
    </>
  );
}

export default Home;
