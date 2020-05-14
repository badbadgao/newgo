import React from 'react';
import { Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Category from './Category';
import { connect } from 'react-redux';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    flexDirection: 'column',
    height: '400px',
  },
  categoryHeader:  {
    margin: '16px',
    fontSize: '20px',
  }
});

const CategoryList = ({ categories }) => {
  const classes = useStyles();

  const categoryList = categories.map(category => (
    <Category key={category.name} category={category}/>
  ));

  return (
    <Paper className={classes.root} variant="outlined" square>
      {/* <div className={classes.logo}>New GO</div> */}
      <header className={classes.categoryHeader}>All Categories</header>
      {categoryList}
    </Paper>
  )
};

const mapStateToProps = state => ({
  categories: state.category.list,
}); 

export default connect(mapStateToProps)(CategoryList);