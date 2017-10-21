# springmvcspider
本项目借鉴于Gather Platform 数据采集与分析平台：
    https://github.com/gsh199449/spider
    
核心爬虫项目是
webmagic地址：https://github.com/code4craft/webmagic。

 项目目前只是采用react+redux前端技术重新画了一遍前端，核心功能还是Gather Platform功能，以下：
>* 根据配置的模板进行数据采集，支持Ajax网页采集
>* 在不配置采集模板的情况下自动检测网页正文,自动抽取文章发布时间
>* 动态字段抽取与静态字段植入
>* 已抓取数据的管理,包括:搜索,增删改查,按照新的数据模板重新抽取数据
>* 对采集的数据进行NLP处理,包括:抽取关键词,抽取摘要,抽取实体词
>* 含有相关文章推荐，文章中人物、地点之间的关联关系分析

5分钟即可部署完毕,半分钟即可完成一个爬虫,开始数据采集. 不需要进行任何编码就可以完成一个功能强大的爬虫.

## 快速开始
下载完代码后，前端需要通过npm获取第三方库,后台需要通过maven下载第三方包。
### 前端准备
1、安装nodejs

2、安装npm
由于npm国外源太慢，建议直接先切换淘宝源，因此安装完npm之后，采用下面的命令把源设置到淘宝，会比较快。
``` js
npm config set registry http://registry.npm.taobao.org/
```

3、cd 到src/main/webapp/目录下，安装前端依赖库
``` js
npm install
```

### 后台准备
1、开发工具打开工程后，刷新maven库会自动更新

2、采用的是ES数据库，因此需要下载ES，这里目前用的是5.0.0版本


## 运行
1、先把ES跑起来

2、运行springmvc
执行maven命令：clean tomcat:run，或者点击tomcat7:run，通过插件运行。

浏览器打开 localhost:8080/springmvcspider即可看到效果。



