import { Checkbox } from "@mui/material";
import React from "react";
import { Controller, useForm } from "react-hook-form";

const CheckBox = () => {
  const { control, handleSubmit } = useForm();
  const onSubmit = (data: any) => {
    console.log(data);
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Controller
        control={control}
        name="test"
        render={({
          field: { onChange, onBlur, value, name, ref },
          fieldState: { invalid, isTouched, isDirty, error },
          formState,
        }) => (
          <Checkbox
            onBlur={onBlur} // notify when input is touched
            onChange={onChange} // send value to hook form
            checked={value}
            inputRef={ref}
          />
        )}
      />
    </form>
  );
};

export default CheckBox;
