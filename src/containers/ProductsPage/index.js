import React from 'react';
import ProductsCard from '../../components/ProductsCard';
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    height: '200px',
    display: 'flex',
  }
});

const ProductPage = props => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <ProductsCard />
        </Grid>
        <Grid item xs={12} md={6}>
          <ProductsCard />
        </Grid>
      </Grid>
    </div>
  )
};

export default ProductPage;