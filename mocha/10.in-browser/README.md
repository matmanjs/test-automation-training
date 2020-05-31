# 10.in-browser

Mocha 支持在浏览器中运行。

- [RUNNING MOCHA IN THE BROWSER](https://mochajs.org/#running-mocha-in-the-browser)

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Mocha</title>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="//unpkg.com/mocha/mocha.css" />
  </head>
  <body>
    <div id="mocha"></div>
    <script src="//unpkg.com/chai/chai.js"></script>
    <script src="//unpkg.com/mocha/mocha.js"></script>

    <script class="mocha-init">
      mocha.setup('bdd');
      mocha.checkLeaks();
    </script>

    <script src="add.js"></script>
    <script src="tests.js"></script>

    <script>
      mocha.run();
    </script>
  </body>
</html>
```