"use client";
import { Button } from "@nextui-org/button";
import {
  Modal,
  ModalContent,
  ModalFooter,
  useDisclosure,
} from "@nextui-org/modal";
import React, { useState } from "react";
import { Link } from "@nextui-org/link";

import RegisterFormComponent from "@/components/LoginModal/RegisterFormComponent";
import LoginFormComponent from "@/components/LoginModal/LoginFormComponent";

export default function LoginModelBtn() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  const [showMood, setShowMood] = useState(0);

  return (
    <>
      <Button as={Link} href={"http://127.0.0.1:3002"}  className="text-default-500" radius="full" variant="light">
        ورود
      </Button>
      {/*<Button onPress={onOpen}>Open Modal</Button>*/}
      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              {showMood == 0 ? (
                <>
                  <LoginFormComponent />{" "}
                  <ModalFooter>
                    <p className="text-center w-full text-small mb-8">
                      آیـا نـیـاز بــه ایـجـاد یـکـــــ حـسـابــ داریـد؟&nbsp;
                      <Link href="#" onPress={() => setShowMood(1)}>
                        ثـبـتـــ نـام
                      </Link>
                    </p>
                  </ModalFooter>{" "}
                </>
              ) : null}
              {showMood == 1 ? (
                <>
                  <RegisterFormComponent />
                  <ModalFooter>
                    <div className={"w-full"}>
                      <p className="text-center w-full text-small ">
                        از قـبـل حـسـابــ کـاربـری داریـد؟&nbsp;
                        <Link href="#" onPress={() => setShowMood(0)}>
                          وارد شـویــد
                        </Link>
                      </p>

                      <div className="text-center mb-8">
                        <Link href="#">بـازیـابـی اکـانـتـــ؟</Link>
                      </div>
                    </div>
                  </ModalFooter>
                </>
              ) : null}
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
