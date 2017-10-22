import { Address } from "../../../utils/models/address.model";
import { Company } from "../../../utils/models/company.model";

export interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  address: Address;
  phone: string;
  website: string;
  company: Company;
}
