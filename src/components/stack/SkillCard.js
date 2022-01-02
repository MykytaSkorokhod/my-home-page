import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import { 
  CardActions,
  CardContent,
  CardMedia,
  Collapse,
  IconButton,
  Typography } from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const useStyles = makeStyles((theme) => ({
  root: {
    width: 300,
    marginRight: "auto",
    marginLeft: "auto",
  },
  title: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    fontSize: 34,
  },
  media: {
    width: 280,
    height: 280,
    margin: "auto",
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
}));

const SkillCard = props => {
  const {
    skillCategory,
    skillName,
    skillImagePath,
    skillDescription,
    skillText,
    skillExperience,
  } = props;

  const classes = useStyles();
  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card className={classes.root}>
      <div className={classes.title}>
        <Typography variant="h2">
          {skillName}
        </Typography>
        <Typography variant="subtitle1" color="textSecondary">
          {skillCategory}
        </Typography>
      </div>
      <CardMedia
        component="img"
        className={classes.media}
        src={skillImagePath}
        title={skillName}
        alt={skillName}
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          {skillDescription}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography>
            {skillText}
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}

export default SkillCard;