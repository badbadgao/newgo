import React from 'react';

import { GridList, GridListTile } from '@material-ui/core';

import { makeStyles } from '@material-ui/core/styles';
import image4 from '../../../assets/images/gallery_big_4.jpg';
import image1 from '../../../assets/images/gallery_small_1.jpg';
import image2 from '../../../assets/images/gallery_2.png';
import image22 from '../../../assets/images/gallery_2_2.jpg';
import image11 from '../../../assets/images/gallery_1_1.jpg';

const tileData = [
    {
      img: image4,
      title: 'Image',
      author: 'author',
      cols: 4,
      rows: 3,
    },
    {
      img: image1,
      title: 'Image',
      author: 'author',
      cols: 1,
      rows: 3,
    },
    {
      img: image2,
      title: 'Image',
      author: 'author',
      cols: 2,
      rows: 2,
    },
    {
      img: image22,
      title: 'Image',
      author: 'author',
      cols: 2,
      rows: 2,
    },
    {
      img: image11,
      title: 'Image',
      author: 'author',
      cols: 1,
      rows: 2,
    },
  ];

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
    marginLeft: '16px',
  },
  gridList: {
    width: '700px',
    // height: '400px',
  },
}));

const Galleries = props => {
  const classes = useStyles();
  const getGridHeight = rows => {
    return 400*rows/5;
  }
  return (
    <div className={classes.root}>
      <GridList className={classes.gridList} cols={5} rows={5}>
        {tileData.map((tile) => (
          <GridListTile style={{ height: `${getGridHeight(tile.rows)}px`}} key={tile.img} cols={tile.cols || 1} rows={tile.rows || 1}>
            <img src={tile.img} alt={tile.title} />
          </GridListTile>
        ))}
      </GridList>
    </div>
  )
};

export default Galleries;