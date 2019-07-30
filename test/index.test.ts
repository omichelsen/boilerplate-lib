/* tslint:disable:no-unused-expression */
import proxyquire from 'proxyquire'
import { expect } from './expect'

const platformMock = {
  isMac: true,
  isWindows: false,
}

const { greeter } = proxyquire.noCallThru().load('../src/index', {
  './platform': platformMock,
})

describe('index', () => {
  it('should return greeting for Mac', () => {
    platformMock.isMac = true
    platformMock.isWindows = false

    expect(greeter()).to.eql('Hello, I\'m a Mac')
  })

  it('should return greeting for Windows', () => {
    platformMock.isMac = false
    platformMock.isWindows = true

    expect(greeter()).to.eql('Hello, I\'m a PC')
  })

  it('should return greeting for other platform', () => {
    platformMock.isMac = false
    platformMock.isWindows = false

    expect(greeter()).to.eql('Hello, I\'m something else')
  })
})
