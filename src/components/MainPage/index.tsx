import React from "react";
import useSearchLocation from "../../hooks/useSearchLocation";

const check = [
  {
    name: "harshit",
    value: "101",
  },
  {
    name: "anuj",
    value: "102",
  },
  {
    name: "vikram",
    value: "103",
  },
  {
    name: "sumit",
    value: "104",
  },
  {
    name: "subh",
    value: "105",
  },
];

const MainPage = () => {
  const userData = useSearchLocation();
  console.log(userData);

  return (
    <div>
      {Object.keys(userData).map((value) => (
        <div>
          {value}:<span>{userData[value]}</span>
        </div>
      ))}
      <div>
        {/* {check.map((item, idx) =>
          item.name === userData.firstName ? (
            <div>
              <div>Value: {item.value}</div>
              <div>Present At: {idx}</div>
            </div>
          ) : (
            <></>
          )
        )} */}
        {check.find((item) => userData?.firstName === item.name)?.value}
      </div>
    </div>
  );
};

export default MainPage;
