import { test, expect } from '@playwright/test'

test.describe('Catering Homepage', () => {
  test('renders hero section with real content', async ({ page }) => {
    await page.goto('/')
    await expect(page.locator('h1').first()).toContainText('Exceptional Cuisine')
    await expect(page.locator('text=Full-Service Catering').first()).toBeVisible()
  })

  test('renders stats section', async ({ page }) => {
    await page.goto('/')
    await expect(page.locator('text=1,200+').first()).toBeVisible()
    await expect(page.locator('text=250K+').first()).toBeVisible()
  })

  test('renders CTA section', async ({ page }) => {
    await page.goto('/')
    await expect(page.locator('text=Plan Your Event').first()).toBeVisible()
  })
})

test.describe('Menu Packages listing', () => {
  test('renders all packages', async ({ page }) => {
    await page.goto('/packages')
    await expect(page.locator('h1').first()).toContainText('Menu Packages')
    await expect(page.locator('text=Essential Package').first()).toBeVisible()
    await expect(page.locator('text=Classic Package').first()).toBeVisible()
    await expect(page.locator('text=Premium Package').first()).toBeVisible()
  })
})

test.describe('Event Types listing', () => {
  test('renders all event types', async ({ page }) => {
    await page.goto('/events')
    await expect(page.locator('h1').first()).toContainText('Event Types')
    await expect(page.locator('text=Wedding Catering').first()).toBeVisible()
    await expect(page.locator('text=Corporate Events').first()).toBeVisible()
    await expect(page.locator('text=Private Parties').first()).toBeVisible()
  })
})

test.describe('Testimonials listing', () => {
  test('renders testimonials', async ({ page }) => {
    await page.goto('/testimonials')
    await expect(page.locator('h1').first()).toContainText('Testimonials')
    await expect(page.locator('text=Perfect Wedding Feast').first()).toBeVisible()
    await expect(page.locator('text=Impressed Our Entire Board').first()).toBeVisible()
  })
})

test.describe('Navigation', () => {
  test('header navigation links work', async ({ page }) => {
    await page.goto('/')
    await page.locator('nav a:has-text("Menu Packages")').first().click()
    await expect(page).toHaveURL('/packages')
    await expect(page.locator('h1').first()).toContainText('Menu Packages')
  })

  test('can navigate to events from header', async ({ page }) => {
    await page.goto('/')
    await page.locator('nav a:has-text("Event Types")').first().click()
    await expect(page).toHaveURL('/events')
    await expect(page.locator('h1').first()).toContainText('Event Types')
  })

  test('can navigate to testimonials from header', async ({ page }) => {
    await page.goto('/')
    await page.locator('nav a:has-text("Testimonials")').first().click()
    await expect(page).toHaveURL('/testimonials')
  })
})

test.describe('Detail pages via slug routing', () => {
  test('package detail page loads', async ({ page }) => {
    await page.goto('/packages/essential')
    await expect(page.locator('h1').first()).toContainText('Essential Package')
  })

  test('event detail page loads', async ({ page }) => {
    await page.goto('/events/weddings')
    await expect(page.locator('h1').first()).toContainText('Wedding Catering')
  })

  test('testimonial detail page loads', async ({ page }) => {
    await page.goto('/testimonials/perfect-wedding-feast')
    await expect(page.locator('h1').first()).toContainText('Perfect Wedding Feast')
  })
})
