import React from 'react';
import './App.css';
import Categories from './containers/Categories';
import CategoryGallery from './containers/CategoryGallery';
import { makeStyles } from '@material-ui/core/styles';
import ProductsPage from './containers/ProductsPage';

const useStyels = makeStyles({
  root: {
    backgroundColor: '#f4f4f4',
    height: '100vh'
  },
  mainLayout: {
    width: '85%',
    display: 'flex',
    justifyContent: 'flex-start',
    flexDirection: 'column',
    margin: 'auto',
  },
  categoryContainer: {
    display: 'flex',
  },
  contentMain: {
    flex: '1',
  }
});

const App = () => {
  const classes = useStyels();
  return (
    <div className={classes.root}>
      <div className="App-header">NEW GO - new way of shopping in New Zealand</div>
      <div className={classes.mainLayout}>
        <div className={classes.categoryContainer}>
          <Categories />
          <div className={classes.contentMain}>
            <CategoryGallery />
          </div>
        </div>
        <ProductsPage />
      </div>
    </div>
  );
}

export default App;
