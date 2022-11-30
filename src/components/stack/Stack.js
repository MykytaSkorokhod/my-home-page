import React from 'react';
import { Grid, makeStyles, Typography } from '@material-ui/core';
import { skills } from "../../constants";
import SkillCard from './SkillCard';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  gridItem: {
    marginRight: "auto",
    marginLeft: "auto",
  },
  card: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  textDescription: {
    margin: 15
  },
}));

const Stack = () => {
  const classes = useStyles();

  // useMemo used for future, 'skills' const will be fetched from server when backend be done
  const cadrsComponents = skills.map(skill => {
      return (
        <Grid className={classes.gridItem} key={skill.id} item xs={12} sm={12} md={6} lg={4} xl={3}>
          <SkillCard 
            className={classes.card}
            skillCategory={skill.skillCategory}
            skillName={skill.skillName}
            skillDescription={skill.skillDescription}
            skillText={skill.skillText}
            skillImagePath={skill.skillImagePath} 
          />
        </Grid>
      )
    });

  return (
    <div className={classes.root}>
      <Typography className={classes.textDescription}>
        This is not a complete list of technologies that I can use. But these are the ones in which I can guarantee a solid expertise.
      </Typography>
      <Grid container spacing={3}>
        {cadrsComponents}
      </Grid>
    </div>
  );
};

export default Stack;