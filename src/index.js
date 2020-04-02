import React from 'react';
import ReactDOM from 'react-dom';

const Main = () => {
  console.log(images);
  return (
    <div>Hello world!
      <img src={process.env.PUBLIC_URL + '/img/Lely_Venus_BM_1963.jpg'} />
    </div>
  );
}

ReactDOM.render(<Main />, document.getElementById('root'));