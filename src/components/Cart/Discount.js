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
  
  
const Discount = ({discounts, footwearflag}) => {
    debugger;
    const classes = useStyles();
    const {total, settotal, discount, setDiscount} = useContext(UserContext);
    const [values, setValues] = React.useState({
        // name: 'Cat in the Hat',
        display : discount?false:true,
        discount :discount,
        helpertext : "Please select your Voucher"
        // age: '',
        // multiline: 'Controlled',
        // currency: 'EUR',
      });

      useEffect(() => {
        if (!discount) {
            setValues({ ...values, discount : 0, display : true })
        }
      }, [discount])
      
      const handleChange = name => event => {
          console.log('ABID', values);
          let discountVal = event.target.value;
          if ((discountVal === -5 && total >= 5) || (discountVal === -10 && total >= 50) || (discountVal === -15 && total >= 75 && footwearflag)) {
            setDiscount(discountVal)
            settotal((total+discountVal))
            setValues({ ...values, [name]: discountVal, display : false });
          }
          else {
            setValues({ ...values, helpertext : 'Cannot be Applied' })
          }
          
      };
      const reset = name => {
          setDiscount(0)
          settotal((total-values.discount))
          setValues({ ...values, [name]: '', display : true });
      }
    return (
        <ListItem className={`${classes.listItem} dotc-discount`}>
            <ListItemText primary="Discount" />
            {values.display? 
                <TextField
                    error={values.helpertext !== 'Please select your Voucher'?true:false}
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
                    helperText={values.helpertext}
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