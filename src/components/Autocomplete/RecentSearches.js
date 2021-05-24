import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { useSelector } from 'react-redux'

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
}));

function ListItemLink(props) {
  return <ListItem button component="a" {...props} />;
}

export default function RecentSearches() {
  const recentLocations = useSelector(state => state.locations.locations)
  const classes = useStyles();
  console.log(`recentLocations ${JSON.stringify(recentLocations)}`)
  return (
    <div className={classes.root}>
      <List component="nav" aria-label="secondary mailbox folders">
        <ListItem>
          <ListItemText primary="Recent Searches" />
        </ListItem>
        {recentLocations && recentLocations.map(location => {
          return(
          <ListItemLink>
            <ListItemText primary={location.structured_formatting.main_text} secondary={location.structured_formatting.secondary_text}/>
          </ListItemLink>)
        })}
      </List>
    </div>
  );
}