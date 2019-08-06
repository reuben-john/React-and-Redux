import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';

const App = () => {
  return (
    <div className="ui container comments">
      <ApprovalCard>
        <CommentDetail
          author="Sam"
          timeAgo="Today at 4:45PM"
          commentMessage="Sup"
          avatar={faker.image.avatar()}
        />
      </ApprovalCard>
      <CommentDetail
        author="Not A Robot"
        timeAgo="Today at 4:45PM"
        commentMessage="Sup"
        avatar={faker.image.avatar()}
      />
      <CommentDetail
        author="John"
        timeAgo="Today at 4:45PM"
        commentMessage="Sup"
        avatar={faker.image.avatar()}
      />
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector('#root'));
