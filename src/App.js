import React from 'react';
import getData from './util/getData';
import Degrees from './Components/Degrees'
import Minors from './Components/Minors'
import Employment from './Components/Employment'
import PeopleTabs from './Components/PeopleTabs'
import Research from './Components/Research'
import Resources from './Components/Resources'
import News from './Components/News'
import Footer from './Components/Footer'
import Map from './Components/Map';
import './App.css';
import 'semantic-ui-css/semantic.min.css'

export default class App extends React.Component {
  //App.js->PeopleTabs(getData{people})->AllPeople{faculty,staff}->PeopleModal{individual}
  constructor(props) {
    //Why? this allows me to write the keyboard this
    super(props);
    this.state={
      about:{},
      loaded:false
    }
  }

  render() {
    //always, pull in the state
    const {loaded, about} = this.state;

    //first run, no data!
    if(!loaded) return(<div><h1>Loading...</h1></div>);

    //after we have data!
    /*
        <hr/>
        <Degrees/>
        <hr/>
        <Minors/>
        <hr/>
        <Employment/>
        <hr/>
        <PeopleTabs/>
        <hr/>
        <Research/>
        <hr/>
        <Resources/>
        <hr/>
        <Footer/>
      
    */
    return(
      <div className="App">
        <h1>Information Scieneces & Technologies @ RIT</h1>
        <div>
          <h2>{about.title}</h2>
          <h4>{about.description}</h4>
        </div>
        <div>
          <div>{about.quote}</div>
          <div>--{about.quoteAuthor}</div>
        </div>        

        <hr/>
        <Degrees/>
        <hr/>
        <Minors/>
        <hr/>
        <Employment/>
        <hr/>
        <PeopleTabs/>
        <hr/>
        <Research/>
        <hr/>
        <Resources/>
        <hr/>
        <Footer/>

        </div>
    )
  }

  componentDidMount() {
    //mounting order - 1) constructor 2) getDerviedStateFromProps 3)render 4)componentDidMount
    //if we are here, the page drew 'loading...'
    getData('about/')
      .then(json => {
        this.setState({
          about:json,
          loaded:true
        })
      })
  }

}
