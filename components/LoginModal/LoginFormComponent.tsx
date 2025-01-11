import { Form } from "@nextui-org/form";
import { Input } from "@nextui-org/input";
import { Icon } from "@iconify/react";
import { Link } from "@nextui-org/link";
import { Button } from "@nextui-org/button";
import { Divider } from "@nextui-org/divider";
import { ModalBody, ModalFooter, ModalHeader } from '@nextui-org/modal';
import { useState } from "react";

export default function LoginFormComponent() {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => setIsVisible(!isVisible);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("handleSubmit");
  };

  return (
    <>
      <ModalHeader className="flex flex-col gap-1">
        <div className="flex flex-col gap-1">
          <h1 className="text-large font-medium text-center mt-4 mb-4">ورود بـــه اکـانت</h1>
        </div>
      </ModalHeader>
      <ModalBody>
        <Form
          className="flex flex-col gap-3"
          validationBehavior="native"
          onSubmit={handleSubmit}
        >
          <Input
            isRequired
            label="ادرس ایـمـیــل"
            name="email"
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
            label="رمـز عـبـور"
            name="password"
            type={isVisible ? "text" : "password"}
            variant="bordered"
          />
          <div className="flex w-full items-center justify-between px-1 py-2">
            <p />
            <Link className="text-default-500" href="#">
              رمـز عبـور خود را فــرامـوش کـردیـد؟
            </Link>
          </div>
          <Button className="w-full font-bold text-black" color="primary" type="submit">
            ورود
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
