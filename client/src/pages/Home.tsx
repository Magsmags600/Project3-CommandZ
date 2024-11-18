// import { useQuery } from '@apollo/client';
import { useState } from "react";
import ProfileForm from "../components/ProfileForm";
// import ProfileList from '../components/ProfileList';

// import { QUERY_PROFILES } from '../utils/queries';
const Home = () => {
  // const { loading, data } = useQuery(QUERY_PROFILES);
  // const profiles = data?.profiles || [];
  const [count, setCount] = useState<number>(0);
  const cards = ['profile', 'education', 'skills', 'project'];
  const renderPage = () => {
    switch (cards[count]) {
      case "profile":
        return <ProfileForm />;
      case "education":
        return "<education />";
      case "skills":
        return '<skills />';
      case "project":
        return '<project />';
      default:
        return '<h1>404 Page Not Found</h1>';
    }
  }

  // Function to increment the count
  const increment = () => {
    if (count < cards.length - 1) {

      setCount(prevCount => prevCount + 1);
    }
  };

  // Function to decrement the count
  const decrement = () => {

    if (count > 0) {
      setCount(prevCount => prevCount - 1);
    }

  };


  return (
    <main>

      <div className="d-flex justify-content-center">
        <div className="col-12 col-md-10 my-3">

          {renderPage()}

          

        </div>

        <div className="col-6 col-md-10 my-3 float-left " style={{float:"left"}}>
            <button className="btn btn-info" onClick={decrement} >
              PREVIOUS
            </button>
         
          </div>
        <div className="col-6 col-md-10 my-3 float-right" style={{float:"right"}} >
         
            <button className="btn btn-success" onClick={increment}>NEXT</button>
          </div>
      </div>
    </main>
  );
};

export default Home;
