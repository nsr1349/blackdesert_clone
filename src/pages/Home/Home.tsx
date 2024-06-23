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
    </>
  );
}

export default Home;
