const path = require('path');
const WebPackUploadOssPlugin = require('@jd/upload-oss-tools');
const config = require('./../package.json');
new WebPackUploadOssPlugin({
  localFullPath: path.resolve(__dirname, `./../dist/`), // 被上传的本地绝对路径，自行配置
  access: 'ZoiivHG7A4HWhTou', // http://oss.jd.com/user/glist 生成的 access key
  secret: 'FD5YLA8LIZH4knS27CkK9VQDRCEfILTDWShO0UaL', // http://oss.jd.com/user/glist 生成的 secret key
  site: '', // 远程 oss 路径 非必填 默认 storage.jd.com 可选(中国:storage.jd.com 印尼:storage.jd.id 泰国:storage.jd.co.th 测试:test.oss.jd.com)
  useHttps: true, // 是否启用https通信 默认true
  bucket: 'nutui', // 空间名字 仅能由小写字母、数字、点号(.)、中划线(-)组成
  folder: 'newsite', // 空间文件名称 非必填 (建议填写，否则将清空对应bucket下所有内容)
  ignoreRegexp: '', // 排除的文件规则 正则字符串
  printCdnFile: true // 是否手动刷新cdn文件 默认false
}).upload();
