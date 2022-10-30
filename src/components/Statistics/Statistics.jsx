import { PropTypes } from 'prop-types';
import './Statistics.css';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <ul className="stats">
      <li>Good: {good}</li>
      <li>Neutral: {neutral}</li>
      <li>Bad: {bad}</li>
      <li>Total: {total()}</li>
      <li>Positive feedback: {positivePercentage()} %</li>
    </ul>
  );
};
export default Statistics;

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.func.isRequired,
  positivePercentage: PropTypes.func.isRequired,
};
