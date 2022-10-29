import React from 'react';
import { useSampleContext, useSampleDispatchContext, useSampleActions } from '../../contexts/sampleContext';
const Footer = () => {
  const { sample, test } = useSampleContext();
  const dispatch = useSampleDispatchContext();
  const { setSample } = useSampleActions(dispatch);
  console.log(sample)
  console.log(test)
  const clickButton = (e) => {
    e.preventDefault();
    setSample(!sample)
  }
  return (
    <footer className="footer">
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <div className="container">
      <h1>{sample ? 'sample true': 'sample false'}</h1>
      <a onClick={clickButton} href="http://" className='btn btn-success'>set Sample</a>
    </div>
      <br />
      <br />
      <br />
    </footer>
  )
}
export default Footer;