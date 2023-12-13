import path from 'node:path'
import * as url from 'node:url'

const __dirname = url.fileURLToPath(new URL('.', import.meta.url))

export const LOGS_DIR = path.join(__dirname, '../../logs')
