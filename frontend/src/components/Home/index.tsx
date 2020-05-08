import React, { useEffect } from 'react';
import { Card, CardContent, Typography } from '@material-ui/core';

import { useStoreState, useStoreActions } from '../../hooks';
import UserEntryForm from '../UserEntryForm';
import useStyles from './styles';

const Home: React.FC = () => {
  const reverseEntries = useStoreState(state => state.user.reverseEntries);
  const getEntries = useStoreActions(state => state.user.getEntries);
  const classes = useStyles();

  useEffect(() => {
    getEntries();
  }, []); // eslint-disable-line
  return (
    <div style={{ border: '1px gray solid' }}>
      <UserEntryForm />
    </div>
  );
};

export default Home;
