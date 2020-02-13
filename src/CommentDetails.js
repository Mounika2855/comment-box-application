import React from 'react';
import faker from 'faker';

const CommentDetails = props => {
    console.log(props);
    return (
        <div>
            <div className="comment">
                <a href="/" className="avatar">
                    <img alt="avatar" src={faker.image.avatar()} />
                </a>
                < div className="content">
                    <a href="/" className="author">
                        {props.author}
                    </a>
                    <div className="metadata">
                        <span className="data">{props.timeGo}</span>
                    </div>
                    <div className="text">{props.textName}</div>
                </div>
            </div>
        </div>
    )
}
export default CommentDetails;