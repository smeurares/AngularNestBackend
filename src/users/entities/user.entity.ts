export class User {
  id: string
  name: string
  email: string
  password: string
  role: string
  created: Date
  updated: Date
  boughtProducts: string[] //to change to Product entity when done
}
