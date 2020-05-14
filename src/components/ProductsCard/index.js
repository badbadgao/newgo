import React from 'react';
import { Card } from '@material-ui/core';


import { makeStyles } from '@material-ui/core/styles';
import { Grid, Typography, GridList, GridListTile } from '@material-ui/core';
import 'typeface-roboto';
import product_1 from '../../assets/images/product_1.png';
import product_2 from '../../assets/images/product_2.png';
import product_3 from '../../assets/images/product_3.png';

const useStyles = makeStyles({
  root: {
    height: '300px',
    marginTop: '16px',
  },
  header: {
    background: 'linear-gradient(to right, rgb(250, 60, 104) 2%, rgb(254, 70, 77) 97%) rgb(250, 60, 104)',
    fontFamily: 'MFShangHei-Regular !important',
    height: '32px',
    display: 'flex',
    alignItems: 'center',
    paddingLeft: '16px',
    color: '#fff',
  },
  item: {
    display: 'flex',
    flexDirection: 'column',
  },
  products: {
    display: 'flex',
    padding: '16px',
  },  
  product: {
    flex: 1,
    flexDirection: 'column',
    padding: '4px',
  },
  productImg: {
    width: '100%',
  },
  title: {
    fontSize: '16px',
  },
  subTitle: {
    fontSize: '14px',
    color: 'grey'
  },
});


const ProductsCard = props => {
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <div className={classes.header}>
        <Typography variant='h7'>Product Recommened</Typography>
      </div>
      <div className={classes.products}>
        <div className={classes.product}>
          <img src={product_1} className={classes.productImg} alt="product1"></img>
          <div className={classes.title}>圣罗兰 口红礼盒</div>
          <div className={classes.subTitle}>圣罗兰 口红礼盒</div>
        </div>
        <div className={classes.product}>
          <img src={product_2} className={classes.productImg} alt="product2"></img>
          <div className={classes.title}>圣罗兰 口红礼盒</div>
          <div className={classes.subTitle}>圣罗兰 口红礼盒</div>        </div>
        <div className={classes.product}>
          <img src={product_3} className={classes.productImg} alt="product3"></img>
          <div className={classes.title}>圣罗兰 口红礼盒</div>
          <div className={classes.subTitle}>圣罗兰 口红礼盒</div>        </div>
      </div>
    </Card>
  )
};

export default ProductsCard;