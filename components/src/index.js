import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';

const App = () => {
  return (
    <div className="ui container comments">
      <CommentDetail author="Sam" timeAgo="Today at 4:45PM" commentMessage="Sup" />
      <CommentDetail author="Not A Robot" timeAgo="Today at 4:45PM" commentMessage="Sup" />
      <CommentDetail author="John" timeAgo="Today at 4:45PM" commentMessage="Sup" />
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector('#root'));
