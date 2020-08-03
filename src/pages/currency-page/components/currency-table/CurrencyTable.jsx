import React from "react";
import { PropTypes } from "prop-types";
import {
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
} from "@material-ui/core";

export const CurrencyTable = (props) => {
  const { currencies } = props;
  return (
    <div style={{margin : "0 10px"}}>
      <h3>Tablica tečaja</h3>
      <TableContainer>
        <Table size="small" aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="left">Država</TableCell>
              <TableCell align="right">Šifra države</TableCell>
              <TableCell align="right">Šifra valute</TableCell>
              <TableCell align="right">1 KN (kupovni)</TableCell>
              <TableCell align="right">1 KN (srednji)</TableCell>
              <TableCell align="right">1 KN (prodajni)</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {currencies.map((row) => (
              <TableRow key={row.name}>
                <TableCell component="th" scope="row">
                  {row.drzava}
                </TableCell>
                <TableCell align="right">{row.drzava_iso}</TableCell>
                <TableCell align="right">{row.valuta}</TableCell>
                <TableCell align="right">{row.kupovni}</TableCell>
                <TableCell align="right">{row.srednji}</TableCell>
                <TableCell align="right">{row.prodajni}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

CurrencyTable.propTypes = {
  currencies: PropTypes.array.isRequired,
};
