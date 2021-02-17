import DateFnsUtils from "@date-io/date-fns";
import { Button, Grid, TextField } from "@material-ui/core";
import {
  KeyboardDatePicker,
  KeyboardTimePicker,
  MuiPickersUtilsProvider,
} from "@material-ui/pickers";
import React from "react";

const EventFormMUI = () => {
  const handleFieldChange = (event) => {
    console.log(event.target.value);
  };

  return (
    <div style={{ padding: 18, paddingLeft: 350 }}>
      <Grid container direction="column" justify="space-evenly" spacing={4}>
        <Grid item xs={12}>
          <TextField
            variant="outlined"
            label="Description"
            handleTextChange={handleFieldChange}
            multiline
            rows={4}
          />
        </Grid>
        <Grid item>
          <Grid container direction="row" justify="flex-start" spacing={4}>
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
              <Grid item>
                <KeyboardDatePicker
                  inputVariant="outlined"
                  id="date-picker-dialog"
                  label="Date"
                  format="MM/dd/yyyy"
                  minDate={new Date()}
                  KeyboardButtonProps={{
                    "aria-label": "change date",
                  }}
                />
              </Grid>
              <Grid item>
                <KeyboardTimePicker
                  inputVariant="outlined"
                  label="Time"
                  KeyboardButtonProps={{
                    "aria-label": "change time",
                  }}
                />
              </Grid>
            </MuiPickersUtilsProvider>
          </Grid>
        </Grid>
        <Grid item>
          <TextField variant="outlined" label="Duration" type="number" />
        </Grid>
        <Grid item>
          <Grid item>
            <Grid container direction="row" justify="flex-start" spacing={4}>
              <Grid item>
                <TextField variant="outlined" label="Address" />
              </Grid>
              <Grid item>
                <TextField variant="outlined" label="Latitude" type="number" />
              </Grid>
              <Grid item>
                <TextField variant="outlined" label="Longitude" type="number" />
              </Grid>
            </Grid>
          </Grid>
          <Grid item>
            <Grid container direction="row" justify="flex-start" spacing={4}>
              <Grid item>
                <TextField variant="outlined" label="City" />
              </Grid>
              <Grid item>
                <TextField variant="outlined" label="State" />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid item>
          <Grid container direction="row" justify="flex-start" spacing={4}>
            <Grid item>
              <TextField variant="outlined" label="Contact Name" />
            </Grid>
            <Grid item>
              <TextField variant="outlined" label="Contact Phone" />
            </Grid>
          </Grid>
        </Grid>
        <Grid item>
          <TextField
            variant="outlined"
            label="Note"
            multiline
            rows={4}
            handleTextChange={handleFieldChange}
          />
        </Grid>
        <Grid item>
          <Button color="primary" variant="contained">
            Create event
          </Button>
        </Grid>
      </Grid>
    </div>
  );
};

export default EventFormMUI;
