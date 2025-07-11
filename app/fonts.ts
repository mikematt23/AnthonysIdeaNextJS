import { Heebo, Unbounded, Bebas_Neue } from "next/font/google";

const unbounded = Unbounded({
  subsets:["latin"]
})
const heebo = Heebo({
  subsets:["latin"]
})
const bebas = Bebas_Neue({
  weight:['400'],
  subsets:['latin']
})
export {unbounded, heebo, bebas}