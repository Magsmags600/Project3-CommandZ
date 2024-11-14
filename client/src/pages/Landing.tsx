import './landing.css';

const Landing: React.FC = () => {
  return (
    <main className="landing-page">
      <section className="hero-banner bg-info text-light text-center py-5">
        <h1 className="display-4">Welcome to Tech Friends</h1>
        <p className="lead">Your go-to platform for connecting with programming enthusiasts.</p>
      </section>

      <section className="container my-5">
        <div className="row">
          <div className="col-md-6 mb-4">
            <div className="card">
              <div className="card-image-placeholder bg-secondary d-flex justify-content-center align-items-center">
                <p>Image Placeholder</p>
              </div>
              <div className="card-body">
                <h5 className="card-title">Connect with Peers</h5>
                <p className="card-text">
                  Build your network by meeting other programming enthusiasts from around the world.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-6 mb-4">
            <div className="card">
              <div className="card-image-placeholder bg-secondary d-flex justify-content-center align-items-center">
                <p>Image Placeholder</p>
              </div>
              <div className="card-body">
                <h5 className="card-title">Share Your Projects</h5>
                <p className="card-text">
                  Showcase your work and get feedback from a community that loves to code.
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
