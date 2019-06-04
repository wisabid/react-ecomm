import React, {useContext} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import {UserContext} from '../../context/userContext';

const useStyles = makeStyles(theme => ({    
    buttons: {
      display: 'flex',
      justifyContent: 'flex-end',
    },
    button: {
      marginTop: theme.spacing(3),
      marginLeft: theme.spacing(1),
    },
  }));
const ContinueShopping = () => {
    const classes = useStyles();
    const {setPage} = useContext(UserContext);
    return (
        <div className={classes.buttons}>
            <Button
            variant="contained"
            color="primary"
            onClick={() => setPage('Products')}
            className={classes.button}
            >
            Continue Shopping
            </Button>
        </div>
    )
}

export default ContinueShopping;