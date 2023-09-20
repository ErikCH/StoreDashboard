import { Product } from "@/API";

export interface TableValues {
  name?: string | null | undefined;
  value?: string | null | undefined;
  createdAt: string;
}

export interface ProductDetailsProps {
  headingName: string;
  items: TableValues[];
}

export interface ProductsTableProps {
  products: Product[];
  onClickDelete: (id: string) => void;
  admin: boolean;
}

export interface ItemsTableProps {
  tableName: string;
  data: TableValues[];
}
