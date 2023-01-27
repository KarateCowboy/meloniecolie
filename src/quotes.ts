import {ObjectId} from "mongodb"

export type Quote = {
  id: string,
  line: string,
  date: Date
}

export const lineToQuote = (line: string): Quote => {
  if ("string" !== typeof line || !line) throw Error("Argument must be a non-empty string")
  const id = new ObjectId().toString()
  const now = new Date(Date.now())
  return {
    id,
    line: line,
    date: now
  } as Quote
}
