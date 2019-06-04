import React, {useContext, useEffect, useState} from 'react';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import { makeStyles } from '@material-ui/core/styles';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import Button from '@material-ui/core/Button';
import Discount from './Discount';
import {UserContext} from '../../context/userContext';
import discounts from '../../services/mocks/discounts.json';


const useStyles = makeStyles(theme => ({
    listItem: {
      padding: theme.spacing(1, 0),
    },
    
  }));
const SelectedProducts = ({usersCart, title}) => {
    debugger;
    const classes = useStyles();
    const {cart, addToCart, productItems, setProductItems, setPage, page, total, settotal, discount} = useContext(UserContext);
    // const [total, settotal] = useState(0);

    useEffect(() => {
        let newtotal = usersCart.reduce((all, item) => {
            return all+=(item.units * item.price)
        }, 0)
        settotal(newtotal+discount)
        debugger;
    }, [usersCart])
    const handleDelete = (id) => {
        console.log(id)
        let modifiedCart = cart.reduce((all, item) => {
                if (item.productid === id) {
                    if (item.units > 1) {
                        item.units-=1;
                        all.push(item);
                    }                    
                } 
                else {
                    all.push(item);
                }               
                return all;
              }, []);
        addToCart(modifiedCart);

        let modifiedProductItems = productItems.map(item => {
            if (item.id === id) {
                item.quantity+=1;
            }
            return item;
        })
        setProductItems(modifiedProductItems);

              
    }
    return (
        <>
            <Typography variant="h6" gutterBottom>
                {title}
            </Typography>
            <List disablePadding>
                {usersCart.map(item => (
                <ListItem className={classes.listItem} key={item.carduid}>
                    <IconButton edge="end" aria-label="Delete" onClick={() => handleDelete(item.id)} style={{marginRight : '10px'}}>
                            <DeleteIcon />
                    </IconButton>
                    <ListItemText primary={`${item.name} ( ${item.units} )`} secondary={item.description} />
                    <Typography variant="body2">£ {(item.units * item.price).toFixed(2)}</Typography>
                    {/* <ListItemSecondaryAction> */}
                        
                    {/* </ListItemSecondaryAction> */}
                </ListItem>
                ))}
                <Discount discounts={discounts}/>
                <ListItem className={classes.listItem}>
                <ListItemText primary="Total" />
                <Typography variant="subtitle1" className={classes.total}>
                £ {total.toFixed(2)}
                </Typography>
                
                </ListItem>
                {page !== 'Checkout' && 
                <ListItem className={classes.listItem}>
                    <Button variant="contained" color="primary" onClick={() => setPage('Checkout')}>
                        Checkout
                    </Button>
                </ListItem>
                }
            </List>
        </>
    )
}

export default SelectedProducts;