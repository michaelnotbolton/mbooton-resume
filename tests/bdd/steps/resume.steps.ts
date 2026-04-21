import { expect } from '@playwright/test'
import { createBdd, test } from 'playwright-bdd'

const { Given, Then } = createBdd(test)

Given('I open the resume homepage', async ({ page }) => {
  await page.goto('/')
})

Given('I open the resume homepage with reduced motion enabled', async ({ page }) => {
  await page.emulateMedia({ reducedMotion: 'reduce' })
  await page.goto('/')
})

Then('I should see the hero heading {string}', async ({ page }, heading: string) => {
  await expect(page.getByRole('heading', { level: 1, name: heading })).toBeVisible()
})

Then('I should see the text {string}', async ({ page }, text: string) => {
  await expect(page.getByText(text)).toBeVisible()
})

Then('I should see the section {string}', async ({ page }, sectionName: string) => {
  await expect(page.getByRole('region', { name: sectionName })).toBeVisible()
})

Then('I should see {int} project cards', async ({ page }, count: number) => {
  await expect(page.getByTestId('project-card')).toHaveCount(count)
})

Then('I should see the contact link {string}', async ({ page }, label: string) => {
  await expect(page.getByRole('link', { name: label, exact: true })).toBeVisible()
})

Then('the page should mark motion as reduced', async ({ page }) => {
  await expect(page.getByTestId('resume-app')).toHaveAttribute('data-reduced-motion', 'true')
})

Then('the decorative backdrop should stop animating', async ({ page }) => {
  await expect(page.getByTestId('circuit-backdrop')).toHaveAttribute('data-animated', 'false')
})
