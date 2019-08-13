import React from 'react';
// import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Title from '../Title/Title';
import Dashboard from '../Dashboard/Dashboard';
import ListItem from '@material-ui/core/ListItem';
import { Link } from 'react-router-dom';
import logo from "../../assets/img/stock-chart-logoSM.jpg";
import IconButton from '@material-ui/core/IconButton';
import "./Definitions.css";
// Generate Order Data
function createData(id, term, definition) {
  return { id, term, definition };
}

const rows = [
  createData(0, 'Bear Market', 'Stock market trending downward'),
  createData(1, 'Blue Chip Stock', 'Stocks behind large, industry-leading companies'),
  createData(2, 'Bull Market', 'Stock market trending upwards'),
  createData(3, 'Dividend', "A portion of a company's earnings that is paid to shareholders"),
  createData(4, 'Index', 'A benchmark that is used as a reference marker for traders and portolio managers'),
  createData(5, 'Initial Public Offering (IPO)', 'The first sale or offering of a stock by a company to the public'),
  createData(6, 'Pink Sheet Stocks', 'Commonly known as "Penny Stocks", which are traded at $5 per share or less'),
  createData(7, 'Rally', 'A rapid increase in the price level of the market or stock'),
  createData(8, 'Sector', 'A group of stocks in the same industry'),
  createData(9, 'Short Selling', 'When borrowing shares from someone else, with the promise to return them later'),
  createData(10, 'Volume', 'The number of shares of stock traded during a particular time period')
];

const useStyles = makeStyles(theme => ({
  seeMore: {
    marginTop: theme.spacing(3),
  },
}));

export default function Definitions() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Title className="terms">Common Terms Defined</Title>
      {/* <IconButton color="inherit"> */}
      <img src={logo} alt="logo" className="logo" />
      {/* </IconButton> */}
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Term</TableCell>
            <TableCell>Definition</TableCell>
            <TableCell align="right"></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(row => (
            <TableRow key={row.id}>
              <TableCell>{row.term}</TableCell>
              <TableCell>{row.definition}</TableCell>
              {/* <TableCell>{row.shipTo}</TableCell>
              <TableCell>{row.paymentMethod}</TableCell> */}
              <TableCell align="right">{row.amount}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <div className={classes.seeMore}>
        <ListItem button>
          <Link to="/dashboard" color="primary">
            Return to Dashboard
          </Link>
        </ListItem>
      </div>
    </React.Fragment>
  );
}