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

export default class Map extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        map: {},
      loaded: false
    }
  }

  componentDidMount() {
    getData('map/')
      .then((json) => {
        this.setState({
          map: json,
          loaded: true
        })
      })
  }

  render() {
    const { map, loaded } = this.state;

    if (!loaded) return (<div>Map</div>);

    return (
      <div>
        <h1>Where Our Students Work</h1>
        <p>{map}</p>
      </div>
    )
  }

}