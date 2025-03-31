import {z} from 'zod'

export const validate=z.object({
    email:z.string().trim().min(15),
    password:z.string().trim().min(15)
  })