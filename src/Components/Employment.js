import React from "react";
import getData from '../util/getData';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default class Employment extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      employment: {},
      loaded: false
    }
  }

  componentDidMount() {
    getData('employment/')
      .then((json) => {
        this.setState({
          employment: json,
          loaded: true
        })
      })
  }

  render() {
    const { employment, loaded } = this.state;

    if (!loaded) return (<div>Employment</div>);

    return (
      <div>
        <div>
          <h1>{employment.introduction.title}</h1>
          {employment.introduction.content.map((p) =>
            <div>
              <h3>{p.title}</h3>
              <p>{p.description}</p>
            </div>
          )}
        </div>

        <h1>{employment.degreeStatistics.title}</h1>
        <div>
          <Box sx={{ flexGrow: 1 }}>
            <Grid
              container
              spacing={3}
              direction="row"
            >
              {employment.degreeStatistics.statistics.map((p) =>
                <Grid item xs={3}>
                  <Item className="item">
                    <CardContent>
                      <Typography gutterBottom variant="body1" component="div">
                        {p.value}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {p.description}
                      </Typography>
                    </CardContent>
                  </Item>
                </Grid>
              )}
            </Grid>
          </Box>
        </div>

        <div>
          <h1>{employment.employers.title}</h1>
          {employment.employers.employerNames.map((p) =>
            <p>{p}</p>
          )}
        </div>
        <div>
          <h1>{employment.careers.title}</h1>
          {employment.careers.careerNames.map((p) =>
            <p>
              {p}
            </p>
          )}
        </div>
        <h1>Where Our Students Work</h1>
        <h3>To view employment and coop history of our students, click below.</h3>

      </div>
    )
  }

}

