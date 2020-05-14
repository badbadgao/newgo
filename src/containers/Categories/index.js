import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CategoryList from './CategorList';
import CategoryDetails from './CategoryDetails';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    position: 'relative',
    marginTop: '16px',
  },
});

const ProdcutCategories = props => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CategoryList />
      <CategoryDetails />
    </div>
  )
};

export default ProdcutCategories;