import React from 'react';
import { SampleProvider } from '../../contexts/sampleContext';
import Footer from '../../components/footer'
import TestComponents from '../../components/testComponent'
import useOnline from '../../hooks/useOnline';
// import { useSampleContext, useSampleDispatchContext, useSampleActions } from '../../contexts/sampleContext';
const Sample = () => {
  const online = useOnline()
  console.log('online', online)
  // const { sample } = useSampleContext();
  // const dispatch = useSampleDispatchContext();
  // const { setSample } = useSampleActions(dispatch);
  // console.log(sample)
  return (
    <SampleProvider>
      <Footer />
      <TestComponents />
      <div style={{ height: 600, backgroundColor: 'green' }} />
      <div style={{ height: 600, backgroundColor: '#000000' }} />
      <div style={{ height: 600, backgroundColor: 'yellow' }} />
    </SampleProvider>
  );
};

export default Sample;
