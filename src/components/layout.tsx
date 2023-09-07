import React from "react";
import { useParams, usePathname } from "next/navigation";
import Link from "next/link";
import { Button, Divider, Flex, View } from "@aws-amplify/ui-react";

export default function Layout({
  children,
  ...props
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const params = useParams();

  const routes = [
    {
      href: `/`,
      label: "Home",
      active: pathname === `/`
    },
    {
      href: `/genres`,
      label: "Genres",
      active: pathname === `/genres`
    },
    {
      href: `/platforms`,
      label: "Platform",
      active: pathname === `/platforms`
    },
    {
      href: `/products`,
      label: "Products",
      active: pathname === `/products`
    }
  ];
  return (
    <>
      <Flex
        direction="row"
        justifyContent={"space-between"}
        alignItems="center"
        marginBottom={"1rem"}
      >
        <nav className={"flex items-center space-x-4 lg:space-x-6"} {...props}>
          {routes.map((route) => (
            <Link
              key={route.href}
              href={route.href}
              className={`text-sm font-medium transition-colors hover:text-primary 
              ${
                route.active
                  ? "text-black dark:text-white"
                  : "text-muted-foreground"
              }`}
            >
              {route.label}
            </Link>
          ))}
        </nav>
        <Button variation="primary" borderRadius={"100%"} className="h-8 w-8">
          A
        </Button>
      </Flex>
      <Divider size="small"></Divider>
      {children}
    </>
  );
}
