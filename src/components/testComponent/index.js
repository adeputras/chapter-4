import React from 'react';
import {
  useSampleDispatchContext,
  useSampleActions,
} from '../../contexts/sampleContext';

const TestComponent = () => {
  const dispatch = useSampleDispatchContext();
  const { setSample } = useSampleActions(dispatch);
  const clickButton = (e) => {
    e.preventDefault();
    setSample(true);
  };
  return (
    <div>
      <div className="container">
        TestComponent
        <br />
        <a onClick={clickButton} href="http://" className="btn btn-success">
          set Sample
        </a>
      </div>
      <br />
      <br />
      <br />
    </div>
  );
};

export default TestComponent;
