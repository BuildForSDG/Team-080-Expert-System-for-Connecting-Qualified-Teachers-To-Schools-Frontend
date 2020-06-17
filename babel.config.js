module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        targets: {
          node: 'current'
        }
      }
    ],
    '@babel/preset-react',
  ]
};


// babel.config.js
/*module.exports = {
  presets: ['@babel/preset-env', '@babel/preset-react'],
};*/
