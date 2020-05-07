import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';

import useStyles from './styles';
import InvoiceEntry from '../../interfaces/InvoiceEntry';
import { useStoreActions } from '../../hooks';

const InvoiceEntrySchema = yup.object().shape({
  role: yup
    .string()
    .trim()
    .required('Required.'),
  description: yup
    .string()
    .trim()
    .min(10, 'Must be at least 10 characters.')
    .max(200, 'Can be no longer than 200 characters')
    .required('Required.'),
});

const InvoiceEntryForm: React.FC = () => {
  const classes = useStyles();
  const createEntry = useStoreActions(state => state.invoice.createEntry);
  const { register, handleSubmit, errors, reset } = useForm<InvoiceEntry>({
    validationSchema: InvoiceEntrySchema,
  });
  const onSubmit = (data: InvoiceEntry): void => {
    createEntry(data);
    reset();
  };
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      noValidate
      className={classes.formContainer}
    >
      <TextField
        inputRef={register}
        label="Role"
        name="role"
        fullWidth
        variant="outlined"
        error={!!errors.role}
        helperText={errors.role ? errors.role.message : ''}
      />
      <TextField
        inputRef={register}
        multiline
        rows={3}
        label="Description"
        name="description"
        error={!!errors.description}
        helperText={errors.description ? errors.description.message : ''}
        fullWidth
        variant="outlined"
      />
      <Box display="flex" justifyContent="flex-end">
        <Button type="submit" color="primary" variant="contained">
          Add Entry
        </Button>
      </Box>
    </form>
  );
};

export default InvoiceEntryForm;
