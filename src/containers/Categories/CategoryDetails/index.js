import React from 'react';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import './category.css';
import { setSelectedCategory, setCategoryDisplay } from '../../../store/reducers/actions';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { isEmpty } from 'lodash';

import SubCategory from './SubCategory';

const useStyles = makeStyles({
  root: {
    position: 'absolute',
    width: '400px',
    height: '400px',
    backgroundColor: '#fff',
    left: '232px',
    zIndex: '1',
  },
});

const CategoryDetails = ({category, displayed, actions, subCategoriesById }) => {
  console.log(category);
  const classes = useStyles();
  const mouseHoverHandler = () => {
    actions.setCategoryDisplay(true);
  };

  const mouseOutHandler = () => {
    actions.setCategoryDisplay(false);
  };

  if (isEmpty(category)) return null;

  const subCatetorires = category.subCategories.map(id => {
    const subCategory = subCategoriesById[id];
    return (
      <SubCategory key={id} subCategory={subCategory}/>
    )
  });

  return (
    <Paper
        elevation={3} 
        className={`${classes.root} ${displayed ? "subCatetorires-show" : "subCatetorires-hide"}`}
        onMouseOver={mouseHoverHandler}
        onMouseOut={mouseOutHandler}
      >
        {subCatetorires}
      </Paper>
  )
};

const mapStateToProps = state => ({
  displayed: state.category.detailsDisplayed,
  category: state.category.current,
  subCategoriesById: state.category.subCategoriesById,
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({
    setSelectedCategory,
    setCategoryDisplay,
  }, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(CategoryDetails);