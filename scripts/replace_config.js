/* global hexo */

'use strict';

hexo.on('generateBefore', function () {
  var rootConfig = hexo.config;

  if (hexo.locals.get) {
    var data = hexo.locals.get('data');
    
    if (data && data.blank) {
      hexo.theme.config = data.blank;
    }
  }
  
  hexo.theme.config.rootConfig = rootConfig;
});