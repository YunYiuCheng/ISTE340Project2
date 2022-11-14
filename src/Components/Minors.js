import React from "react";
import getData from '../util/getData';
import MinorsModal from "./MinorsModal";
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


export default class Minors extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      minors: {},
      loaded: false
    }
  }

  componentDidMount() {
    getData('minors/')
      .then((json) => {
        this.setState({
          minors: json,
          loaded: true
        })
      })
  }

  render() {
    const { minors, loaded } = this.state;

    if (!loaded) return (<div>Minors </div>);

    return (
      <div>
        <h1>Minors</h1>
        <div>
          <Box sx={{ flexGrow: 1 }}>
            <Grid
              container
              spacing={3}
              direction="row"
            >
              {minors.UgMinors.map((p) =>
                <Grid item xs={3}>
                  <Item className="item">
                    <CardContent>
                      <Typography gutterBottom variant="body1" component="div">
                        {p.title}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        <MinorsModal {...p} />
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
