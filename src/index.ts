import { isMac, isWindows } from './platform'

export const greeter = () => {
  if (isMac) {
    return 'Hello, I\'m a Mac'
  } else if (isWindows) {
    return 'Hello, I\'m a PC'
  }
  return 'Hello, I\'m something else'
}
