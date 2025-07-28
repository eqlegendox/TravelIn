import { z } from "zod";

const userIdSchema = z.number().min(1).max(10)

export { userIdSchema }