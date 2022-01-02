import React, { useMemo } from 'react';
import { Grid, makeStyles } from '@material-ui/core';
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
}));

const Stack = () => {
  const classes = useStyles();

  const skills = [
    {
      id: 1,
      skillCategory: "Programm language",
      skillName: "C#",
      skillImagePath: "media/c_sharp.png",
      skillDescription: "C# is common language for compile IL for .net runtime",
      skillText: "Have good knowledge of C# up to version 9. In projects, I most often used versions 6-8. I really like this language. It is a pleasure to write code on it that fully implements SOLID patterns.",
    },
    {
      id: 2,
      skillCategory: "Programm language",
      skillName: "JS",
      skillImagePath: "media/java_script.png",
      skillDescription: "JavaScript is native web language",
      skillText: "Have good knowledge of JS up to ES8. I like the functional style writing JavaScript code. I can't say that I like this language, but I can use it.",
    },
    {
      id: 3,
      skillCategory: "Platform",
      skillName: ".NET",
      skillImagePath: "media/dotnet.png",
      skillDescription: ".NET Framework, .NET Core, Mono etc.",
      skillText: "Know how works GC and CLR. Most of the standard library has been used by me in projects. Such as Collections, IO, Socket, LINQ, Reflection, Threadting. Apart from the primitives that I know by heart :)"
    },
  ];

  // useMemo used for future, 'skills' const will be fetched from server when backend be done
  const cadrsComponents = useMemo(() => {
    return skills.map(skill => {
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
    })
  }, [skills, classes])

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        {cadrsComponents}
      </Grid>
    </div>
  );
};

export default Stack;