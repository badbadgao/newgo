import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import { Divider } from '@material-ui/core';
import { orange } from  '@material-ui/core/colors';
import Icon from '@material-ui/core/Icon';
const orange500 = orange[500];

const useStyles = makeStyles({
  root: {
    marginTop: '16px',
    marginBottom: '32px',
    padding: '0px 16px',
  },
  headerContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    fontSize: '13px',
  },
  header: {
    marginBottom: '8px',
    fontSize: '20px',
  },
  icon: {
    marginLeft: '4px',
    fontSize: '12px',
  },
  moreContainer: {
    display: 'flex',
    alignItems: 'center',
    "&:hover": {
      color: orange500,
    },
    cursor: 'pointer',
  },
  more: {
    marginBottom: '2px',
  },
  item: {
    margin: '16px 16px',
    fontSize: '16px',
    cursor: 'pointer',
    "&:hover": {
      color: orange500,
    },
  }
});

const SubCategories = ({ subCategory }) => {
  const classes = useStyles();
  const itemList = subCategory.items.map(item => {
    return (
      <div key={item.name} className={classes.item}>
        {item.name}
      </div>
    )
  });

  return (
    <div className={classes.root}>
      <div className={classes.headerContainer}>
        <div className={classes.header}>{subCategory.name}</div>
        <div className={classes.moreContainer}>
          <div className={classes.more}>more</div>
          <Icon className={classes.icon}>arrow_forward_ios</Icon>
        </div>
      </div>
      <Divider />
      {itemList}
    </div>
  )
};

export default SubCategories;