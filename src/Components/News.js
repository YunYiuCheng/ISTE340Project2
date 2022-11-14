import React from "react";
import getData from '../util/getData';

export default class News extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      news: {},
      loaded: false
    }
  }

  componentDidMount() {
    getData('news/')
      .then((json) => {
        this.setState({
          news: json,
          loaded: true
        })
      })
  }

  render() {
    const { news, loaded } = this.state;
    if (!loaded) return (<div>News </div>);

    return (
      <div>
        {news.older.map((p) =>
          <div>
            <h3>{p.date}</h3>
            <h5>{p.title}</h5>
            <h5>{p.description}</h5>
          </div>
        )}
      </div>
    )
  }

}