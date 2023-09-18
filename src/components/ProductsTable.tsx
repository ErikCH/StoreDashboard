import {
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
} from "@aws-amplify/ui-react";
import { StorageImage } from "@aws-amplify/ui-react-storage";
import { ProductsTableProps } from "@/types/types";

export default function ProductsTable({ products }: ProductsTableProps) {
  return (
    <Table caption="Products" width="50%" margin="0 auto">
      <TableHead>
        <TableRow>
          <TableCell as="th">Name</TableCell>
          <TableCell as="th">Price</TableCell>
          <TableCell as="th">Genre</TableCell>
          <TableCell as="th">Platform</TableCell>
          <TableCell as="th">Image</TableCell>
          <TableCell as="th">Date Added</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {products.map((item, key) => (
          <TableRow key={key}>
            <TableCell>{item?.name}</TableCell>
            <TableCell>${item?.price}</TableCell>
            <TableCell>{item?.Genre?.name}</TableCell>
            <TableCell>{item?.Platform?.name}</TableCell>
            <TableCell>
              {item?.image === null || item?.image === undefined ? null : (
                <StorageImage
                  width="250px"
                  accessLevel="private"
                  alt="image"
                  imgKey={item?.image}
                ></StorageImage>
              )}
            </TableCell>
            <TableCell>
              {Intl.DateTimeFormat("en-us").format(new Date(item?.createdAt!))}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
