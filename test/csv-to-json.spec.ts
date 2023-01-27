import {lineToQuote} from "../src/quotes"
import {expect} from "chai"

describe("lineToQuote", () => {
  context("happy path", () => {
    const sampleLine = "@el marto  but he stated on twitter just in 2020 that he was going vegan. he hasn t been vegan for 14 years."
    it("produces a Quote with the line content as the txt property", () => {
      const quote = lineToQuote(sampleLine)
      const d = new Date(Date.now())

      expect(quote).to.have.property('id')
      expect(quote).to.have.property('line', sampleLine)
      expect(quote).to.have.property('date')
      expect(quote.date.getDay()).to.equal(d.getDay())
      expect(quote.date.getMonth()).to.equal(d.getMonth())
      expect(quote.date.getFullYear()).to.equal(d.getFullYear())
      expect(quote.date.getHours()).to.equal(d.getHours())
      expect(quote.date.getMinutes()).to.be.approximately(d.getMinutes(), 1)
    })
  })
  context("bad arguments", () => {
    it("throws an error for null", () => {
      const lammy = () => {
        // @ts-ignore
        const quote = lineToQuote(null)
      }
      expect(lammy).to.throw("Argument must be a non-empty string")
    })
    it("throws an error a number", () => {
      const lammy = () => {
        // @ts-ignore
        const quote = lineToQuote(1)
      }
      expect(lammy).to.throw("Argument must be a non-empty string")
    })
    it("throws an error when given an empty string", () => {
        const lammy = () => {
          // @ts-ignore
          const quote = lineToQuote("")
        }
        expect(lammy).to.throw("Argument must be a non-empty string")
      }
    )
  })
})
