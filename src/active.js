/**
 *
 * 保持活跃，避免被优弧盯上
 *
 *  */
const { UUID } = process.env;
const fetch = require('node-fetch');
const { headers } = require('./config');
const {sleepRandom} = require("./util");

async function active() {
  await sleepRandom(240,180)
  //获取首页文章列表
  await fetch(`https://api.juejin.cn/recommend_api/v1/article/recommend_all_feed?aid=2608&uuid=${UUID}&spider=0`, {
    headers,
    method: 'POST',
    credentials: 'include',
    body: JSON.stringify({id_type:2,client_type:2608,sort_type:200,cursor:0,limit:20})
  })

  await sleepRandom(120,60)
  //获取沸点
  await fetch(`https://api.juejin.cn/recommend_api/v1/short_msg/recommend?aid=2608&uuid=${UUID}&spider=0`, {
    headers,
    method: 'POST',
    credentials: 'include',
    body: JSON.stringify({id_type:4,sort_type:300,cursor:0,limit:20})
  })
  return 'active success'
}

module.exports = active;
