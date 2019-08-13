import React from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    submit: {
      margin: theme.spacing(3, 0, 2),
    },
  }));

export default function CompanyButton({ handleCompanyUpdateSubmit }) {
    const classes = useStyles();
    return (
        <Button
        type="submit"
        fullWidth
        variant="contained"
        color="primary"
        className={classes.submit}
        onClick={handleCompanyUpdateSubmit}
      >
        Update Companies
        </Button>
    )
}