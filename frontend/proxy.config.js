const proxy = [
  {
    context: '/api',
    target: 'http://localhost:5221',
    pathRewrite: { '^/api': '' }
  }
];
module.exports = proxy;
