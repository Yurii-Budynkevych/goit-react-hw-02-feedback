import React from 'react';
import './Section.css';

class Section extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  feedbackCollector = e => {
    this.setState(prevState => ({
      [e.target.name]: prevState[e.target.name] + 1,
    }));
  };

  countTotalFeedback = () =>
    this.state.good + this.state.bad + this.state.neutral;

  countPositiveFeedbackPercentage = () => {
    const result = (
      (this.state.good /
        (this.state.good + this.state.bad + this.state.neutral)) *
      100
    ).toFixed(1);

    if (!isNaN(result)) {
      return result;
    } else {
      return 'No data about current';
    }
  };

  render() {
    const { good, bad, neutral } = this.state;

    return (
      <section>
        <h1>Please leave feedback</h1>
        <ul>
          <li>
            <button type="button" name="good" onClick={this.feedbackCollector}>
              Good
            </button>
          </li>
          <li>
            <button
              type="button"
              name="neutral"
              onClick={this.feedbackCollector}
            >
              Neutral
            </button>
          </li>
          <li>
            <button type="button" name="bad" onClick={this.feedbackCollector}>
              Bad
            </button>
          </li>
        </ul>
        <h2>Statistics</h2>
        <ul>
          <li>Good: {good}</li>
          <li>Neutral: {neutral}</li>
          <li>Bad: {bad}</li>
          <li>Total: {this.countTotalFeedback()}</li>
          <li>Positive feedback: {this.countPositiveFeedbackPercentage()} %</li>
        </ul>
      </section>
    );
  }
}
export default Section;
