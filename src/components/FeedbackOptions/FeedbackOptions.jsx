import './FeedbackOptions.css';

const FeedbackOptions = ({ onLeaveFeedback }) => {
  return (
    <ul className="btn-list">
      <li>
        <button
          className="good btn"
          type="button"
          name="good"
          onClick={onLeaveFeedback}
        >
          Good
        </button>
      </li>
      <li>
        <button
          className="neutral btn"
          type="button"
          name="neutral"
          onClick={onLeaveFeedback}
        >
          Neutral
        </button>
      </li>
      <li>
        <button
          className="bad btn"
          type="button"
          name="bad"
          onClick={onLeaveFeedback}
        >
          Bad
        </button>
      </li>
    </ul>
  );
};
export default FeedbackOptions;
