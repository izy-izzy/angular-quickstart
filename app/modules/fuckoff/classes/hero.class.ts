
export class Hero {
  id: number;
  uid: number;
  name: string;
  vehicle?: string;
  reward?: {
    value: number;
    currency: string;
  } 
}