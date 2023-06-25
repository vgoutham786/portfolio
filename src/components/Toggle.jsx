import React, { useState, useEffect } from "react";
import { withStyles } from "@material-ui/core/styles";
import { FormControlLabel } from "@material-ui/core";
import Switch from "@material-ui/core/Switch";

const PurpleSwitch = withStyles({
  switchBase: {
    color: "#ff00ff !important",
    "&$checked": {
      color: "#09ff00 !important",
    },
    // "&$checked + $track": {
    //   backgroundColor: "#00ff00 !important",
    // },
  },
  thumb: {
    marginTop: "-1px",
  },
  checked: {},
  track: {
    marginTop: "9px",
  },
})(Switch);

const Toggle = ({ set }) => {
  const [check, setCheck] = useState(true);

  useEffect(() => {
    set(check);
  }, [check]);
  return (
    <div>
      <FormControlLabel
        control={
          <PurpleSwitch
            checked={check}
            onChange={() => setCheck((p) => !p)}
            style={{ marginTop: "10px" }}
          />
        }
      />
    </div>
  );
};

export default Toggle;
