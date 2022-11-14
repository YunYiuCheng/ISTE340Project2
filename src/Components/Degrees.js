import * as React from 'react';
import getData from '../util/getData';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import DegreeModal from './DegreeModal';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default class Degrees extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      degrees: {},
      loaded: false
    }
  }

  componentDidMount() {
    getData('degrees/')
      .then((json) => {
        this.setState({
          degrees: json,
          loaded: true
        })
      })
  }

  render() {
    const { degrees, loaded } = this.state;

    if (!loaded) return (<div>Degrees </div>);

    //remove certificates
    { degrees.graduate.pop() }
    return (
      <div>
        <div className="uDegree">
          <h1>Our Undergraduate Degrees</h1>
          <Box sx={{ flexGrow: 1 }}>
            <Grid
              container
              spacing={3}
              direction="row"
            >
              {degrees.undergraduate.map((p) =>
                <Grid item xs={4}>
                  <Item className="item">
                    <CardContent>
                      <Typography gutterBottom variant="body1" component="div">
                        {p.title}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {p.description}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        <DegreeModal {...p} />
                      </Typography>
                    </CardContent>
                  </Item>
                </Grid>
              )}
            </Grid>
          </Box>
        </div>

        <div>
          <h1>Our Graduate Degrees</h1>

          <Box sx={{ flexGrow: 1 }}>
            <Grid
              container
              spacing={3}
              direction="row"
            >
              {degrees.graduate.map((p) =>
                <Grid item xs={4}>
                  <Item className="item">
                    <CardContent>
                      <Typography gutterBottom variant="body1" component="div">
                        {p.title}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {p.description}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        <DegreeModal {...p} />
                      </Typography>
                    </CardContent>
                  </Item>
                </Grid>
              )}
            </Grid>
          </Box>
        </div>
      </div>
    )
  }
}
