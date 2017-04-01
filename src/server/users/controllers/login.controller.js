const { renderToString } = require('react-dom/server');
const { createElement } = require('react');
const path = require('path');
const { compiledAssets } = require(path.resolve('./config/config'));

/**
* @function login
* @summary render the login page
* @name exports.login
* @static
* @param {Express.Request} req - Express request object
* @param {Express.Response} res - Express response object
*/
exports.login = (req, res) => {
  // Get the markup from our component
  const markup = compiledAssets.js['login-component']
    ? renderToString(createElement(compiledAssets.js['login-component'].default))
    : '';

  res.render('login', {
    critical: compiledAssets.css['login/css/login.scss'],
    common: compiledAssets.js.common,
    loginjs: compiledAssets.js.login,
    markup: markup
  });
};
