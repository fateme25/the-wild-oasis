import { useForm } from "react-hook-form";
import { styled } from "styled-components";

import Button from "../../ui/Button";
import Form from "../../ui/Form";
import FormRow from "../../ui/FormRow";
import Input from "../../ui/Input";

import { useUpdateUser } from "./useUpdateUser";
import { HiOutlineEyeOff } from "react-icons/hi";
import { HiOutlineEye } from "react-icons/hi2";
import { useState } from "react";

const StyledIcon = styled.span`
  display: flex;
  margin-left: -62px;
  font-size: 17px;
`;

function Icon({ onClick, children }) {
  return <StyledIcon onClick={onClick}>{children}</StyledIcon>;
}

function UpdatePasswordForm() {
  const { register, handleSubmit, formState, getValues, reset } = useForm();
  const { errors } = formState;
  const { updateUser, isUpdating } = useUpdateUser();
  const [showPasswords, setShowPasswords] = useState({
    password: false,
    confirmPassword: false,
  });

  function togglePassword(name) {
    setShowPasswords((prev) => ({
      ...prev,
      [name]: !prev[name],
    }));
  }

  function onSubmit({ password }) {
    updateUser({ password }, { onSuccess: reset });
  }

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <FormRow
        label="New Password (min 8 characters)"
        error={errors?.password?.message}
      >
        <Input
          type={showPasswords.password ? "text" : "password"}
          id="password"
          autoComplete="current-password"
          disabled={isUpdating}
          style={{ paddingRight: "2.5rem" }} // ایجاد فضای کافی برای آیکون
          {...register("password", {
            required: "This field is required",
            minLength: {
              value: 8,
              message: "Password needs a minimum of 8 characters",
            },
          })}
        />

        <Icon onClick={() => togglePassword("password")}>
          {showPasswords.password ? <HiOutlineEyeOff /> : <HiOutlineEye />}
        </Icon>
        {/* <span
          onClick={() => togglePassword("password")}
          style={{
            display: "flex",
            marginLeft: "-62px",
            fontSize: "17px",
          }}
        >
          {showPasswords.password ? <HiOutlineEyeOff /> : <HiOutlineEye />}
        </span> */}
      </FormRow>

      <FormRow
        label="Confirm password"
        error={errors?.passwordConfirm?.message}
      >
        <Input
          type={showPasswords.confirmPassword ? "text" : "password"}
          autoComplete="new-password"
          id="passwordConfirm"
          disabled={isUpdating}
          style={{ paddingRight: "2.5rem" }}
          {...register("passwordConfirm", {
            required: "This field is required",
            validate: (value) =>
              getValues().password === value || "Passwords need to match",
          })}
        />
        <Icon onClick={() => togglePassword("confirmPassword")}>
          {showPasswords.confirmPassword ? (
            <HiOutlineEyeOff />
          ) : (
            <HiOutlineEye />
          )}
        </Icon>
      </FormRow>

      <FormRow>
        <Button onClick={reset} type="reset" variation="secondary">
          Cancel
        </Button>
        <Button disabled={isUpdating}>Update password</Button>
      </FormRow>
    </Form>
  );
}

export default UpdatePasswordForm;
