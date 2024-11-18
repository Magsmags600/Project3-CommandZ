// import { useQuery } from '@apollo/client';

// import ProfileList from '../components/ProfileList';

// import { QUERY_PROFILES } from '../utils/queries';

import ProfileForm from "../components/ProfileForm";
const Home = () => {
  // const { loading, data } = useQuery(QUERY_PROFILES);
  // const profiles = data?.profiles || [];

  return (
    <main>
      <div className="flex-row justify-center">
        <div>
          <ProfileForm />
        </div>
      </div>
    </main>
  );
};

export default Home;
