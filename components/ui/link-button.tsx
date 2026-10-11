"use client";

import { Button, ButtonProps } from "@nextui-org/button";
import NextLink from "next/link";

/** Button rendered as a link; external URLs (panel) use a plain anchor. */
export function LinkButton({ href, ...props }: ButtonProps & { href: string }) {
  const external = /^https?:\/\//.test(href);

  return external ? (
    <Button as="a" href={href} {...props} />
  ) : (
    <Button as={NextLink} href={href} {...props} />
  );
}
