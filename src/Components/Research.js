import React from "react";
import getData from '../util/getData';

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
        <div>
          {research.byInterestArea.map((p) =>
            <div>
              <h5>{p.areaName}</h5>
              {/*p.citations*/}
            </div>
          )}
        </div>
        
        <h1>Faculty Research: Lookup by Faculty</h1>
        <div>
          {research.byFaculty.map((p) =>
            <div>
              <h5>{p.areaName}</h5>
              {/*p.citations*/}
            </div>
          )}
        </div>
      </div>
    )
  }

}