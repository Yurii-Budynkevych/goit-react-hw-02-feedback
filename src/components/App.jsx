import React from 'react';
import Section from './Section/Section';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Statistics from './Statistics/Statistics';
import Notification from './Notify/Notify';
import { TbCoffeeOff } from 'react-icons/tb';

export class App extends React.Component {
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

    if (isNaN(result)) {
      return 'No data about current';
    } else {
      return result;
    }
  };
  render() {
    const { good, bad, neutral } = this.state;
    const feed = this.countTotalFeedback();
    return (
      <>
        <Section title="Please leave feedback">
          <FeedbackOptions onLeaveFeedback={this.feedbackCollector} />
        </Section>
        {feed ? (
          <Section title="Statistics">
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={this.countTotalFeedback}
              positivePercentage={this.countPositiveFeedbackPercentage}
            />
          </Section>
        ) : (
          <div>
            <TbCoffeeOff
              style={{ fill: 'brown', display: 'inline-', width: '50px' }}
            />
            <Notification message="There is no feedback" />
          </div>
        )}
      </>
    );
  }
}
