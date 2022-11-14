import React from "react";
import getData from '../util/getData';

export default class Courses extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            courses:{},
            loaded:false
        }
    }

    componentDidMount() {
        getData('courses/')
            .then((json) => {
                this.setState({
                    courses:json,
                    loaded:true
                })
            })
    }
    
    render() {
        const {courses, loaded} = this.state;
        if(!loaded) return (<div>Courses </div>);

        return(
            <div>
                {courses.map( (p) =>
                    <div>
                        <h3>{p.courseID}</h3>
                        <h5>{p.title}</h5>
                    </div>
                )}
            </div>
        )
    }

}