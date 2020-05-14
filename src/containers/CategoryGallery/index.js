import React from 'react';
import PropTypes from 'prop-types';

import Galleries from './Galleries';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    flexDirection: 'column',
    marginTop: '16px',
  }
});

const CategoryGallery = props => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      {/* <div>ContentMain</div> */}
      <Galleries />
    </div>
  )
};

CategoryGallery.propTypes = ({
});

export default CategoryGallery;