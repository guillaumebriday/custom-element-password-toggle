require('expect-puppeteer')

beforeAll(async () => {
  await page.goto('http://localhost:3000')
})

it('should be titled "Google"', async () => {
  await expect(page.title()).resolves.toMatch('Password Toggle Custom Element')
})

describe('#toggle', () => {
  it('should toggle the input type', async () => {
    const input = await page.$('input[type="password"]')
    const button = await page.$('button')
    const typeAttribute = c => c.getAttribute('type')

    expect(await input.evaluate(typeAttribute)).toBe('password')
    await button.click()
    expect(await input.evaluate(typeAttribute)).toBe('text')
  })
})
