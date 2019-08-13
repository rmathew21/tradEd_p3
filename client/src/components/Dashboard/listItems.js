import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import DashboardIcon from '@material-ui/icons/Dashboard';
import LoyaltyIcon from '@material-ui/icons/Loyalty';
import SearchIcon from '@material-ui/icons/Search';
import PeopleIcon from '@material-ui/icons/People';
import LayersIcon from '@material-ui/icons/Layers';
import Dashboard from './Dashboard';
import CompanyButton from '../button/Button';
import { Link } from 'react-router-dom';

export const mainListItems = (
  <div>
    <ListItem button href={Dashboard}>
      <ListItemIcon>
        <DashboardIcon />
      </ListItemIcon>
      <Link to="/dashboard">Dashboard</Link>
    </ListItem>
    <ListItem>
      <ListItemIcon>
        <LoyaltyIcon />
      </ListItemIcon>
      <Link to="/search">Manage Favorites</Link>
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <PeopleIcon />
      </ListItemIcon>
      <Link to="/profile">Profile</Link>
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <SearchIcon />
      </ListItemIcon>
      <Link to="/search">Search</Link>
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <LayersIcon />
      </ListItemIcon>
      <Link to="/">Logout</Link>
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <LayersIcon />
      </ListItemIcon>
      <Link to="/definitions">Definitions</Link>
    </ListItem>
    <CompanyButton />
  </div>
);