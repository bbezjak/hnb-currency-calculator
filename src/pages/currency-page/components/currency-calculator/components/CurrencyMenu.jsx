import React from "react";

import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";

import { PropTypes } from "prop-types";

export const CurrencyMenu = (props) => {
  const { currencies, selectedCurrency, chooseCurrency } = props;
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClickListItem = (event) => {
    debugger;
    chooseCurrency(event.currentTarget);
    setAnchorEl(event.currentTarget);
  };

  const handleMenuItemClick = (event) => {
    debugger;
    chooseCurrency(event.currentTarget.innerText);
    setAnchorEl(null);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <Button
        aria-controls="simple-menu"
        aria-haspopup="true"
        onClick={(event) => setAnchorEl(event.currentTarget)}
      >
        {selectedCurrency}
      </Button>
      <Menu
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        {currencies.map((currency, index) => (
          <MenuItem
            key={currency}
            disabled={currency === selectedCurrency}
            selected={currency === selectedCurrency}
            onClick={(event) => handleMenuItemClick(event, index)}
          >
            {currency}
          </MenuItem>
        ))}
      </Menu>
    </>
  );
};

CurrencyMenu.propTypes = {
  currencies: PropTypes.array.isRequired,
  selectedCurrency: PropTypes.string.isRequired,
  chooseCurrency: PropTypes.func.isRequired,
};
