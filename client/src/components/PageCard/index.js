import React from 'react';

import withStyles from '@material-ui/core/styles/withStyles';
import CardHeader from '@material-ui/core/CardHeader';
import Card from '@material-ui/core/Card';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';

import cardStyles from './cardStyles';

const PageCard = ({ classes, children, title, buttonText, href }) => {
  const renderButton = href && (
    <div>
      <Button
        className={classes.cardHeaderButton}
        color='primary'
        variant='contained'
        disableFocusRipple={true}
        disableRipple={true}
        href={href}
      >
        {buttonText}
      </Button>
    </div>
  );

  return (
    <Paper className={classes.pageCardContainer} elevation={5}>
      <div className={classes.cardHeaderWrapper}>
        <header className={classes.cardHeader}>
          <Typography variant='h5' component='h3'>
            {title}
          </Typography>
        </header>
        {renderButton}
      </div>
      <div className={classes.pageCardContentWrapper}>{children}</div>
    </Paper>
  );
};

export default withStyles(cardStyles)(PageCard);
