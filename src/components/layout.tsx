import React from "react";
import Link from "next/link";
import { Button, Divider, Flex } from "@aws-amplify/ui-react";

export default function Layout({
  children,
  ...props
}: {
  children: React.ReactNode;
}) {
  const routes = [
    {
      href: "/",
      label: "Overview",
    },
    {
      href: "/genres",
      label: "Genres",
    },
    {
      href: "/platforms",
      label: "Platform",
    },
    {
      href: "/products",
      label: "Products",
    },
  ];
  return (
    <>
      <Flex
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        marginBottom="1rem"
      >
        <Flex
          as="nav"
          alignItems="center"
          gap="3rem"
          margin="0 2rem"
          {...props}
        >
          {routes.map((route) => (
            <Link key={route.href} href={route.href}>
              {route.label}
            </Link>
          ))}
        </Flex>
        <Button variation="primary" borderRadius="100%">
          A
        </Button>
      </Flex>
      <Divider size="small"></Divider>
      {children}
    </>
  );
}
