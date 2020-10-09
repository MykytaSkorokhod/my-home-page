import React, { useMemo } from 'react';
import Home from '../home/Home';
import { makeStyles } from '@material-ui/core';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import { navigationTabs } from '../../constants';
import { connect } from 'react-redux';
import SideAboutMe from './SideAboutMe';
import Blog from '../blog/Blog';
import Stack from '../stack/Stack';
import Projects from '../projects/Projects';

const useStyles = makeStyles((theme) => ({
  content: {
    marginTop: '15px',
  },
  about: {
    marginTop: '20px',
    marginBottom: '20px',
    marginLeft: 'auto',
    marginRight: 'auto',
    width: '256px'
  },
  avatar: {
  }
}));

const ContentPage = props => {
  const {
    contentName,
  } = props;
  const classes = useStyles();

  const selectedContent = useMemo(() => {
    switch (contentName) {
      case navigationTabs[0].name:
        return (<Home />);
      case navigationTabs[1].name:
        return (<Blog />);
      case navigationTabs[2].name:
        return (<Stack />);
      case navigationTabs[3].name:
        return (<Projects />);
      default:
        return (<Home />);
    }
  }, [contentName]);

  return (
    <Grid
      className={classes.content}
      container
    >
      <Grid
        className={classes.content}
        item
        xs={12} md={8} lg={9}
      >
        <Container>
          {selectedContent}
        </Container>
      </Grid>
      <Grid
        item
        xs={12} md={4} lg={3}
      >
        <SideAboutMe />
      </Grid>
    </Grid>
  );
}

const mapStateToProps = state => ({
  contentName: state.navigation.name,
});

export default connect(mapStateToProps)(ContentPage);