import React, { lazy, Component } from "react";
import {useState, useEffect} from 'react';

import { VictoryPie, VictoryChart, VictoryBar, VictoryLine, VictoryAxis, VictoryLegend,VictoryTheme,VictoryContainer,VictoryLabel } from "victory";

const LeftNavigation = lazy(() => import("../../components/LeftNavigation"));


const userActivityData_1 = [
  { x: "San Jose", y: 200 },
  { x: "Fremont", y: 300 },
  { x: "San Francisco", y: 150 },
  { x: "Dublin", y: 100 },
];

const classesData_1 = [
  { day: "Mon", classes: 20 },
  { day: "Tue", classes: 19 },
  { day: "Wed", classes: 18 },
  { day: "Thu", classes: 20 },
  { day: "Fri", classes: 17 },
  { day: "Sat", classes: 10 },
  { day: "Sun", classes: 8 },
];

const enrollmentData_1 = [
  { day: "Mon", enrollment: 20 },
  { day: "Tue", enrollment: 20 },
  { day: "Wed", enrollment: 20 },
  { day: "Thu", enrollment: 20 },
  { day: "Fri", enrollment: 20 },
  { day: "Sat", enrollment: 10 },
  { day: "Sun", enrollment: 10 },
];

const hoursSpentData_1 = [
  { time: "Day", hoursSpent: 20 },
  { time: "Week", hoursSpent: 100 },
  { time: "Month", hoursSpent: 300 },
];

const GymAnalytics = () => {

  const [userActivityData, setUserActivityData] = useState([]);
  const [classesData, setClassesData] = useState([]);
  const [enrollmentData, setEnrollmentData] = useState([]);
  const [hoursSpentData, setHoursSpentData] = useState([]);
  const [visitorsData, setVisitorsData] = useState([]);

  useEffect(() => {
    // Fetch data for each chart and set the state
    fetchUserActivityData();
    fetchClassesData();
    //fetchEnrollmentData();
    fetchHoursSpentData();
//     fetchVisitorsData();
  }, []);

  const fetchUserActivityData = async () => {
    // Fetch user activity data summarized by location
    //const response = await fetch("/api/userActivity");
    //const data = await response.json();
    //setUserActivityData(data);
    console.log(userActivityData_1)
    setUserActivityData(userActivityData_1);
  };

  const fetchClassesData = async () => {
    // Fetch classes and enrollment data by day/week
    // const response = await fetch("/api/classes");
    // const data = await response.json();
    // setClassesData(data.classes);
    // setEnrollmentData(data.enrollment);\
    setClassesData(classesData_1);
    setEnrollmentData(enrollmentData_1);
  };

  const fetchHoursSpentData = async () => {
    // Fetch hours spent data by day/week/month
    // const response = await fetch("/api/hoursSpent");
    // const data = await response.json();
    // setHoursSpentData(data);
    setHoursSpentData(hoursSpentData_1);
  };

//   const fetchVisitorsData = async () => {
//     // Fetch number of visitors data by the hour each day, weekday, weekend
//     // const response = await fetch("/api/visitors");
//     // const data = await response.json();
//     // setVisitorsData(data);
//     setVisitorsData(visitorsData_1);
//   };

    return (
      <div className="container-fluid my-3">
      <div className="row">
        <div className="col-md-2">
          <LeftNavigation />
        </div>

        <div className="col-md-5">
       {/* Classes and enrollment chart */}
       <VictoryChart domainPadding={20}
          text="Gym Checkins for the Last Week" containerComponent={<VictoryContainer style={{ height: "50%",width:"100%" ,padding: 0 }} />}>
        <VictoryLabel text="Number of classes and full enrollment by Last Week" x={225} y={30} textAnchor="middle"/>
        <VictoryAxis />
        <VictoryAxis dependentAxis />
        <VictoryLegend
                  x={300}
                  y={70}
                  title="Legend"
                  centerTitle
                  orientation="horizontal"
                  style={{
                    border: { stroke: "black" },
                    title: { fontSize: 10 }, // reduce font size of the title
                    labels: { fontSize: 8 } // reduce font size of the legend items
                  }}
                  data={[    { name: "Classes", symbol: { fill: "blue" } },    { name: "Enrollment", symbol: { fill: "green" } }  ]}
                />
        <VictoryLine data={classesData} x="day" y="classes" style={{ data: { stroke: "blue" } }} />
        <VictoryLine data={enrollmentData} x="day" y="enrollment" style={{ data: { stroke: "green" } }} />
        </VictoryChart>

      <VictoryChart domainPadding={20}  containerComponent={<VictoryContainer style={{ height: "50%",width:"100%" ,padding: 0 }} />}>
      <VictoryAxis label="Day/Week/Month" labelPlacement="parallel"
                              style={{ fontFamily: "Arial",
                                            axisLabel: { padding: 30 }
                                          }}/>

      <VictoryLabel text="Avg Hours spent by Day/Week/Month" x={225} y={30} textAnchor="middle"/>
        <VictoryAxis dependentAxis label="Hours spent in gym" labelPlacement="parallel"
                                style={{
                                    axisLabel: { padding: 40 }
                                  }}/>
        <VictoryBar data={hoursSpentData} x="time" y="hoursSpent" />
      </VictoryChart>
        </div>
          <div className="col-md-4">
{/*               <VictoryChart domainPadding={20} */}
{/*                         containerComponent={<VictoryContainer style={{ height: "100%", width: "100%", padding: 0 }} />} */}
{/*                       > */}
{/*                         <VictoryAxis label="Location" labelPlacement="parallel" */}
{/*                         style={{ */}
{/*                                       axisLabel: { padding: 30 } */}
{/*                                     }}/> */}
{/*                         <VictoryLabel text="Number of gym checking last week" x={150} y={30} textAnchor="middle" /> */}
{/*                         <VictoryAxis dependentAxis label="User Activity(hrs)" labelPlacement="parallel" */}
{/*                         style={{ */}
{/*                             axisLabel: { padding: 40 } */}
{/*                           }}/> */}
{/*                         <VictoryBar data={userActivityData} x="location" y="userActivity" /> */}
{/*                       </VictoryChart> */}
{/* Hours spent chart */}
<div width={300} height={300}>
<h4 style={{ fontFamily: "Arial"}} >Gym Checkins for the Last Week</h4>
      <VictoryPie
        data={userActivityData}
        labelRadius={70}
        style={{ labels: { fontSize: 10 } }}
        labels={({ datum }) => `${datum.x}: ${datum.y}`}
        innerRadius={120}
        padding={{ top: 10, bottom: 10 }}
      ></VictoryPie>
      </div>
              </div>


      </div>
    </div>
  );

};

export default GymAnalytics;