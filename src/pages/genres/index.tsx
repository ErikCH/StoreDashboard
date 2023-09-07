import {
  Button,
  Divider,
  Flex,
  Heading,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  View
} from "@aws-amplify/ui-react";
import { useRouter } from "next/router";

export default function Genres() {
  const router = useRouter();
  return (
    <>
      <Flex
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        gap="1rem"
        width="100%"
        padding="1rem"
        backgroundColor="white"
        className="underline"
      >
        <Heading level={1}>Genres</Heading>
        <Button variation="primary" onClick={() => router.push("/genres/new")}>
          Add Genre
        </Button>
      </Flex>
      <Table caption="Large Table" width="50%" margin="0 auto">
        <TableHead>
          <TableRow>
            <TableCell as="th">Name</TableCell>
            <TableCell as="th">Value</TableCell>
            <TableCell as="th">Date</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell>Large</TableCell>
            <TableCell>Large</TableCell>
            <TableCell>Large</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Large</TableCell>
            <TableCell>Large</TableCell>
            <TableCell>Large</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Large</TableCell>
            <TableCell>Large</TableCell>
            <TableCell>Large</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </>
  );
}
