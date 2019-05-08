import React, { useState } from 'react';
import { Button, TextField } from '@material-ui/core';
import SaveIcon from '@material-ui/icons/Save';
import Example from 'components/Example';

const Home = () => {
  const [name, setName] = useState('');

  return (
    <div>
      <TextField
        value={name}
        onChange={e => setName(e.target.value)}
        margin="normal"
      />
      <Button variant="contained" size="small" onClick={() => setName('joao')}>
        <SaveIcon />
        changeName to joao
      </Button>
      <Example name={name} />
    </div>
  );
};

export default Home;
