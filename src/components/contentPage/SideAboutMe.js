import React from 'react';
import { makeStyles } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  about: {
    marginTop: '20px',
    marginBottom: '20px',
    marginLeft: 'auto',
    marginRight: 'auto',
    width: '256px'
  },
  avatar: {
  },
  text: {
    marginLeft: '5px',
    marginRight: '5px',
  },
}));

const SideAboutMe = props => {
  const classes = useStyles();

  return (
    <div className={classes.about}>
      <img
        alt="avatar"
        className={classes.avatar}
        src='https://avatars0.githubusercontent.com/u/53902084?s=460&u=d7c069a3241d26483d36c8e382992f775fbe2533&v=4' />
      <Typography className={classes.text}>
        Hi! My name Mykyta(Nikita) Skorokhod. I am C# developer on .NET ecosystem.
      </Typography>
    </div>
  );
}

export default SideAboutMe;