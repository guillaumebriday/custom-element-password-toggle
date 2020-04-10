require('expect-puppeteer')

beforeAll(async () => {
  await page.goto('http://localhost:3000')
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
