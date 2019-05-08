import React from 'react';
import { string } from 'prop-types';
import { Typography } from '@material-ui/core';

function Example({ name }) {
  return (
    <Typography variant="h3" gutterBottom>
      Oi {name}
    </Typography>
  );
}

Example.propTypes = {
  name: string.isRequired,
};


export default Example;
