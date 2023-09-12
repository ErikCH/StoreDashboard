import { Genre, Product } from "@/API";

export type TableValues = Pick<Genre, "name" | "value" | "createdAt">;
