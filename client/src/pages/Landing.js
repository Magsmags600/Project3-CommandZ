import './landing.css';
const Landing = () => {
    return (<main className="landing-page">
      <section className="hero-banner">
        <h1>Welcome to the Fabulous Resume Builder</h1>
        <p>Create a professional resume effortlessly with our easy-to-use platform.</p>
      </section>

      <section className="container my-5">
        <div className="row justify-content-center">
          <div className="col-md-4">
            <div className="card">
              <div className="card-image-placeholder d-flex justify-content-center align-items-center">
                <p>Image Placeholder</p>
              </div>
              <div className="card-body">
                <h5 className="card-title">Easy to Use</h5>
                <p className="card-text">
                  Enter your skills, experience, and education, and we do the rest.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card">
              <div className="card-image-placeholder d-flex justify-content-center align-items-center">
                <p>Image Placeholder</p>
              </div>
              <div className="card-body">
                <h5 className="card-title">Professional Results</h5>
                <p className="card-text">
                  Get a polished, professional resume that highlights your strengths.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card">
              <div className="card-image-placeholder d-flex justify-content-center align-items-center">
                <p>Image Placeholder</p>
              </div>
              <div className="card-body">
                <h5 className="card-title">Quick and Efficient</h5>
                <p className="card-text">
                  Save time with our quick and efficient resume builder tool.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>);
};
export default Landing;
