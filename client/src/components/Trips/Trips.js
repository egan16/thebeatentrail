import { Component } from 'react';
import Trip from './Trip/Trip';


class Trips extends Component {
  constructor(props) {
    super(props);
    this.state = {
        
    };
  }

  render() {
    return (
      <div>
          <h1>Trips</h1>
          <Trip/>
          <Trip/>
      </div>
    );
  }
}

export default Trips;