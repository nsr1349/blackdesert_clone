import { homeNews } from "./mock";
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
            <a href={id}>
              <div style={{ backgroundImage: `url('${image}')` }} />
              <h4>{title}</h4>
            </a>
          </article>
        ))}
      </section>
      <section id="new-class-section">
        <div className="section-wrap">
          <img
            src="https://s1.pearlcdn.com/KR/contents_event/floating/202406/main_new_char/character_dosa_767.png"
            alt="신규 클래스 배너"
          />
          <div></div>
        </div>
      </section>
    </>
  );
}

export default Home;
