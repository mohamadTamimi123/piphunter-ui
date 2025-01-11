"use client";

import React, { useEffect } from "react";
import { Icon } from "@iconify/react";
import { Input } from "@nextui-org/input";
import { Button } from "@nextui-org/button";
import { Link } from "@nextui-org/link";
import { Checkbox } from "@nextui-org/checkbox";
import { Form } from "@nextui-org/form";
import { ModalBody, ModalHeader } from "@nextui-org/modal";
import { Divider } from "@nextui-org/divider";
import { Tooltip } from "@nextui-org/tooltip";
import { toast, ToastContentProps } from "react-toastify";
import { Alert } from "@nextui-org/alert";

export default function RegisterFormComponent() {
  const [password, setPassword] = React.useState("");
  const [confirmPassword, setConfirmPassword] = React.useState("");
  const [submitted, setSubmitted] = React.useState(null);
  const [errors, setErrors] = React.useState({});

  const [isVisible, setIsVisible] = React.useState(false);

  const toggleVisibility = () => setIsVisible(!isVisible);

  const [isConfirmVisible, setIsConfirmVisible] = React.useState(false);

  const toggleConfirmVisibility = () => setIsConfirmVisible(!isConfirmVisible);

  // Real-time password validation
  const getPasswordError = (value: string) => {
    if (value.length < 4) {
      return "Password must be 4 characters or more";
    }
    if ((value.match(/[A-Z]/g) || []).length < 1) {
      return "Password needs at least 1 uppercase letter";
    }
    if ((value.match(/[^a-z]/gi) || []).length < 1) {
      return "Password needs at least 1 symbol";
    }

    return null;
  };

  const getConfirmPasswordError = (value: string) => {
    if (value.length < 4) {
      return "Password must be 4 characters or more";
    }
    if ((value.match(/[A-Z]/g) || []).length < 1) {
      return "Password needs at least 1 uppercase letter";
    }
    if ((value.match(/[^a-z]/gi) || []).length < 1) {
      return "Password needs at least 1 symbol";
    }

    if (value !== password) {
      return "Mismatch error";
    }

    return null;
  };

  const getEmailError = (value: string) => {
    if (value.length < 4) {
      return "Password must be 4 characters or more";
    }
    if (
      (
        value.match(
          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        ) || []
      ).length < 1
    ) {
      return "Password needs at least 1 uppercase letter";
    }
    if ((value.match(/[^a-z]/gi) || []).length < 1) {
      return "Password needs at least 1 symbol";
    }

    if (value !== password) {
      return "Mismatch error";
    }

    return null;
  };

  useEffect(() => {
    function fetchPosts() {
      const head = new Headers();

      fetch(`${process.env.API_PATH}/api/v1/auth/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(submitted),
      })
        .then((res) => {
          if (res.status !== 200) {
            notify();
          } else {
            return res.json();
          }
        })
        .then((data) => console.log(data));

      setSubmitted(null);
    }

    if (submitted !== null) {
      fetchPosts();
    }
  }, [submitted]);

  const onSubmit = (e: any) => {
    e.preventDefault();

    const data = Object.fromEntries(new FormData(e.currentTarget));

    const newErrors: any = {};

    // Password validation
    // @ts-ignore
    const passwordError = getPasswordError(data.password);

    if (passwordError) {
      newErrors.password = passwordError;
    }

    // Username validation
    if (data.name === "admin") {
      newErrors.name = "Nice try! Choose a different username";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);

      console.log(errors);

      return;
    }

    if (data.terms !== "true") {
      setErrors({ terms: "Please accept the terms" });
      console.log(errors);

      return;
    }

    // Clear errors and submit
    setErrors({});
    // @ts-ignore
    setSubmitted(data);
  };

  const notify = () => {
    toast.error("error");
  };

  function CustomComponent({ isPaused, closeToast }: ToastContentProps) {
    return (
      <div className="w-full flex items-center my-3">
        <Alert color={"danger"} title={`This is a  alert`} />
      </div>
    );
  }

  return (
    <>
      <ModalHeader className="flex flex-col gap-1">
        <div className="flex flex-col gap-1">
          <h1 className="text-large font-medium text-center mt-4 mb-4">
            ثـبـتـــ نــام
          </h1>
        </div>
      </ModalHeader>
      <ModalBody>
        <Form
          className="w-full justify-center items-center space-y-4"
          validationBehavior="native"
          validationErrors={errors}
          // onReset={() => setSubmitted(null)}
          onSubmit={onSubmit}
        >
          <Input
            isRequired
            data-name={"email"}
            errorMessage={({ validationDetails }) => {
              if (validationDetails.valueMissing) {
                return "Please enter your email";
              }
              if (validationDetails.typeMismatch) {
                return "Please enter a valid email address";
              }
            }}
            label="ادرس ایـمـیـل"
            name="username"
            type="email"
            variant="bordered"
          />
          <Input
            isRequired
            endContent={
              <button type="button" onClick={toggleVisibility}>
                {isVisible ? (
                  <Icon
                    className="pointer-events-none text-2xl text-default-400"
                    icon="solar:eye-closed-linear"
                  />
                ) : (
                  <Icon
                    className="pointer-events-none text-2xl text-default-400"
                    icon="solar:eye-bold"
                  />
                )}
              </button>
            }
            errorMessage={getPasswordError(password)}
            isInvalid={getPasswordError(password) !== null}
            label="رمز عـبـور"
            name="password"
            type={isVisible ? "text" : "password"}
            value={password}
            variant="bordered"
            onValueChange={setPassword}
          />
          <Input
            isRequired
            endContent={
              <button type="button" onClick={toggleConfirmVisibility}>
                {isConfirmVisible ? (
                  <Icon
                    className="pointer-events-none text-2xl text-default-400"
                    icon="solar:eye-closed-linear"
                  />
                ) : (
                  <Icon
                    className="pointer-events-none text-2xl text-default-400"
                    icon="solar:eye-bold"
                  />
                )}
              </button>
            }
            errorMessage={getConfirmPasswordError(confirmPassword)}
            isInvalid={getConfirmPasswordError(confirmPassword) !== null}
            label="تـکـرار رمـز عـبـور"
            name="confirmPassword"
            type={isConfirmVisible ? "text" : "password"}
            value={confirmPassword}
            variant="bordered"
            onValueChange={setConfirmPassword}
          />
          <Checkbox
            isRequired
            className="py-4 w-full text-right"
            color={"success"}
            name={"terms"}
            size="sm"
            value={"true"}
          >
            بـا
            <Link href={""}>
              <Tooltip
                color="success"
                content="برای خواندن کلیک کنید !"
                offset={-7}
              >
                <Button color="success" variant="faded">
                  قـوانـیـن و مـقـرراتـــــ
                </Button>
              </Tooltip>
            </Link>
            مـوافـق ام
          </Checkbox>

          <Button
            className="w-full  text-black"
            color="primary"
            isLoading={submitted !== null}
            type={"submit"}
          >
            ثبت نام
          </Button>
        </Form>
        <div className="flex items-center gap-4 py-2">
          <Divider className="flex-1" />
          <p className="shrink-0 text-tiny text-default-500">یــــا</p>
          <Divider className="flex-1" />
        </div>
        <div className="flex flex-col gap-2">
          <Button
            color="primary"
            startContent={<Icon icon="flat-color-icons:google" width={24} />}
            variant="bordered"
          >
            ادامـه بـا گـوگـل
          </Button>
          <Button
            color="primary"
            startContent={
              <Icon className="text-default-500" icon="fe:github" width={24} />
            }
            variant="bordered"
          >
            ادامـه بـا گـیـتـــ هـابــ
          </Button>
        </div>
      </ModalBody>
    </>
  );
}
