const puppeteer = require('puppeteer');

(async () => {
  // https://www.npmjs.com/package/puppeteer
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();

  // 返回指定数据：借助 url query
  await page.goto('http://127.0.0.1:9527/cgi-bin/a/b/demo_cgi?_ms_target=error_100000');
  await page.waitFor(1000);

  const result = await page.evaluate(() => ({
    title: document.title,
    content: JSON.parse(document.querySelector('body').innerText),
  }));

  console.log(result);

  // 关闭浏览器
  await browser.close();
})();
