import React from 'react';
import './App.css';
import CommentDetails from './CommentDetails';
import ApprovalCard from './ApprovalCard';

const App = () => {
  return (
    <div className="ui container comments">
      <ApprovalCard>
        <div>
          <h4>Warning!</h4>
          Are you sure you want to do this?
        </div>
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetails author="Mouni" timeGo="Today at 6:00AM" textName="Nice blog!" />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetails author="bhanu" timeGo="Yesterday at 6:00PM" textName="Beautyful blog!" />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetails author="Maggi" timeGo="Monday 7:00AM" textName="Be blog happy!" />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetails author="Mona" timeGo="Firday 3:00PM" textName="Nice to have a blog!" />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetails author="Mint" timeGo="Thursday  1:00AM" textName="Good  blog!" />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetails author="pinky" timeGo="Wednesday 4:00AM" textName="My blog!" />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetails author="pink" timeGo="Sunday at 9:00AM" textName="Extraordinary blog!" />
      </ApprovalCard>
    </div>
  );
}

export default App;
