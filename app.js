const http = require('http')
const homePage = `
  <html>
    <head>
    <meta charset="utf-8"/>
    <title>Node js部署上线</title>
    <style>
      * {
        padding: 0;
        margin: 0;
      }
      body {
        padding: 30px 0;
        text-align: center;
        font-size: 16px;
        background-color: #333;
      }
      h1,
      h2 {
        color: #fff;
      }
      nav {
        margin-top: 20px;
      }
      a {
        color: #ccc;
        text-decoration: none;
      }
      a:hover {
        text-decoration: underline;
      }
    </style>
    </head>
    <body>
      <h1>chen nodeJS部署</h1>
      <h2>项目部署上线示范</h2>
      <nav>
        <ul>
         <li>
         <a target="_blank" href="/a">翼赛PC</a>
         </li>
         <li>
         <a target="_blank" href="/a">翼赛APP</a>
         </li>
         <li>
         <a target="_blank" href="/a">翼赛小程序</a>
         </li>
         <li>
         <a target="_blank" href="/a">翼赛Admin</a>
         </li>
        </ul>
      </nav>
    </body>
  </html>
`
http.createServer((req,res) => {
  res.statusCode = 200
  res.setHeader('Content-Type', 'text/html')
  res.end(homePage)  
}).listen(8080, () => {
  console.log('Server Running At 8080')
})