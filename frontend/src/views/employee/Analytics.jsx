import React, { lazy, Component } from "react";

import { VictoryBar, VictoryChart, VictoryAxis, VictoryTheme,VictoryLabel } from 'victory';
const LeftNavigation = lazy(() => import("../../components/LeftNavigation"));


const data = [
    { day: 'Mon', checkins: 15 },
    { day: 'Tue', checkins: 12 },
    { day: 'Wed', checkins: 20 },
    { day: 'Thu', checkins: 17 },
    { day: 'Fri', checkins: 22 },
    { day: 'Sat', checkins: 25 },
    { day: 'Sun', checkins: 18 }
  ];


const userName = "John";
const userRole = "employee";



const Analytics = () => {
    return (
      <div className="container-fluid my-3">
      <div className="row">
        <div className="col-md-2">
          <LeftNavigation userName={userName} userRole={userRole}/>
        </div>
        <div className="col-md-6">
        <h4 className="text-center">Member Enrollment</h4>
        <VictoryChart
          theme={VictoryTheme.material}
          text="Gym Checkins for the Last Week"
          domainPadding={20}
          height={250}
          width={400}
        >
            <VictoryLabel text="Gym Checkins for the Last Week" x={225} y={30} textAnchor="middle"/>
          <VictoryAxis
            tickValues={[1, 2, 3, 4, 5, 6, 7]}
            tickFormat={['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']}
          />
          <VictoryAxis dependentAxis />
          <VictoryBar data={data} x="day" y="checkins" />
        </VictoryChart>
        </div>

      </div>
    </div>
  );

};

export default Analytics;