import React, {useContext, useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button';
import {UserContext} from '../../context/userContext';

const useStyles = makeStyles(theme => ({
    listItem: {
      padding: theme.spacing(1, 0),
    },
    textField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        width: 200,
    },
    menu: {
        width: 200,
      },
  }));
  
  
const Discount = ({discounts}) => {
    debugger;
    const classes = useStyles();
    const {total, settotal, discount, setDiscount} = useContext(UserContext);
    const [values, setValues] = React.useState({
        // name: 'Cat in the Hat',
        display : discount?false:true,
        discount :discount
        // age: '',
        // multiline: 'Controlled',
        // currency: 'EUR',
      });
      
      const handleChange = name => event => {
          console.log('ABID', values);
          setDiscount(event.target.value)
          settotal((total+event.target.value))
          setValues({ ...values, [name]: event.target.value, display : false });
      };
      const reset = name => {
          setDiscount(0)
          settotal((total-values.discount))
          setValues({ ...values, [name]: '', display : true });
      }
    return (
        <ListItem className={classes.listItem}>
            <ListItemText primary="Discount" />
            {values.display? 
                <TextField
                    id="standard-select-discound"
                    select
                    label=""
                    className={classes.textField}
                    value={values.discount}
                    onChange={handleChange('discount')}
                    SelectProps={{
                    MenuProps: {
                        className: classes.menu,
                    },
                    }}
                    helperText="Please select your Voucher"
                    margin="normal"
                >
                    {discounts.map(option => (
                    <MenuItem key={option.value} value={option.value}>
                        {option.code}
                    </MenuItem>
                    ))}
                </TextField>
                :<>
                    <Button size="small" color="primary" onClick={() => reset('discount')}>
                        Remove
                    </Button>
                    {values.discount.toFixed(2)}
                 </>
            }
        </ListItem>
    )
}

export default Discount;