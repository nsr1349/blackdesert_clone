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
      {/* width 문제있음 */}
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
      <div className="main-banner">
        <img
          src="https://s1.pearlcdn.com/KR/Upload/BANNER/MAIN/bannerImage_20240604140351koKR.jpg"
          alt=""
        />
      </div>
      <section id="landing-section">
        <div className="section-wrap">
          <div className="landing-title">
            <h3>고대의 진실을 찾아</h3>
            <p>
              대륙의 중심에서 기억을 잃은 한 모험가. <br /> 세계를 관통하는
              비밀을 향한 긴 모험이 시작됩니다.
            </p>
          </div>
          <div className="landing-first-box">
            <div>
              <h3>꿈꾸던 모험을 현실로</h3>
              <p>
                말과 함께 초원을 가로지르는 방랑자, 거대한 범선으로 섬과 육지를
                오가는 대상인. <br /> 드넓은 세계를 유랑하며 나의 이야기를
                만들어 가세요.
              </p>
              <button className="after-arrow">더보기</button>
            </div>
            <picture>
              <img
                src="https://s1.pearlcdn.com/KR/contents/img/portal/main/main_feature_adventure_thumb.png"
                alt=""
              />
            </picture>
          </div>
          <div className="landing-second-box">
            <picture className="flex-center">
              <img
                src="https://s1.pearlcdn.com/KR/contents/img/portal/main/main_feature_battle_thumb.jpg?v=1"
                className="landing-second-box-backgroundimg"
                alt=""
              />
            </picture>
            <img
              src="https://s1.pearlcdn.com/KR/contents/img/portal/main/main_feature_battle_character.png?v=2"
              className="landing-second-box-charactorimg"
              alt=""
            />
            <div className="landing-second-box-text">
              <h3>끊이지 않는 전투와 전쟁</h3>
              <p>
                세계를 위협하는 세력을 저지하고, 때로는 다른 모험가와 승부를
                겨루는 짜릿한 전투들.
                <br />
                포화가 가득한 전쟁을 승리로 이끌어 길드의 명성을 드높이고 막대한
                부를 쟁취할 수도 있습니다.
              </p>
              <button className="after-arrow">더보기</button>
            </div>
          </div>
        </div>
      </section>
      <ClassList />
    </>
  );
}

export default Home;
