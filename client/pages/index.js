import React from 'react';

const LandingPage = ({ color }) => {
  console.log('In the component', color);
  return <h1>Landing Page</h1>;
};

LandingPage.getInitialProps = () => {
  console.log('On the server!');

  return { color: 'red' };
};

export default LandingPage;
