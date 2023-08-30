import { Coordinates } from "./CoordinatesType"
import { Street } from "./StreetType"
import { Timezone } from "./TimezoneType"

export type Location = {
    street: Street
    city: string
    state: string
    country: string
    postcode: number
    coordinates: Coordinates
    timezone: Timezone
  }