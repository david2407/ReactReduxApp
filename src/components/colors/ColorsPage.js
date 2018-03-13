import React, {PorpTypes} from 'react';
import {Link} from 'react-router';

class ColorsPage extends React.Component {
  render() {
    return (
      <div>
        <button className='button'>Change color to blue</button>
        <button className='button'>Change color to red</button>
      </div>
    );
}
}

export default ColorsPage;
