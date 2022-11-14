import React from "react";
import getData from '../util/getData';
import ResearchModal from "./ResearchModal";
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';


const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));


export default class Research extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      research: {},
      loaded: false
    }
  }

  componentDidMount() {
    getData('research/')
      .then((json) => {
        this.setState({
          research: json,
          loaded: true
        })
      })
  }

  render() {
    const { research, loaded } = this.state;

    if (!loaded) return (<div>Research </div>);

    return (
      <div>
        <h1>Faculty Research: Areas of Interest</h1>
        <Box sx={{ flexGrow: 1 }}>
          <Grid
            container
            spacing={3}
            direction="row"
          >
            {research.byInterestArea.map((x) =>
              <Grid item xs={3}>
                <Item>
                  <CardContent>
                    <Typography gutterBottom variant="body1" component="div">
                      {x.areaName}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      <ResearchModal {...x} />
                    </Typography>
                  </CardContent>
                </Item>
              </Grid>
            )}
          </Grid>
        </Box>
        <hr />
        <h1>Faculty Research: Lookup by Faculty</h1>
        <Box sx={{ flexGrow: 1 }}>
          <Grid
            container
            spacing={3}
            direction="row"
          >
            {research.byFaculty.map((p) =>
              <Grid item xs={3}>
                <Item>
                  <CardContent>
                    <Typography gutterBottom variant="body1" component="div">
                      {p.facultyName}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      <ResearchModal {...p} />
                    </Typography>
                  </CardContent>
                </Item>
              </Grid>
            )}
          </Grid>
        </Box>
      </div>
    )
  }
}

