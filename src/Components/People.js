import React from "react";
import BasicModal from './PeopleModal';

export default class People extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      people: props.pepGroup,
      title: props.title
    }
  }

  render() {
    const { people, title } = this.state;
    const cName = "peopleListItem" + title;
    return (
      <div>
        <div>
          <h2>{title}</h2>
          <div className="peopleList">
            {people.map((p) =>
              <div className={cName}>
                <img src={p.imagePath} style={{ maxWidth: "150px" }} alt="person" />
                <BasicModal {...p} />
              </div>
            )}
          </div>
        </div>
      </div>
    )
  }
}