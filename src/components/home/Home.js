import React from 'react';
import { Typography, Link } from '@material-ui/core';

const Home = () => {
  return (
    <div>
      <Typography>
        Here is my personal site. Site written on React with MaterialUI library.
        Its open source and you can check <Link target="_blank" rel="noopener noreferrer" underline="always" href="https://github.com/MykytaSkorokhod/my-home-page">repository</Link> of this site.
      </Typography>
    </div>
  );
};

export default Home;