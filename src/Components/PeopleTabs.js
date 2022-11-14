import React from 'react'
import { Tab } from 'semantic-ui-react'
import getData from '../util/getData';
import People from './People';

//the default code is not dynamic, need to make it dynamic 
/*const panes = [
  { menuItem: 'Tab 1', render: () => <Tab.Pane>Tab 1 Content</Tab.Pane> },
  { menuItem: 'Tab 2', render: () => <Tab.Pane>Tab 2 Content</Tab.Pane> },
  { menuItem: 'Tab 3', render: () => <Tab.Pane>Tab 3 Content</Tab.Pane> }
]

const TabExampleBasic = () => <Tab panes={panes} />

export default TabExampleBasic*/

//change into a class!
export default class PeopleTabs extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loaded:false,
            people:{}
        }
    }

    componentDidMount() {
        getData('people/')
            .then((json) => {
                this.setState({
                    people:json,
                    loaded:true
                })
            })
    }

    render() {
        const {people, loaded} = this.state;

        const panes = [
            { menuItem: 'Faculty', render: () => <Tab.Pane>
                <People title="Faculty" pepGroup={people.faculty} key="1"/>
                </Tab.Pane> },
            { menuItem: 'Staff', render: () => <Tab.Pane>
                <People title="Staff" pepGroup={people.staff} key="2"/>
                </Tab.Pane> }          
        ]
        const color = 'green';

        if(!loaded) return (<div><h1>Our People Loading...</h1></div>);

        return (
            <div>
                <h1>{people.title}</h1>
                <h3>{people.subTitle}</h3>
                <Tab panes={panes} />
            </div>
        );
    }
}