import { execSync } from 'node:child_process'
import { existsSync, readFileSync } from 'node:fs'
import path from 'node:path'
import { expect } from '@playwright/test'
import { createBdd, test } from 'playwright-bdd'

const { Given, When, Then } = createBdd(test)

let buildOutput = ''

Given('the production build configuration is present', async () => {
  const configText = readFileSync(path.resolve('vite.config.ts'), 'utf8')
  expect(configText).toContain("base: command === 'build' ? '/mbooton-resume/' : '/'")
})

Given('the application dependencies are installed', async () => {
  expect(existsSync(path.resolve('node_modules'))).toBe(true)
})

When('I run the production build', async () => {
  buildOutput = execSync('npm run build', {
    encoding: 'utf8',
    env: { ...process.env },
  })
})

Then('the repository base path should be {string}', async ({ page }, basePath: string) => {
  void page
  const configText = readFileSync(path.resolve('vite.config.ts'), 'utf8')
  expect(configText).toContain(`'${basePath}'`)
})

Then('the deployment workflow should target GitHub Pages', async () => {
  const workflowText = readFileSync(path.resolve('.github/workflows/deploy.yml'), 'utf8')
  expect(workflowText).toContain('actions/configure-pages')
  expect(workflowText).toContain('actions/upload-pages-artifact')
  expect(workflowText).toContain('actions/deploy-pages')
})

Then('the build should complete successfully', async () => {
  expect(buildOutput).toContain('vite v')
  expect(existsSync(path.resolve('dist/index.html'))).toBe(true)
})

Then(
  'the built index file should reference the repository base path {string}',
  async ({ page }, basePath: string) => {
    void page
    const builtIndex = readFileSync(path.resolve('dist/index.html'), 'utf8')
    expect(builtIndex).toContain(`${basePath}assets/`)
  },
)
