import React from 'react';

type Props = {
  name: string;
};

const Welcome: React.FC<Props> = ({ name }) => {
  return <h1>Welcome, {name}!</h1>;
};

export default Welcome;
