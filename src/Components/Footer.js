import React from "react";
import getData from '../util/getData';

export default class Footer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      footer: {},
      loaded: false
    }
  }

  componentDidMount() {
    getData('footer/')
      .then((json) => {
        this.setState({
          footer: json,
          loaded: true
        })
      })
  }

  render() {
    const { footer, loaded } = this.state;

    if (!loaded) return (<div>Footer </div>);

    return (
      <div>
        <h1>{footer.social.title}</h1>
        
        <h3>{footer.social.tweet}</h3>
        {footer.quickLinks.map((p) =>
          <div>
            <h3>{p.title}</h3>
            <h3>{p.href}</h3>
          </div>
        )}
        <h3>{footer.copyright.title}</h3>
        <h3>{footer.copyright.html}</h3>
        <h3>{footer.news}</h3>

      </div>
    )
  }

}