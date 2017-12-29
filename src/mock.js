// 引入mockjs
const Mock = require('mockjs');
// 获取 mock.Random 对象
const Random = Mock.Random;
// mock一组数据
const produceNewsData = function() {
  var result = [];
  for (let i = 0; i < 5; i++) {
    var orderLine = [];
    var lineLength = Random.integer(1, 5);
    console.log(Random.integer(1, 5));
    for (let i = 0; i < lineLength; i++) {
      orderLine.push({
        image: Random.image('200x100'),
        price: Random.float(1, 1000),
        num: Random.integer(1, 10),
        desc: Random.ctitle(2, 5) + '重约' + Random.integer(1, 5000) + 'g',
        title: Random.ctitle(5, 8)
      });
    }
    var province = Random.province();
    var city = Random.city(province);
    var county = Random.county(city);
    var stateList = [
      { name: 'need_pay', title: '待付款' },
      { name: 'need_send', title: '待发货' },
      { name: 'need_pay', title: '完成' }];
    var newArticleObject = {
      title: Random.csentence(5, 10), //  Random.csentence( min, max )
      state: stateList[Random.integer(0, 2)], // Random.dataImage( size, text ) 生成一段随机的 Base64 图片编码
      name: '' + Random.natural(), // Random.cname() 随机生成一个常见的中文姓名
      message: '产品共计1 合计 ¥ 20(含运费¥ 1)', // Random.date()指示生成的日期字符串的格式,默认为yyyy-MM-dd；Random.time() 返回一个随机的时间字符串
      otherMessage: '运费保险 等', // Random.date()指示生成的日期字符串的格式,默认为yyyy-MM-dd；Random.time() 返回一个随机的时间字符串
      orderLine: orderLine,
      userAddress: county
    };
    result.push(newArticleObject);
  };
  return {
    result: result
  };
};

// Mock.mock( url, post/get , 返回的数据)；
Mock.mock('/get/orders', 'post', produceNewsData);

const onProduct = function() {
  var orderLine = [];
  var lineLength = Random.integer(1, 5);
  console.log(Random.integer(1, 5));
  for (let i = 0; i < lineLength; i++) {
    orderLine.push({
      image: Random.image('200x100'),
      price: Random.float(1, 1000),
      num: Random.integer(1, 10),
      desc: Random.ctitle(2, 5) + '重约' + Random.integer(1, 5000) + 'g',
      title: Random.ctitle(5, 8)
    });
  }
  var province = Random.province();
  var city = Random.city(province);
  var county = Random.county(city);
  var stateList = [
    { name: 'need_pay', title: '待付款' },
    { name: 'need_send', title: '待发货' },
    { name: 'need_pay', title: '完成' }];
  var newArticleObject = {
    title: Random.csentence(5, 10), //  Random.csentence( min, max )
    state: stateList[Random.integer(0, 2)], // Random.dataImage( size, text ) 生成一段随机的 Base64 图片编码
    name: '' + Random.natural(), // Random.cname() 随机生成一个常见的中文姓名
    message: '产品共计1 合计 ¥ 20(含运费¥ 1)', // Random.date()指示生成的日期字符串的格式,默认为yyyy-MM-dd；Random.time() 返回一个随机的时间字符串
    otherMessage: '运费保险 等', // Random.date()指示生成的日期字符串的格式,默认为yyyy-MM-dd；Random.time() 返回一个随机的时间字符串
    orderLine: orderLine,
    userAddress: county,
    currentContact: { name: Random.ctitle(2, 4), tel: '' + Random.integer(11), address: county }
  };
  return {
    result: newArticleObject
  };
};
Mock.mock('/get/orderDetail', 'post', onProduct);
const homePage = function() {
  var allData = { hotCat: '', images: '', competitiveProducts: '' };
  var hotRowLine = [];
  var hotCatLine = [];
  for (let i = 0; i < 2; i++) {
    hotCatLine = [];
    for (let j = 0; j < 4; j++) {
      hotCatLine.push({
        image: Random.image('200x200'),
        productId: Random.integer(1000, 8000),
        name: Random.ctitle(2, 4),
        price: Random.integer(2, 100) + '积分'
      });
    }
    hotRowLine.push(hotCatLine);
  }
  var images = [];
  for (let i = 0; i < 4; i++) {
    images.push({
      image: Random.image('500x500'),
      articleId: Random.integer(1000, 8000)
    });
  }
  var competitiveProducts = { name: '精品推荐', product: [] };
  for (let i = 0; i < 9; i++) {
    competitiveProducts.product.push({
      image: Random.image('80x80'),
      articleId: Random.integer(1000, 8000),
      name: Random.integer(1000, 8000)
    });
  }

  allData.hotCat = hotRowLine;
  allData.images = images;
  allData.competitiveProducts = competitiveProducts;
  return {
    result: allData
  };
};
Mock.mock('/get/homePageVal', 'post', homePage);
