import { logoImg, qrcodeImg } from '@/assets/util/logImage';
const logo = `
      margin: 10px 0 0 0;
      padding: 20px 150px;
      background: url(${logoImg}) no-repeat;
    `;

const str1 =
  '\nNut[nʌt]，灵感源自电影《冰河世纪》\n剧中松鼠 Scrat "执迷不悟"，一生追求，即便引发大灾难也绝不松开手中坚果。\n';

const str2 =
  '\n每一个组件库都有一个驱动目标\n每一个人都是不可或缺的能量\n合作、创新、坚持是 NutUI 的动力\n优秀的你也能成为改变 NutUI 的动力\n';

const str3 =
  'NutUI 欢迎您的加入\n共建者邀请函：https://jelly.jd.com/article/6320528b92d94a0068685525\n开发共建规范：https://github.com/jdf2e/nutui/issues/1671';

const str4 = '\n点击即送：\n发送【NutUI 共建】+ 您的 github 账号\n至邮箱 nutui@jd.com\n';

const qrcode = `margin: 10px 0 0 0;padding: 60px 220px; background: url(${qrcodeImg}) no-repeat;`;

console.log('%c ', logo);
console.log('%c' + str1, 'color: blue');
console.log('%c' + str2, 'color: blue');
console.log('%c' + str3, 'color: red');
console.log('%c' + str4, 'color: red');
console.log('%c ', qrcode);
