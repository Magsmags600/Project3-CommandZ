import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import App from './App';
import Landing from './pages/Landing';
import Signup from './pages/Signup';
import Login from './pages/Login';
import Error from './pages/Error';
import Legal from './pages/Legal';
import Contact from './pages/Contact';
import Home from './pages/Home';
import MyResumes from './pages/myResume';
// import Profile from './components/ProfileForm';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Landing />
      },
      {
        path: '/login',
        element: <Login />
      },
      {
        path: '/signup',
        element: <Signup />
      },
      {
        path: '/legal',
        element: <Legal />
      },
      {
        path: '/contact',
        element: <Contact />
      },
      {
        path: '/home',
        element: <Home/>
      },
      {
        path: '/resumes',
        element: <MyResumes/>
      },
    ]
  },
]);

const rootElement = document.getElementById('root');
if (rootElement) {
  ReactDOM.createRoot(rootElement).render(<RouterProvider router={router} />);
}
