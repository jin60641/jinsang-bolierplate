import React from 'react';
import {
  Link,
} from 'react-router-dom';
import {
  createStyles, makeStyles, Theme,
} from '@material-ui/core/styles';
import {
  AppBar, Toolbar, Typography,
} from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) => createStyles({
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  link: {
    textDecoration: 'none',
    color: 'unset',
  },
}));

const Header: React.FC = () => {
  const classes = useStyles();

  return (
    <AppBar
      position='fixed'
      className={classes.appBar}
    >
      <Toolbar>
        <Link
          to='/'
          className={classes.link}
        >
          <Typography variant='h6' noWrap>
            {process.env.REACT_APP_DOMAIN}
          </Typography>
        </Link>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
