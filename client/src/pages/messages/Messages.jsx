import React from "react";
import "./Messages.scss";
import { Link } from "react-router-dom";

const Messages = () => {
  const currentUser = {
    id: 1,
    username: "John Doe",
    isSeller: true,
  };

  const message =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, animi eaque, est officia blanditiis explicabo culpa, ut doloribus amet itaque quas excepturi non! Ratione, quam voluptate sed eaque tempore cupiditate.";

  return (
    <div className="messages">
      <div className="container">
        <div className="title">
          <h1>Messages</h1>
        </div>
        <table>
          <tr>
            <th>Buyer</th>
            <th>Last Message</th>
            <th>Date</th>
            <th>Action</th>
          </tr>
          <tr className="active">
            <td>John Doe</td>
            <td>
              <Link to="/message/1" className="link">
                {message.substring(0, 100)}
              </Link>
              ...
            </td>
            <td>1 Day Ago</td>
            <td>
              <button>Mark As Read</button>
            </td>
          </tr>
          <tr className="active">
            <td>John Doe</td>
            <td>
              <Link to="/message/1" className="link">
                {message.substring(0, 100)}
              </Link>
              ...
            </td>
            <td>1 Day Ago</td>
            <td>
              <button>Mark As Read</button>
            </td>
          </tr>
          <tr>
            <td>John Doe</td>
            <td>
              <Link to="/message/1" className="link">
                {message.substring(0, 100)}
              </Link>
              ...
            </td>
            <td>1 Day Ago</td>
          </tr>
          <tr>
            <td>John Doe</td>
            <td>
              <Link to="/message/1" className="link">
                {message.substring(0, 100)}
              </Link>
              ...
            </td>
            <td>1 Day Ago</td>
          </tr>
          <tr>
            <td>John Doe</td>
            <td>
              <Link to="/message/1" className="link">
                {message.substring(0, 100)}
              </Link>
              ...
            </td>
            <td>1 Day Ago</td>
          </tr>
          <tr>
            <td>John Doe</td>
            <td>
              <Link to="/message/1" className="link">
                {message.substring(0, 100)}
              </Link>
              ...
            </td>
            <td>1 Day Ago</td>
          </tr>
          <tr>
            <td>John Doe</td>
            <td>
              <Link to="/message/1" className="link">
                {message.substring(0, 100)}
              </Link>
              ...
            </td>
            <td>1 Day Ago</td>
          </tr>
        </table>
      </div>
    </div>
  );
};

export default Messages;
