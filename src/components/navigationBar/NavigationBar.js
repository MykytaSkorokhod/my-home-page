import React from 'react';
import { grey } from '@material-ui/core/colors';
import Tab from '@material-ui/core/Tab';
import Tabs from '@material-ui/core/Tabs';
import Slide from '@material-ui/core/Slide';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import GitHubIcon from '@material-ui/icons/GitHub';
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import DescriptionIcon from '@material-ui/icons/Description';
import ListAltIcon from '@material-ui/icons/ListAlt';
import AppsIcon from '@material-ui/icons/Apps';
import HomeIcon from '@material-ui/icons/Home';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import { goHome, goBlog, goStack, goProjects } from '../../actions/navigations';
import { connect } from 'react-redux';
import { navigationTabs } from '../../constants';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  title: {
    [theme.breakpoints.down('md')]: {
      flexGrow: 1,
    },
  },
  navigation: {
    flexGrow: 1,
    [theme.breakpoints.down('md')]: {
      display: "none",
    },
  },
  bottomNavigation: {
    backgroundColor: grey[400],
    [theme.breakpoints.up('lg')]: {
      display: "none",
    },
  },
  sideButtons: {
  },
  sideIcon: {
    marginLeft: '3px',
    marginRight: '3px',
  },
}));

const HideOnScroll = props => {
  const {
    children,
  } = props;

  const trigger = useScrollTrigger();

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

const NavigationBar = props => {
  const {
    dispatchGoHome,
    dispatchGoBlog,
    dispatchGoStack,
    dispatchGoProjects,
    contentValue,
  } = props;
  const classes = useStyles();

  const handleChange = (event, newValue) => {
    switch (newValue) {
      case navigationTabs[0].value:
        dispatchGoHome();
        break;
      case navigationTabs[1].value:
        dispatchGoBlog();
        break;
      case navigationTabs[2].value:
        dispatchGoStack();
        break;
      case navigationTabs[3].value:
        dispatchGoProjects();
        break;

      default:
        dispatchGoHome();
        break;
    }
  };

  return (
    <div>
      <HideOnScroll {...props}>
        <AppBar className={classes.root}>
          <Toolbar>
            <Typography className={classes.title} variant="h6">Mykyta's Home Page</Typography>
            <Tabs
              className={classes.navigation}
              value={contentValue}
              onChange={handleChange}
              centered
            >
              <Tab disableRipple={true} label="Home" icon={<HomeIcon />} />
              <Tab disableRipple={true} label="Blog" icon={<DescriptionIcon />} />
              <Tab disableRipple={true} label="Skills stack" icon={<ListAltIcon />} />
              <Tab disableRipple={true} label="Projects" icon={<AppsIcon />} />
            </Tabs>
            <div className={classes.sideButtons}>
              <IconButton
                className={classes.sideIcon}
                target="_blank" rel="noopener noreferrer"
                color="inherit"
                href="https://github.com/MykytaSkorokhod">
                <GitHubIcon />
              </IconButton>
              <IconButton
                className={classes.sideIcon}
                target="_blank" rel="noopener noreferrer"
                color="inherit"
                href="https://www.linkedin.com/in/mykyta-skorokhod-b2004b1a7">
                <LinkedInIcon />
              </IconButton>
            </div>
          </Toolbar>
        </AppBar>
      </HideOnScroll>
      <Toolbar />
      <BottomNavigation
        value={contentValue}
        onChange={handleChange}
        showLabels
        className={classes.bottomNavigation}
      >
        <BottomNavigationAction disableRipple={true} label="Home" icon={<HomeIcon />} />
        <BottomNavigationAction disableRipple={true} label="Blog" icon={<DescriptionIcon />} />
        <BottomNavigationAction disableRipple={true} label="Skills stack" icon={<ListAltIcon />} />
        <BottomNavigationAction disableRipple={true} label="Projects" icon={<AppsIcon />} />
      </BottomNavigation>
    </div>
  );
}

const mapStateToProps = state => ({
  contentName: state.navigation.name,
  contentValue: state.navigation.value,
});

const mapDispatchToProps = dispatch => ({
  dispatchGoHome: () => {
    dispatch(goHome());
  },
  dispatchGoBlog: () => {
    dispatch(goBlog());
  },
  dispatchGoStack: () => {
    dispatch(goStack());
  },
  dispatchGoProjects: () => {
    dispatch(goProjects());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(NavigationBar);