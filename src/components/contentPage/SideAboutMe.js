import React from 'react';
import { makeStyles } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  about: {
    marginTop: '20px',
    marginBottom: '20px',
    marginLeft: 'auto',
    marginRight: 'auto',
    width: '256px',
  },
  avatar: {
    width: '256px',
    height: '256px',
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
      <img className={classes.avatar} src="avatar.png" alt="" />
      <Typography className={classes.text}>
        Hi! My name Mykyta(Nikita) Skorokhod. I am C# developer on .NET ecosystem.
      </Typography>
    </div>
  );
}

export default SideAboutMe;