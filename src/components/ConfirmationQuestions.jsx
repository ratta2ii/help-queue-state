import React from 'react';
import PropTypes from 'prop-types';


function ConfirmationQuestions(props) {
  return (
    <div>
      <p>Have you gone through all the steps on the Learn How to Program debugging lesson?</p>
      <button onClick={props.onSubmitQuestionsAnswered}>Yes</button>
    </div>
  );
}

ConfirmationQuestions.propTypes = {
  onSubmitQuestionsAnswered: PropTypes.func
};

export default ConfirmationQuestions;  