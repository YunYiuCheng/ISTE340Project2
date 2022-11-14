import React from "react";
import getData from '../util/getData';

export default class Resources extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      resources: {},
      loaded: false
    }
  }

  componentDidMount() {
    getData('resources/')
      .then((json) => {
        this.setState({
          resources: json,
          loaded: true
        })
      })
  }

  render() {
    const { resources, loaded } = this.state;

    if (!loaded) return (<div>Resources </div>);

    return (
      <div>
        <div>
          <h3>{resources.title}</h3>
          <h5>{resources.subTitle}</h5>
          <h3>{resources.studyAbroad.title}</h3>
          <h5>{resources.studyAbroad.description}</h5>
          {resources.studyAbroad.places.map((p) =>
            <div>
              <h3>{p.nameOfPlace}</h3>
              <h5>{p.description}</h5>
            </div>
          )}
        </div>

        <div>
          <h3>{resources.studentServices.title}</h3>
          <h3>{resources.studentServices.academicAdvisors.title}</h3>
          <h5>{resources.studentServices.academicAdvisors.description}</h5>
          <h5>{resources.studentServices.professonalAdvisors.title}</h5>
          {resources.studentServices.professonalAdvisors.advisorInformation.map((p) =>
            <div>
              <h5>{p.name}</h5>
              <h5>{p.department}</h5>
              <h5>{p.email}</h5>
            </div>
          )}
          <h5>{resources.studentServices.facultyAdvisors.title}</h5>
          <h5>{resources.studentServices.facultyAdvisors.description}</h5>
        </div>
        <div>
          <h5>{resources.tutorsAndLabInformation.title}</h5>
        </div>
        <div>
          <h5>{resources.studentAmbassadors.title}</h5>
        </div>
        <div>
          <h5>Forms</h5>
        </div>
        <div>
          <h5>{resources.coopEnrollment.title}</h5>
        </div>
      </div>
    )
  }
}
