beforeAll(async () => {
  await page.goto('http://localhost:6969/falsy-nodes');
});

describe('Falsy Nodes', () => {

  test('Null nodes should render a comment', async () => {
    const truth = await page.$eval('[data-null]', (e) => e.childNodes[0] instanceof Comment);
    expect(truth).toBeTruthy();
  });

  test('False nodes should render a comment', async () => {
    const truth = await page.$eval('[data-false]', (e) => e.childNodes[0] instanceof Comment);
    expect(truth).toBeTruthy();
  });

  test('Components returning null should render a comment', async () => {
    const truth = await page.$eval('[data-null-component]', (e) => e.childNodes[0] instanceof Comment);
    expect(truth).toBeTruthy();
  });

  test('Components returning false should render a comment', async () => {
    const truth = await page.$eval('[data-false-component]', (e) => e.childNodes[0] instanceof Comment);
    expect(truth).toBeTruthy();
  });

  test('Zero nodes should render a text node', async () => {
    const truth = await page.$eval('[data-zero]', (e) => e.textContent === '0');
    expect(truth).toBeTruthy();
  });

});