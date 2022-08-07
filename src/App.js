import "./App.css";

function App() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
          <h1 className="heading mt-3 mb-3">Features</h1>
        </div>

        <div className="col-12 col-md-4">
          <div className="vr-cardcontainer d-flex flex-column justify-content-center p-3">
            <div className="d-flex flex-row justify-content-center">
              <img
                src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-responsive-website/easy-connect-img.png"
                className="img1"
                alt="img1"
              />
            </div>
            <h1 className="cardheading mt-3 mb-0">Easy to connect</h1>
            <p className="cardpara">
              Instead of viewing a screen in front of them, users are immersed
              and able to intract with 3D worlds.
            </p>
          </div>
        </div>

        <div className="col-12 col-md-4">
          <div className="vr-cardcontainer d-flex flex-column justify-content-center p-3">
            <div className="d-flex flex-row justify-content-center">
              <img
                src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-responsive-website/vr-capability-img.png"
                className="img1"
                alt="img2"
              />
            </div>
            <h1 className="cardheading mt-3 mb-0">VR Capability</h1>
            <p className="cardpara">
              Ability to recognize hand motin, evolving interactions and
              gameplay in VR.
            </p>
          </div>
        </div>

        <div className="col-12 col-md-4">
          <div className="vr-cardcontainer d-flex flex-column justify-content-center p-3">
            <div className="d-flex flex-row justify-content-center">
              <img
                src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-responsive-website/video-games-img.png"
                className="img1"
                alt="img3"
              />
            </div>
            <h1 className="cardheading mt-3 mb-0">Interaction</h1>
            <p className="cardpara">
              Interaction refers to the
              <span className="texthighlit">natural interaction</span>
              between the user and the virtual scene.
            </p>
          </div>
        </div>

        <div className="col-12 col-md-4">
          <div className="vr-cardcontainer d-flex flex-column justify-content-center p-3">
            <div className="d-flex flex-row justify-content-center">
              <img
                src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-responsive-website/interaction-img.png"
                className="img1"
                alt="img4"
              />
            </div>
            <h1 className="cardheading mt-3 mb-0">Easy to play</h1>
            <p className="cardpara">
              In 360-degree video, the locations of viewers are fixed, viewers
              are limited to the angles captures by the cameras.
            </p>
          </div>
        </div>

        <div class="col-12 col-md-4">
          <div class="vr-cardcontainer d-flex flex-column justify-content-center p-3">
            <div class="d-flex flex-row justify-content-center">
              <img
                src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-responsive-website/easy-play-img.png"
                class="img1"
                alt="img5"
              />
            </div>
            <h1 class="cardheading mt-3 mb-0">Easy to connect</h1>
            <p class="cardpara">
              Instead of viewing a screen in front of them, users are immersed
              and able to intract with 3D worlds.
            </p>
          </div>
        </div>

        <div class="col-12 col-md-4">
          <div class="vr-cardcontainer d-flex flex-column justify-content-center p-3">
            <div class="d-flex flex-row justify-content-center">
              <img
                src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-responsive-website/experience-img.png"
                class="img1"
                alt="img6"
              />
            </div>
            <h1 class="cardheading mt-3 mb-0">Awesome Experience</h1>
            <p class="cardpara">
              Virtual reality (VR) is a simulated experience that can be similar
              to or completely different from the real world.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
