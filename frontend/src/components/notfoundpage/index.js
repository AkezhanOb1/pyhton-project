import React, {Component} from 'react';
import {Message, Image} from 'semantic-ui-react';
import './styles.css';

class NotFoundPage extends Component {
  render() {
    return (
      <div>
        <div className="not-found-page">
          <Message>
            <Message.Content>
              <Message.Header>404 - Page Not Found</Message.Header>
              Page does not exist.
            </Message.Content>
          </Message>
        </div>
        <Image
          className="not-found-page-img"
          src="https://media0.giphy.com/media/nNxT5qXR02FOM/giphy.gif"
          centered
        />
      </div>
    );
  }
}
export default NotFoundPage;
