import { execSync } from 'child_process'
import readline from 'readline'

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

const run = (command) => {
  console.log(`\n> ${command}`)
  execSync(command, { stdio: 'inherit' })
}

rl.question('Describe el cambio realizado: ', (message) => {
  const commitMessage = message.trim() || 'Update: Portfolio changes'

  try {
    run('npm run build')
    run('npm run deploy')
    run('git add .')
    run(`git commit -m "${commitMessage}"`)
    run('git push')

    console.log('\n¡Publicado exitosamente!')
  } catch (error) {
    console.error('\nError durante la publicación:', error.message)
  }

  rl.close()
})
