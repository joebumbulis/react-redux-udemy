import React from 'react';
import ReactDOM from 'react-dom';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';
import faker from 'faker';

const App = () => {
 return (
   <div className="ui container comments">
     <ApprovalCard>
       <CommentDetail
         author="Sam"
         timeAgo="Today at 4:45PM"
         content="Nice blog post"
         img={faker.image.avatar()}
       />
    </ApprovalCard>
    <ApprovalCard>
       <CommentDetail
         author="Quincy"
         timeAgo="Today at 2:00AM"
         content="Tis gud"
         img={faker.image.avatar()}
       />
    </ApprovalCard>
    <ApprovalCard>
       <CommentDetail
         author="Joe"
         timeAgo="Yesterday at 6:45PM"
         content="Needs quaLITY"
         img={faker.image.avatar()}
       />
    </ApprovalCard>
    <ApprovalCard>
       <CommentDetail
         author="Britt"
         timeAgo="Yesterday at 1:45PM"
         content="More qanTITY"
         img={faker.image.avatar()}
       />
   </ApprovalCard>

    </div>
 )
};

ReactDOM.render(<App />, document.querySelector('#root'))
