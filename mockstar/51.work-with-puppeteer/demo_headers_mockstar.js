const puppeteer = require('puppeteer');
const { createMockStarQuery } = require('mockstar');

async function dealWithMockStar(page, queryDataMap) {
  // 必须要开启拦截 request
  await page.setRequestInterception(true);

  // 增加 request 拦截，注入 headers
  page.on('request', request => {
    // console.log('request.url()', request.url());
    // console.log('request.headers()', request.headers());
    // console.log('request.resourceType()', request.resourceType());

    // TODO 注意：本示例中为了演示的方便，增加了 document 类型，实际情况需要排除掉
    // TODO 还要考虑 queryDataMap 为 undefined 的场景
    if (request.resourceType() === 'xhr' || request.resourceType() === 'fetch' || request.resourceType() === 'document') {
      // 必须放在这里，每次都实时获取，后续在更换 mockstar 桩数据时才会生效

      const mockstarQuery = createMockStarQuery(queryDataMap);
      const mockstarQueryString = mockstarQuery.getString();

      // Override headers
      const headers = Object.assign({}, request.headers(), {
        'x-mockstar-query': encodeURIComponent(mockstarQueryString),
      });

      request.continue({ headers });
    } else {
      request.continue();
    }
  });
}

(async () => {
  // https://www.npmjs.com/package/puppeteer
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();

  // 返回指定数据：借助 headers
  await dealWithMockStar(page, {
    'demo_cgi': 'success_js_module',
  });

  await page.goto('http://127.0.0.1:9527/cgi-bin/a/b/demo_cgi');
  await page.waitFor(1000);

  const result = await page.evaluate(() => ({
    title: document.title,
    content: JSON.parse(document.querySelector('body').innerText),
  }));

  console.log(result);

  // 关闭浏览器
  await browser.close();
})();
