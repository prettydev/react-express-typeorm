import React, { useEffect } from 'react';
import { Card, CardContent, Typography } from '@material-ui/core';

import { useStoreState, useStoreActions } from '../../hooks';
import InvoiceEntryForm from '../InvoiceEntryForm';
import useStyles from './styles';

const Invoice: React.FC = () => {
  const reverseEntries = useStoreState(state => state.invoice.reverseEntries);
  const getEntries = useStoreActions(state => state.invoice.getEntries);
  const classes = useStyles();

  useEffect(() => {
    getEntries();
  }, []); // eslint-disable-line
  return (
    <div>
      <InvoiceEntryForm />
      {reverseEntries.map(entry => (
        <Card className={classes.entryCard} key={entry.id}>
          <CardContent>
            <Typography variant="h2">{entry.description}</Typography>
            <Typography variant="body1">{entry.role}</Typography>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default Invoice;
