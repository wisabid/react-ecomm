import React, {useContext, useState, useEffect} from 'react';

import Button from '@material-ui/core/Button';

import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';

import Grid from '@material-ui/core/Grid';

import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import DoneIcon from '@material-ui/icons/Done';

import Img from '../../assets/app/cake.jpg'
import {UserContext} from '../../context/userContext';

const useStyles = makeStyles(theme => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
}));

// const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];


export default function Album({products, categories}) {
  console.table(products, ['name', 'quantity'])
  const classes = useStyles();
  const {cart, addToCart, productItems, setProductItems} = useContext(UserContext);
  const [done, setDone] = useState([])

  const categoryNames = categories.reduce((all, item) => {
    all[item.id] = item.name;
    return all;
  }, {})
  const handleaddToCart = (productId) => {
    debugger;
    console.log('Adding to Cart...', productId);
    let productInCart = cart.find(item => item.productid === productId),
        newCart;
    if (productInCart) {
      console.log('Product already exists in cart')
      newCart = cart.map(item => {
        if (item.productid === productId) {
            item.units+=1;
        }
        return item;
      })
    }
    else {
      newCart = cart.concat([{id : Date.now(), productid : productId, units : 1}])
    }
    
    addToCart(newCart);
    

    // let selectedProduct = productItems.filter(item => item.id === productId);
    // selectedProduct.quantity-=1;
    let modifiedProductItems = productItems.map(item => {
      if (item.id === productId) {
        item.quantity-=1;
      }
      return item;
    })
    setProductItems(modifiedProductItems)
  }

  useEffect(() => {
    let pids = [];
    cart.map(item => {
      pids.push(item.productid);
    })
    setDone(pids)
  }, [cart])
  return (
    <React.Fragment>     
      
      
      <main>
        {/* Hero unit */}
        <div className={classes.heroContent}>
          <Container maxWidth="sm">
            <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
              When in doubt, wear red. 
            </Typography>
            <Typography variant="h5" align="center" color="textSecondary" paragraph>
            We sell six different categories of clothes: women’s footwear, men’s
footwear, women’s casualwear, men’s casualwear, women’s formalwear and
man’s formalwear.
            </Typography>
            {/* <div className={classes.heroButtons}>
              <Grid container spacing={2} justify="center">
                <Grid item>
                  <Button variant="contained" color="primary">
                    Main call to action
                  </Button>
                </Grid>
                <Grid item>
                  <Button variant="outlined" color="primary">
                    Secondary action
                  </Button>
                </Grid>
              </Grid>
            </div> */}
          </Container>
        </div>
        <Container className={classes.cardGrid} maxWidth="md">
          {/* End hero unit */}
          <Grid container spacing={4}>
            {products.map(product => (
              <Grid item key={product.id} xs={12} sm={6} md={4} style={(product.quantity === 0)?{opacity:'0.5'}:null}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image={Img}
                    title="Image title"
                  />
                  <CardContent className={classes.cardContent}> 
                    <Typography component="h2" variant="h5" color="textPrimary">
                    £ {product.price}
                    
                    </Typography>                   
                    <Typography gutterBottom variant="h6" component="h2">
                      {product.name} <br />({product.quantity} available)
                    </Typography>                    
                    <Typography color="textSecondary" variant="subtitle1" >
                      [ {categoryNames[product.category]} ]
                    </Typography>
                    <Typography color="textSecondary" variant="caption" >
                      {product.description}
                    </Typography>
                   
                  </CardContent>
                  <CardActions>
                    {product.quantity?
                      <Button size="small" color="primary" onClick={() => handleaddToCart(product.id)}>
                        Add to Cart
                      </Button>
                      :null
                    }                    
                    <Button size="small" color="primary">
                      View
                    </Button>
                    {done.indexOf(product.id) !== -1 && 
                    <DoneIcon color="primary" fontSize="large" />
                    }
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
      
    </React.Fragment>
  );
}