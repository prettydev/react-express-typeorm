import React from 'react';
import { Switch, Route, Redirect, Link } from 'react-router-dom';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';

import useStyles from './styles';
import UserEntry from '../../interfaces/UserEntry';
import { useStoreActions } from '../../hooks';

const UserEntryForm: React.FC = () => {
  const classes = useStyles();
  const onSubmit = (data: UserEntry): void => {};
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      flexDirection="row"
    >
      <Button component={Link} to="/subscribe" color="inherit">
        Change plan
      </Button>
      <Button component={Link} to="/cancel" color="inherit">
        Cancel subscription
      </Button>
      <Button component={Link} to="/billing" color="inherit">
        Edit billing
      </Button>
      <Button component={Link} to="/invoice" color="inherit">
        Invoice
      </Button>
    </Box>
  );
};

export default UserEntryForm;
