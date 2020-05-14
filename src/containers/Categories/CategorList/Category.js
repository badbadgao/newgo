import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Icon from '@material-ui/core/Icon';
import { grey } from '@material-ui/core/colors';
import IconButton from '@material-ui/core/IconButton';
import { setSelectedCategory, setCategoryDisplay } from '../../../store/reducers/actions';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

const greyColor = grey[800];

const useStyles = makeStyles({
  root: {
    display: 'flex',
    alignItems: 'center',
    width: '230px',
    boxSizing: 'border-box',
    justifyContent: 'space-between',
    padding: '8px 8px',
    fontSize: '16px',
    "&:hover": {
      backgroundColor: '#ffe4dc'
    },
  },
  categoryContainer: {
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    color: greyColor,
  },
  categoryIcon: {
    color: 'orange',
    marginRight: '8px',
    fontSize: '16px'
  },
  arrowIcon: {
    color: 'grey',
    fontSize: '12px',
  }
});

const Category = ({ actions, category }) => {
  const classes = useStyles();

  const mouseHoverHandler = () => {
    actions.setSelectedCategory(category);
    actions.setCategoryDisplay(true);
  };

  const mouseOutHandler = () => {
    actions.setCategoryDisplay(false);
  }
  
  return (
    <div className={classes.root}
      onMouseOver={mouseHoverHandler}
      onMouseOut={mouseOutHandler}>
      <div className={classes.categoryContainer}>
        <Icon className={classes.categoryIcon}>{category.icon}</Icon>
        {category.name}
      </div>
      <IconButton disabled>
        <Icon className={classes.arrowIcon}>arrow_forward_ios</Icon>
      </IconButton>
    </div>
  )
};

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({
    setSelectedCategory,
    setCategoryDisplay,
  }, dispatch),
});

export default connect(undefined, mapDispatchToProps)(Category);