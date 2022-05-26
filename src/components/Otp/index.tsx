import React from "react";
import { Controller } from "react-hook-form";
import OtpInput from "react-otp-input";

type OtpProps = {
  focus: boolean;
  inputField?: number;
  disable?: boolean;
  placeholder: string;
  separator?: any;
  inputStyle: any;
  isInputNum?: boolean;
  rules: any;
  control: any;
  name: string;
  errors: any;
};

const Otp = ({
  focus,
  inputField = 4,
  disable,
  placeholder,
  separator,
  inputStyle,
  isInputNum = true,
  rules,
  control,
  name,
  errors,
}: OtpProps) => {
  //   console.log(errors, !!errors[name]);
  return (
    <Controller
      control={control}
      name={name}
      render={({ field: { onChange, value } }) => {
        console.log(value);
        return (
          <OtpInput
            onChange={onChange}
            shouldAutoFocus={focus}
            numInputs={inputField}
            value={value}
            isDisabled={disable}
            isInputNum={isInputNum}
            placeholder={placeholder}
            separator={<span>{separator}</span>}
            inputStyle={inputStyle}
            hasErrored={!!errors[name]}
            errorStyle={{ border: "1px solid red " }}
            //   isInputSecure
          />
        );
      }}
      rules={rules}
    />
  );
};

export default Otp;
