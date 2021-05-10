import sinon from 'sinon'
import { addHours, addMinutes } from '../src/date'
import { expect } from './expect'

describe('date', () => {
  let clock: sinon.SinonFakeTimers

  beforeEach(() => {
    clock = sinon.useFakeTimers()
    expect(clock.now).to.eql(0)
  })

  afterEach(() => {
    clock.restore()
  })

  describe('addMinutes', () => {
    it('should add 3x60k seconds to a date', () => {
      expect(addMinutes(3)).to.eql(3 * 60 * 1000)
    })
  })

  describe('addHours', () => {
    it('should add 3x60x60k seconds to a date', () => {
      expect(addHours(3)).to.eql(3 * 60 * 60 * 1000)
    })
  })
})
