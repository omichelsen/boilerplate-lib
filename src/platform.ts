const { platform } = process

export const isMac = platform === 'darwin'
export const isWindows = platform === 'win32'
