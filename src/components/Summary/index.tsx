import React from "react";
import { useLocation } from "react-router-dom";
const data1 = [
  {
    email: "harshit",
    active: "true",
  },
  {
    email: "kartik",
    active: "true",
  },
  {
    email: "mohak",
    active: "true",
  },
  {
    email: "tarun",
    active: "true",
  },
  {
    email: "hritik",
    active: "true",
  },
];
const data2 = [
  {
    email: "shiv",
    active: "true",
  },
  {
    email: "sim",
    active: "true",
  },
  {
    email: "tarun",
    active: "true",
  },
  {
    email: "harshit",
    active: "true",
  },
];
console.log(
  data1.filter((value) => !data2.some((item) => item.email === value.email))
);
const Summary = () => {
  const search = useLocation().search;
  const userData = Object.fromEntries(new URLSearchParams(search.toString()));

  console.log(userData);
  // const newData = {};

  // const yo_data = JSON.parse(userData.name);
  // console.log("--", yo_data);

  // console.log("data", userData);
  //   Object.keys(userData).forEach(
  //     (value) => (newData[value] = JSON.parse(userData[value]))
  //   );
  return <div></div>;
};

export default Summary;

/*

{
    "name": "{ firstName:harshit, lastName:sahu, }",
    "dob": "18/10/1998",
    "hobbies": "[football,cricket,music]",
    "task": "[task1,task2]",
    "add": "[{ name:harshit, age:20   },{address:pune, phone:1234567890, email:idk@knw.kom}]"
}

*/
