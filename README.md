# hexo-theme-blank
a simple hexo theme

# Demo

<a href="https://dmx.pub/">mywebsite</a>

# Screenshots

![](https://raw.githubusercontent.com/a2396837/hexo-theme-blank/master/Screenshots/screenshot.jpg)


# How to use

## 安装
1. ``
git clone https://github.com/a2396837/hexo-theme-blank.git themes/blank
``
2. 修改站点配置文件``_config.yml``，把主题改为``blank``

## 标签页

1. 前往你的 Hexo 博客的根目录
2. 输入hexo new page tags
3. 你会找到source/tags/index.md这个文件
4. 修改这个文件：
```
---
title: 标签
date: 2020-04-04 13:15:29
type: 'tags'
comments: false
---
```


## 分类

1. 前往你的 Hexo 博客的根目录
2. 输入hexo new page category
3. 你会找到source/category/index.md这个文件
4. 修改这个文件：

```
---
title: 分类
date: 2020-04-06 12:44:34
type: 'category'
comments: false
---
```

## 归档页

1. 前往你的 Hexo 博客的根目录
2. 输入hexo new page archives
3. 你会找到source/archives/index.md这个文件
4. 修改这个文件：
```
---
title: 归档
date: 2020-04-05 12:06:45
type: 'archives'
comments: false
---
```

# 创建友情链接页面
1. 前往你的 Hexo 博客的根目录
2. 输入 hexo new page link
3. 你会找到source/link/index.md这个文件
4. 修改这个文件：
```
---
title: 友情链接
date: 2020-04-27 13:16:03
type: link
---
```

5. 在主题的_config.yml 最下面

```
# 友情链接
mylinks:
  - name:  xxx
    avatar: https://cdn.xxxxx.top/avatar.png 
    link: https://blog.xxx.com 
    info: xxx
    
  - name:  xxx
    avatar: https://cdn.xxxxx.top/avatar.png 
    link: https://blog.xxx.com 
    info: xxx
```
