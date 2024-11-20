import "./landing.css";

const Landing: React.FC = () => {
  return (
    <main className="landing-page">
      <section className="hero-banner">
        <h1>CareerSpark Your Future!</h1>
        <p>
          Ignite Your Career with AI-Powered, Effortless Resume Content Creation
        </p>
      </section>

      <section className="container my-5">
        <div className="row justify-content-center">
          <div className="col-md-4">
            <div className="card">
              <div className="card-image-placeholder d-flex justify-content-center align-items-center">
                <img
                  src="./assets/AI3.jpg"
                  alt="image of AI"
                  className="img-fluid"
                />
              </div>
              <div className="card-body">
                <h5 className="card-title">Easy to Use</h5>
                <p className="card-text">
                CareerSpark generates AI-powered content, letting you focus on seamlessly styling and presenting it to match your unique vision.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card">
              <div className="card-image-placeholder d-flex justify-content-center align-items-center">
                <img
                  src="./assets/resume.jpg"
                  alt="image of resume"
                  className="img-fluid"
                />
              </div>
              <div className="card-body">
                <h5 className="card-title">Professional Content</h5>
                <p className="card-text">
                  With CareerSpark, you get expertly crafted content to help you
                  land your dream job, seamlessly integrated into your preferred
                  resume design.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card">
              <div className="card-image-placeholder d-flex justify-content-center align-items-center">
                <img
                  src="./assets/gotjob.jpg"
                  alt="image of person happy got job"
                  className="img-fluid"
                />
              </div>
              <div className="card-body">
                <h5 className="card-title">Start Your Journey</h5>
                <p className="card-text">
                We're here to help you begin the journey, empowering you to carry it all the way to the finish line.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Landing;
