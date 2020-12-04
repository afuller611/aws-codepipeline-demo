import React, { useEffect, useState } from 'react';
import { Grid, Typography, Tabs, Tab, AppBar, CircularProgress } from '@material-ui/core';
import { doughnutTypes, donuts } from './data'; // TODO -- get from API
import axios from 'axios';
import Donut from './Donut';

const App = (props) => {
  const [value, setValue] = useState("All");
  const [loading, setLoading] = useState(false);
  const [newDonuts, setDonuts] = useState([])

  useEffect(() => {
    setLoading(true);
    axios.get("https://2mqovj2zbg.execute-api.us-east-1.amazonaws.com/Prod").then((res) => {
      setDonuts(res.data)
      setLoading(false)
    })
  }, [])

  const getUniqueDonutTypes = () => {
    let donutTypes = newDonuts.map((donut => donut.typeArray)).flat()
    return [... new Set(donutTypes)]
  }

  return (
    <div style={{ padding: 40 }}>
      <Grid container justify="center">
        <Typography variant="h1" style={{ color: "#abccd4" }}>{"Get Yo' Donuts Here"}</Typography>
        {loading ?
          <Grid container justify="center">
            <CircularProgress />
          </Grid>
          :
          <>
            <AppBar style={{ boxShadow: "none" }} position="static">
              <Tabs style={{ color: "black", backgroundColor: "white", padding: 0 }} centered value={value} onChange={(e, newValue) => setValue(newValue)} aria-label="simple tabs example">
                <Tab value={"All"} label="All" />
                {getUniqueDonutTypes().map((type, index) => (
                  <Tab value={type} label={type} key={index} />
                ))}
              </Tabs>
            </AppBar>
            <Grid justify="center" container spacing={2} style={{ padding: 20 }}>
              {newDonuts.filter(donut => {
                if (value === "All") return true
                else return donut.typeArray.includes(value)
              }).map((donut, index) =>
                (
                 <Donut key={index} donut={donut} />
                ))}
            </Grid>
          </>
        }
      </Grid>
    </div>
  )
}

export default App;
