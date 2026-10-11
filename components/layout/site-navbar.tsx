"use client";

import { Button } from "@nextui-org/button";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
} from "@nextui-org/navbar";
import clsx from "clsx";
import NextLink from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

import { Logo } from "@/components/brand/logo";
import { siteConfig } from "@/config/site";

export function SiteNavbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <Navbar
      isBordered
      classNames={{
        base: "bg-background/70 backdrop-blur-lg",
        wrapper: "px-4",
      }}
      isMenuOpen={open}
      maxWidth="xl"
      onMenuOpenChange={setOpen}
    >
      <NavbarContent className="gap-3" justify="start">
        <NavbarMenuToggle
          aria-label={open ? "بستن منو" : "باز کردن منو"}
          className="lg:hidden"
        />
        <NavbarBrand as={NextLink} href="/">
          <Logo size={34} />
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden lg:flex gap-6" justify="center">
        {siteConfig.navItems.map((item) => (
          <NavbarItem key={item.href} isActive={isActive(item.href)}>
            <NextLink
              className={clsx(
                "text-sm transition-colors",
                isActive(item.href)
                  ? "text-primary font-semibold"
                  : "text-default-600 hover:text-foreground",
              )}
              href={item.href}
            >
              {item.label}
            </NextLink>
          </NavbarItem>
        ))}
      </NavbarContent>

      <NavbarContent className="gap-2" justify="end">
        <NavbarItem className="hidden sm:flex">
          <Button
            as="a"
            href={siteConfig.links.login}
            size="sm"
            variant="light"
          >
            ورود
          </Button>
        </NavbarItem>
        <NavbarItem>
          <Button
            as="a"
            className="font-semibold"
            color="primary"
            href={siteConfig.links.register}
            size="sm"
          >
            شروع چالش
          </Button>
        </NavbarItem>
      </NavbarContent>

      <NavbarMenu className="pt-6 gap-4">
        {siteConfig.navItems.map((item) => (
          <NavbarMenuItem key={item.href}>
            <NextLink
              className={clsx(
                "text-lg",
                isActive(item.href) ? "text-primary" : "text-foreground",
              )}
              href={item.href}
              onClick={() => setOpen(false)}
            >
              {item.label}
            </NextLink>
          </NavbarMenuItem>
        ))}
        <NavbarMenuItem>
          <a className="text-lg text-default-500" href={siteConfig.links.login}>
            ورود به پنل کاربری
          </a>
        </NavbarMenuItem>
      </NavbarMenu>
    </Navbar>
  );
}
