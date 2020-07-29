import React from "react"
import { TableContainer, Table, TableHead, TableRow, TableCell, TableBody } from "@material-ui/core"

export const CurrencyTable = (props) => {

  const {currencies} = props
    return (
    <div>
    <h3>Tablica tečaja</h3>
    <TableContainer>
      <Table size="small" aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Dessert (100g serving)</TableCell>
            <TableCell align="right">Calories</TableCell>
            <TableCell align="right">Fat&nbsp;(g)</TableCell>
            <TableCell align="right">Carbs&nbsp;(g)</TableCell>
            <TableCell align="right">Protein&nbsp;(g)</TableCell>
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
              <TableCell align="right">{row.jedinica}</TableCell>
              <TableCell align="right">{row.kupovni_tecaj}</TableCell>
              <TableCell align="right">{row.srednji_tecaj}</TableCell>
              <TableCell align="right">{row.prodajni_tecaj}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
    )
}

CurrencyTable.propTypes = {
    currencies: []
}