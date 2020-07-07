

hexo.extend.generator.register('404', function (locals) {
    if (!hexo.theme.config.page_404.enable) return
    return {
      path: '404.html',
      data: {},
      layout: ['404','layout']
    };
  });