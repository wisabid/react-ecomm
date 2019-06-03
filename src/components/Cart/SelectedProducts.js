import React, {useContext} from 'react';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import { makeStyles } from '@material-ui/core/styles';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import Discount from './Discount';
import {UserContext} from '../../context/userContext';

const useStyles = makeStyles(theme => ({
    listItem: {
      padding: theme.spacing(1, 0),
    },
    
  }));
const SelectedProducts = ({usersCart, title}) => {
    const classes = useStyles();
    const {cart, addToCart, productItems, setProductItems} = useContext(UserContext);
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
                    <ListItemText primary={`${item.name} ( ${item.units} )`} secondary={item.description} />
                    <Typography variant="body2">{item.price.toFixed(2)}</Typography>
                    <ListItemSecondaryAction>
                        <IconButton edge="end" aria-label="Delete" onClick={() => handleDelete(item.id)}>
                            <DeleteIcon />
                        </IconButton>
                    </ListItemSecondaryAction>
                </ListItem>
                ))}
                <Discount />
                <ListItem className={classes.listItem}>
                <ListItemText primary="Total" />
                <Typography variant="subtitle1" className={classes.total}>
                    $34.06
                </Typography>
                <ListItemSecondaryAction>
                    <IconButton edge="end" aria-label="Delete">
                        <DeleteIcon />
                    </IconButton>
                </ListItemSecondaryAction>
                </ListItem>
            </List>
        </>
    )
}

export default SelectedProducts;