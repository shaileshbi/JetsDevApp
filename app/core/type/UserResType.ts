import { Dob } from "./DobType"
import { Id } from "./IdType"
import { Location } from "./LocationType"
import { Login } from "./LoginType"
import { Name } from "./NameType"
import { Picture } from "./PictureType"
import { Registered } from "./RegisteredType"

 export  type UserResType ={
    gender: string
    name: Name
    location: Location
    email: string
    login: Login
    dob: Dob
    registered: Registered
    phone: string
    cell: string
    id: Id
    picture: Picture
    nat: string
  }