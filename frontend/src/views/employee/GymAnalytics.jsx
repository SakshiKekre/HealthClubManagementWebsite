import React, { lazy, Component } from "react";
import {useState, useEffect} from 'react';

import { VictoryChart, VictoryBar, VictoryLine, VictoryAxis, VictoryLegend,VictoryTheme,VictoryContainer,VictoryLabel } from "victory";

const LeftNavigation = lazy(() => import("../../components/LeftNavigation"));


const userActivityData_1 = [
  { location: "Gym 1", userActivity: 200 },
  { location: "Gym 2", userActivity: 300 },
  { location: "Gym 3", userActivity: 150 },
  { location: "Gym 4", userActivity: 100 },
];

const classesData_1 = [
  { day: "Mon", classes: 10 },
  { day: "Tue", classes: 15 },
  { day: "Wed", classes: 20 },
  { day: "Thu", classes: 15 },
  { day: "Fri", classes: 10 },
  { day: "Sat", classes: 5 },
  { day: "Sun", classes: 2 },
];

const enrollmentData_1 = [
  { day: "Mon", enrollment: 50 },
  { day: "Tue", enrollment: 60 },
  { day: "Wed", enrollment: 70 },
  { day: "Thu", enrollment: 60 },
  { day: "Fri", enrollment: 50 },
  { day: "Sat", enrollment: 30 },
  { day: "Sun", enrollment: 20 },
];

const hoursSpentData_1 = [
  { time: "Day", hoursSpent: 500 },
  { time: "Week", hoursSpent: 3500 },
  { time: "Month", hoursSpent: 15000 },
];

const visitorsData_1 = [
  { hour: "00:00", weekday: 50, weekend: 75 },
  { hour: "01:00", weekday: 40, weekend: 60 },
  { hour: "02:00", weekday: 30, weekend: 45 },
  { hour: "03:00", weekday: 20, weekend: 30 },
  { hour: "04:00", weekday: 10, weekend: 15 },
  { hour: "05:00", weekday: 5, weekend: 10 },
  { hour: "06:00", weekday: 10, weekend: 20 },
  { hour: "07:00", weekday: 20, weekend: 30 },
  { hour: "08:00", weekday: 40, weekend: 60 },
  { hour: "09:00", weekday: 50, weekend: 75 },
  { hour: "10:00", weekday: 70, weekend: 100 },
  { hour: "11:00", weekday: 80, weekend: 120 },
  { hour: "12:00", weekday: 100, weekend: 150 },
  { hour: "13:00", weekday: 120, weekend: 180 },
  { hour: "14:00", weekday: 140, weekend: 200 },
  { hour: "15:00", weekday: 160, weekend: 230 },
  { hour: "16:00", weekday: 180, weekend: 260 },
  { hour: "17:00", weekday: 200, weekend: 300 },
  { hour: "18:00", weekday: 220, weekend: 330 },
  { hour: "19:00", weekday: 240, weekend: 360 },
  { hour: "20:00", weekday: 260, weekend: 390 },
  { hour: "21:00", weekday: 280, weekend: 420 },
  { hour: "22:00", weekday: 300, weekend: 450 },
  { hour: "23:00", weekday: 320, weekend: 480 },
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
    fetchVisitorsData();
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

  const fetchVisitorsData = async () => {
    // Fetch number of visitors data by the hour each day, weekday, weekend
    // const response = await fetch("/api/visitors");
    // const data = await response.json();
    // setVisitorsData(data);
    setVisitorsData(visitorsData_1);
  };

    return (
      <div className="container-fluid my-3">
      <div className="row">
        <div className="col-md-2">
          <LeftNavigation />
        </div>
        <div className="col-md-5">
      <VictoryChart domainPadding={20} theme={VictoryTheme.material}
          text="Gym Checkins for the Last Week" containerComponent={<VictoryContainer style={{ height: "50%",width:"100%" ,padding: 0 }} />}>
            <VictoryAxis/>
        <VictoryLabel text="Activity data summarized by location" x={225} y={30} textAnchor="middle"/>
        <VictoryAxis dependentAxis />
        <VictoryBar data={userActivityData} x="location" y="userActivity" />
      </VictoryChart>
      </div>
        <div className="col-md-5">
       {/* Classes and enrollment chart */}
       <VictoryChart domainPadding={20} theme={VictoryTheme.material}
          text="Gym Checkins for the Last Week" containerComponent={<VictoryContainer style={{ height: "50%",width:"100%" ,padding: 0 }} />}>
        <VictoryLabel text="classes and enrollment data by day/week" x={225} y={30} textAnchor="middle"/>
        <VictoryAxis />
        <VictoryAxis dependentAxis />
        <VictoryLegend x={200} y={70}
          title="Legend"
          centerTitle
          orientation="horizontal"
          gutter={20}
          style={{ border: { stroke: "black" }, title: { fontSize: 10 } }}
          data={[
            { name: "Classes", symbol: { fill: "blue" } },
            { name: "Enrollment", symbol: { fill: "green" } }
          ]}
        />
        <VictoryLine data={classesData} x="day" y="classes" style={{ data: { stroke: "blue" } }} />
        <VictoryLine data={enrollmentData} x="day" y="enrollment" style={{ data: { stroke: "green" } }} />
      </VictoryChart>

        
      {/* Hours spent chart */}
      <VictoryChart domainPadding={20} theme={VictoryTheme.material} containerComponent={<VictoryContainer style={{ height: "50%",width:"100%" ,padding: 0 }} />}>
      <VictoryLabel text="Hours spent by Day/Week/Month" x={225} y={30} textAnchor="middle"/>
        <VictoryAxis />
        <VictoryAxis dependentAxis />
        <VictoryBar data={hoursSpentData} x="time" y="hoursSpent" />
      </VictoryChart>



        </div>

      </div>
    </div>
  );

};

export default GymAnalytics;