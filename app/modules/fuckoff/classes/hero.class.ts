
export class Hero {
  id: number;
  uid: string;
  name: string;
  vehicle?: string;
  reward?: {
    value: number;
    currency: string;
  } 
}