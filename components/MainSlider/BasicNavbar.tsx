"use client";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
  NavbarProps,
} from "@nextui-org/navbar";
import React from "react";
import { Link } from "@nextui-org/link";
import { Button } from "@nextui-org/button";
import { Icon } from "@iconify/react";
import { Divider } from "@nextui-org/divider";
import { cn } from "@nextui-org/theme";

import { AcmeIcon } from "./Social";

import { ThemeSwitch } from "@/components/theme-switch";
import LoginModelBtn from "@/components/LoginModal/LoginModel";

const menuItems = [
  "About",
  "Blog",
  "Customers",
  "Pricing",
  "Enterprise",
  "Changelog",
  "Documentation",
  "Contact Us",
];

const BasicNavbar = React.forwardRef<HTMLElement, NavbarProps>(
  ({ classNames = {}, ...props }, ref) => {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);

    return (
      <Navbar
        ref={ref}
        {...props}
        classNames={{
          base: cn("border-default-100 bg-transparent", {
            "bg-default-200/50 dark:bg-default-100/50": isMenuOpen,
          }),
          wrapper: "w-full justify-center",
          item: "hidden md:flex",
          ...classNames,
        }}
        height="60px"
        isMenuOpen={isMenuOpen}
        onMenuOpenChange={setIsMenuOpen}
      >
        {/* Left Content */}
        <NavbarBrand>
          <div className="rounded-full bg-default-foreground text-background">
            <AcmeIcon size={34} />
          </div>
          <span className="ml-2 text-small font-medium text-default-foreground">
            ACME
          </span>
        </NavbarBrand>

        {/* Center Content */}
        <NavbarContent justify="center">
          <NavbarItem
            isActive
            className="data-[active='true']:font-medium[date-active='true']"
          >
            <Link
              aria-current="page"
              className="text-default-foreground"
              href="#"
              size="sm"
            >
              خـانـه
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link className="text-default-500" href="#" size="sm">
              دربـاره مـا
            </Link>
          </NavbarItem>
        </NavbarContent>

        {/* Right Content */}
        <NavbarContent className="hidden md:flex" justify="end">
          <NavbarItem className="ml-2 !flex gap-2">
            <ThemeSwitch />
            <LoginModelBtn />
            <Button
              className="bg-default-foreground font-medium text-background"
              color="secondary"
              endContent={<Icon icon="solar:alt-arrow-right-linear" />}
              radius="full"
              variant="flat"
            >
              شروع
            </Button>
          </NavbarItem>
        </NavbarContent>

        <NavbarMenuToggle className="text-default-400 md:hidden" />

        <NavbarMenu
          className="top-[calc(var(--navbar-height)_-_1px)] max-h-fit bg-default-200/50 pb-6 pt-6 shadow-medium backdrop-blur-md backdrop-saturate-150 dark:bg-default-100/50"
          motionProps={{
            initial: { opacity: 0, y: -20 },
            animate: { opacity: 1, y: 0 },
            exit: { opacity: 0, y: -20 },
            transition: {
              ease: "easeInOut",
              duration: 0.2,
            },
          }}
        >
          <NavbarMenuItem>
            <Button fullWidth as={Link} href="/#" variant="faded">
              Sign In
            </Button>
          </NavbarMenuItem>
          <NavbarMenuItem className="mb-4">
            <Button
              fullWidth
              as={Link}
              className="bg-foreground text-background"
              href="/#"
            >
              Get Started
            </Button>
          </NavbarMenuItem>
          {menuItems.map((item, index) => (
            <NavbarMenuItem key={`${item}-${index}`}>
              <Link className="mb-2 w-full text-default-500" href="#" size="md">
                {item}
              </Link>
              {index < menuItems.length - 1 && (
                <Divider className="opacity-50" />
              )}
            </NavbarMenuItem>
          ))}
        </NavbarMenu>
      </Navbar>
    );
  },
);

BasicNavbar.displayName = "BasicNavbar";

export default BasicNavbar;
