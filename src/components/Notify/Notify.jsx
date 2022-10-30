import { PropTypes } from 'prop-types';
import './Notify.css';

const Notification = ({ message }) => {
  return <p className="notify">{message}</p>;
};
export default Notification;

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};
