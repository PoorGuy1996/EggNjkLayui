'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);//首页
  router.get('/login', controller.account.login);//登录页
  router.post('/login', controller.account.loginApi);//登录接口
};
