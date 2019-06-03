import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles(theme => ({
    listItem: {
      padding: theme.spacing(1, 0),
    },
    textField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        width: 200,
    },
  }));
const Discount = () => {
    const classes = useStyles();
    return (
        <ListItem className={classes.listItem}>
            <ListItemText primary="Discount" />
            <TextField
                id="standard-search"
                label="Voucher Code"
                type="search"
                className={classes.textField}
                margin="normal"
            />
        </ListItem>
    )
}

export default Discount;