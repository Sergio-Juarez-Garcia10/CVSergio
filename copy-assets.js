import { copyFileSync, mkdirSync, existsSync, readdirSync } from 'fs'
import { join, dirname } from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const srcDir = join(__dirname, 'assets', 'img')
const destDir = join(__dirname, 'dist', 'assets', 'img')

// Crear carpeta destino si no existe
if (!existsSync(destDir)) {
  mkdirSync(destDir, { recursive: true })
}

// Copiar todos los archivos de assets/img a dist/assets/img
const files = readdirSync(srcDir)
let copied = 0

files.forEach(file => {
  const srcFile = join(srcDir, file)
  const destFile = join(destDir, file)
  copyFileSync(srcFile, destFile)
  copied++
})

console.log(`✓ ${copied} archivos copiados a dist/assets/img/`)
