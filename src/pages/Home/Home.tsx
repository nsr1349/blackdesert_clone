import { section2Data } from "./HomeData";
import "./Home.css";

function Home() {
  return (
    <>
      <section className="main-video">
        <div className="main-video-overlay">
          <h1>나만의 모험이 펼쳐지는 곳</h1>
          <button>지금 시작하기</button>
        </div>
        <video muted preload="none" loop autoPlay className="mobile-hide">
          <source
            type="video/webm"
            src="https://s1.pearlcdn.com/global_static/video/skinjoin_world_loop.webm"
          />
          <track kind="captions" src="#" srcLang="en" label="English" />
        </video>
      </section>
      <section className="main-section2">
        {section2Data.map(({ image, title }) => (
          <div key={title}>
            <div className="img-wrap">
              <img src={image} alt="" />
            </div>
            <h4>{title}</h4>
          </div>
        ))}
      </section>
      <section className="main-section3">
        <img
          src="https://s1.pearlcdn.com/KR/Upload/BANNER/MAIN/bannerImage_20240604140351koKR.jpg"
          alt=""
          className="pc-banner"
        />
        <img
          src="https://s1.pearlcdn.com/KR/Upload/BANNER/MAIN/bannerMobileImage_20240604140352.jpg"
          alt=""
          className="mobile-banner"
        />
      </section>
      {/* <section className="main-section4">
        <div>
          <h1>고대의 진실을 찾아</h1>
          <p>
            대륙의 중심에서 기억을 잃은 한 모험가. 세계를 관통하는 비밀을 향한
            긴 모험이 시작됩니다.
          </p>
        </div>
        <div>
          <div>
            <h1>꿈꾸던 모험을 현실로</h1>
            <p>
              말과 함께 초원을 가로지르는 방랑자, 거대한 범선으로 섬과 육지를
              오가는 대상인. 드넓은 세계를 유랑하며 나의 이야기를 만들어 가세요.
            </p>
            <button>더보기</button>
          </div>
          <img src="" alt="" />
        </div>
      </section> */}
      <section className="main-section5"></section>
      <section className="main-section6">
        <div></div>
        <div></div>
      </section>
    </>
  );
}

export default Home;
