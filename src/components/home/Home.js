import React from 'react';
import { makeStyles, Typography, Link } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    marginLeft:20,
    marginRight: 20,
  },
  content:{

  },
  desc: {
    marginTop: 40,
  },
}));

const Home = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Typography className={classes.content}>
      Hello! My name is Nikita Skorokhod, I am a software engisneer. I have 4 years of experience working on projects as a software developer. 
      I have expertise in .NET/C#, React and Android development tools. I have a good understanding of processes on software projects and take
      the initiative in building processes. I always aim for a high-quality result.
      </Typography>
      <Typography className={classes.desc}>
      Here is my personal site. Site written on React with MaterialUI library.
      It's open source and you can check <Link 
        target="_blank" 
        rel="noopener noreferrer" 
        underline="always" 
        href="https://github.com/MykytaSkorokhod/my-home-page">repository</Link> of this site.
      </Typography>
    </div>
  );
};

export default Home;