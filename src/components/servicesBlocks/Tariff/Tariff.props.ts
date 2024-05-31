import { IRate } from "@/types/type"

export interface TariffProps {
  rates: IRate[];
  discount?: boolean;
  title?: string;
  description?: string;
}
