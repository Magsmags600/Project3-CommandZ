import "./landing.css";
import { useState, useEffect } from "react";
import { useQuery, useMutation } from "@apollo/client";
import { GET_ME } from "../utils/queries";
import { GENERATE_RESUME } from "../utils/mutations";
// import type { User } from '../interfaces';

const MyResumes = () => {
  const [userData, setUserData] = useState<any>({
    resume: [],
  });
  const [isButtonVisible, setIsButtonVisible] = useState(true);

  const { loading, data } = useQuery(GET_ME);
  const [generateResume] = useMutation(GENERATE_RESUME);
  // console.log(data?.me?.resume);

  const getUserData = () => {
    setUserData(data?.me);
  };
  useEffect(() => {
    getUserData();
    console.log(userData?.resume);
  });

  const resumeGenerator = async (e: any, index: number) => {
    e.preventDefault();
    e.stopPropagation();
    setIsButtonVisible(false);

    try {
      const response = await generateResume({
        variables: { input: { ...userData.resume[index] } },
      });
      setIsButtonVisible(true);
      alert(response.data.generateResume);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <>
      {loading ? (
        <>Loading......</>
      ) : (
        <main className="landing-page">
          <section className="hero-banner">
            <h1>My Personal Resumes!!!!</h1>
            <p>
              Ignite Your Career with AI-Powered, Effortless Resume Content
              Creation
            </p>
          </section>

          <section className="container my-5">
            <div className="row justify-content-center">
              <>
                {" "}
                {userData?.resume?.length > 0
                  ? userData?.resume?.map((resume: any, index: number) => {
                      return (
                        <div className="col-md-4">
                          <div className="card">
                            <div className="card-image-placeholder d-flex justify-content-center align-items-center">
                              <img
                                src="./assets/AI3.jpg"
                                alt="Placeholder for Easy to Use"
                                className="img-fluid"
                              />
                            </div>
                            <div className="card-body">
                              <h5 className="card-title">{resume.name}</h5>
                              <p className="card-text">
                                {resume.address}
                                <br />
                                {resume.email}
                                <br />
                                {resume.phone}
                                <br />
                              </p>
                              {isButtonVisible ? (
                                <button
                                  key={index}
                                  className="btn btn-success"
                                  onClick={(e) => resumeGenerator(e, index)}
                                >
                                  create Pdf
                                </button>
                              ) : (
                                ""
                              )}
                            </div>
                          </div>
                        </div>
                      );
                    })
                  : "No Resume To Show...."}
              </>
            </div>
          </section>
        </main>
      )}
    </>
  );
};

export default MyResumes;
