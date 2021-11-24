//import logo from './logo.svg';
import './App.css';
import React from 'react';

import { Component } from 'react';
import Section from './component/Section/Section';
import Statistics from './component/Statistics/Statistics';
import Notification from './component/Notification/Notification';
import FeedbackOptions from './component/FeedbackOptions/FeedbackOptions';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  /*handleIncrement = () => {
    this.setState(prevState => ({
      value: prevState.value + 1,
    }));
  };*/
  handleIncrement = type => {
    this.setState(prevState => ({
      [type]: prevState[type] + 1,
    }));
  };

  //Object.values(this.state).reduce((acc, value) =>
  countTotalFeedback = () => {
    const feedbacksValues =
      Object.values(this.state);
    return feedbacksValues.reduce(
      (total, value) => total + value,
      0,
    );
  };

  countPositiveFeedbackPercentage =
    () => {
      const total =
        this.countTotalFeedback();
      const { good } = this.state;
      /*if (total === 0) {
          return 0;
        }
        return Math.round((good / total) * 100);
      }*/
      return total > 0
        ? Math.round(
            (good / total) * 100,
          )
        : 0;
    };

  render() {
    const { good, neutral, bad } =
      this.state;
    const totalFeedback =
      this.countTotalFeedback();
    return (
      <>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={this.state}
            onLeaveFeedback={
              this.handleIncrement
            }
          />
        </Section>

        {totalFeedback > 0 ? (
          <Section title="Statistics">
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              //options={this.state}
              total={this.countTotalFeedback()}
              positivePercentage={
                this.countPositiveFeedbackPercentage()
                  ? this.countPositiveFeedbackPercentage()
                  : 0
              }
            />
          </Section>
        ) : (
          <Notification />
        )}
      </>
    );
  }
}
export default App;
