import React, { useMemo } from 'react';
import { Grid, makeStyles, Typography } from '@material-ui/core';
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

  const skills = [
    {
      id: 1,
      skillCategory: "Programm language",
      skillName: "C#",
      skillImagePath: "media/c_sharp.png",
      skillDescription: "C# is common language for compile IL for .net runtime",
      skillText: "I love programming, and this language give me opportunity to easily write clean code.",
    },
    {
      id: 2,
      skillCategory: "Programm language",
      skillName: "JS",
      skillImagePath: "media/java_script.png",
      skillDescription: "Web JavaScript",
      skillText: "I can't call myself a fan of JS, but I appreciate it because it's a very powerful instrument for front-end development.",
    },
    {
      id: 3,
      skillCategory: "Platform",
      skillName: ".NET",
      skillImagePath: "media/dotnet.png",
      skillDescription: ".NET Framework, .NET Core, .NET 5+",
      skillText: "I have a lot of experience in projects using .NET Framework 4.7+, .NET Core 2.1+ and .NET 5. Currently I run a pet project on .NET 7"
    },
    {
      id: 4,
      skillCategory: "Framework",
      skillName: "ASP.NET",
      skillImagePath: "media/asp.png",
      skillDescription: "RESTful API and MVC web applications",
      skillText: "I have the most experience in creating a monolithic Web API in connection with a JS front-end or as a separate service. But I also have experience in creating MVC and microservices on ASP.NET."
    },
    {
      id: 5,
      skillCategory: "Framework",
      skillName: "React.JS",
      skillImagePath: "media/react.png",
      skillDescription: "Front-end framework for building SPA",
      skillText: "Most of my experience in creating front-end applications is with this framework. I can create an admin page, a portal or an online store on the front end. I have experience working with MUI, Redux and other smaller libraries."
    },
    {
      id: 6,
      skillCategory: "Database",
      skillName: "Databases",
      skillImagePath: "media/database.png",
      skillDescription: "SQL/NoSQL databses",
      skillText: "SQL Server, PostgreSQL, MySQL, MongoDB. I have a clear understanding of the capabilities of databases and how to use native tools of various databases."
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