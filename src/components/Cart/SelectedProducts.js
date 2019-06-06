import React, {useContext, useEffect, useState} from 'react';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import Zoom from '@material-ui/core/Zoom';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import Button from '@material-ui/core/Button';
import CircularProgress from '@material-ui/core/CircularProgress';
import Discount from './Discount';
import {UserContext} from '../../context/userContext';
import discounts from '../../services/mocks/discounts.json';
import ContinueShopping from '../Products/ContinueShopping';
import categories from '../../services/mocks/categories.json';
import {getCatNames} from '../../utils';

const useStyles = makeStyles(theme => ({
    progress: {
        margin: theme.spacing(2),
      },
    listItem: {
      padding: theme.spacing(1, 0),
      display: 'flex',
    justifyContent: 'flex-end',
    },
    
  }));
const SelectedProducts = ({usersCart, title}) => {
    debugger;
    const classes = useStyles();
    const {cart, addToCart, productItems, setProductItems, setPage, page, total, settotal, discount, footCats, setDiscount} = useContext(UserContext);
    const [footwearflag, setFootwearflag] = useState(false);
    // const [total, settotal] = useState(0);
    const categoryNames = getCatNames(categories);
    useEffect(() => {
        let newtotal = usersCart.reduce((all, item) => {
            if (footCats.indexOf(item.category) !== -1) {
                setFootwearflag(true)
            }
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
        setDiscount(0);
              
    }
    if (usersCart.length) {
        return (
            <>
                <Typography variant="h6" gutterBottom>
                    {title}
                </Typography>
                <ContinueShopping />
                <Zoom in={true}>
                <List disablePadding>
                    {usersCart.map(item => (
                    <ListItem className={classes.listItem} key={item.carduid}>
                        <IconButton edge="end" aria-label="Delete" onClick={() => handleDelete(item.id)} style={{marginRight : '10px'}}>
                                <DeleteIcon />
                        </IconButton>
                        <ListItemText primary={`${item.name} ( ${item.units} )`} secondary={`[ ${categoryNames[item.category]} ]`} />
                        <Typography variant="body2">£ {(item.units * item.price).toFixed(2)}</Typography>
                        {/* <ListItemSecondaryAction> */}
                            
                        {/* </ListItemSecondaryAction> */}
                    </ListItem>
                    ))}
                    <Discount discounts={discounts} footwearflag={footwearflag}/>
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
                </Zoom>
            </>
        )
    }
    else {
        return (
            <CircularProgress className={classes.progress} />
          )
    }
}
SelectedProducts.propTypes = {
    usersCart : PropTypes.arrayOf(PropTypes.shape({
        id : PropTypes.string,
        name : PropTypes.string,
        description : PropTypes.string, 
        image : PropTypes.string,
        category : PropTypes.string,
        price : PropTypes.number ,
        quantity : PropTypes.number,
        carduid : PropTypes.number,
        units : PropTypes.number
    })),
    title : PropTypes.string
  }
export default SelectedProducts;