import { z } from "zod";

const userMessageSchema = z.string().min(1)

export { userMessageSchema }