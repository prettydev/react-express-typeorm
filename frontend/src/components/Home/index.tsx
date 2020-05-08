import React, { useEffect } from 'react';
import { Card, CardContent, Typography } from '@material-ui/core';

import { useStoreState, useStoreActions } from '../../hooks';
import UserEntryForm from '../UserEntryForm';
import useStyles from './styles';

const Home: React.FC = () => {
  const reverseEntries = useStoreState(state => state.user.reverseEntries);
  // const entry = useStoreState(state => state.user.entry);
  const getEntries = useStoreActions(state => state.user.getEntries);
  const getEntryArray = useStoreActions(state => state.user.getEntry);
  // const getEntry = getEntryArray[0];
  const classes = useStyles();

  useEffect(() => {
    getEntryArray();
  }, []); // eslint-disable-line
  return (
    <>
      {
        //   entry && (
        //   <div>
        //     <h1>{entry.username}</h1>
        //     <h2>{entry.plan}</h2>
        //   </div>
        // )
      }
      <div style={{ border: '1px gray solid' }}>
        <UserEntryForm />
      </div>
    </>
  );
};

export default Home;
