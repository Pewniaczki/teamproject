import axios from 'axios';
import { useEffect } from 'react';

import { TopMenu } from '../../components/TopMenu/TopMenu';

export const HomePage = () => {
  useEffect(() => {
    const get = async () => {
      try {
        const response = await axios.get(
          'https://team-project-backend-uvbx.onrender.com/get'
        );

        return response.data;
      } catch (error) {
        console.error(error);
      }
    };

    get()
      .then((r) => console.log(r))
      .catch((e) => console.error(e));
  }, []);
  return (
    <div>
      <p>Welcome to the Home Page</p>
      <TopMenu />
    </div>
  );
};
