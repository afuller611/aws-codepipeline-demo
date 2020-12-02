import React, { useState } from 'react';
import { Grid, Typography, Tabs, Tab, AppBar } from '@material-ui/core';
import { doughnutTypes, donuts } from './data'; // TODO -- get from API
import donutImage from './donut-sample.png'

const App = (props) => {
  const [value, setValue] = useState("All")
  console.log(value)
  return (
    <div style={{ padding: 40 }}>
      <Grid container justify="center">
        <Typography variant="h1" style={{ color: "#abccd4" }}>{"Get Yo' Donuts Here"}</Typography>
        <AppBar style={{ boxShadow: "none" }} position="static">
          <Tabs style={{ color: "black", backgroundColor: "white", padding: 0 }} centered value={value} onChange={(e, newValue) => setValue(newValue)} aria-label="simple tabs example">
            <Tab value={"All"} label="All" />
            {doughnutTypes.map((type, index) => (
              <Tab value={type} label={type} key={index} />
            ))}
          </Tabs>
        </AppBar>
        <Grid justify="center" container spacing={2} style={{ padding: 20 }}>
          {donuts.filter(donut => {
            if (value === "All") return true
            else return donut.Type === value
          }).map((donut, index) =>
            (
              // TODO -- get from API and figure out images
              // Probs make a common component for a donut
              <Grid key={index} direction="column" alignItems="center" container justify="center" item xs={3} wrap="wrap">
                <img src={donutImage} alt={donut.Name} />
                {donut.Name}
              </Grid>
            ))}
        </Grid>
      </Grid>
    </div>
  )
}

export default App;
