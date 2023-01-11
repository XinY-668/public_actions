/*
* 获取随机时间，以秒为单位
* */
function getRandomTime(max,min = 0){
  return Math.floor(Math.random() * (max - min + 1) + min)  * 1000;
}

/*
* 随机等待时长
* */
function sleepRandom(max,min = 0){
  return new Promise(resolve => {
    setTimeout(()=>{
      resolve()
    },getRandomTime(max,min))
  })
}

module.exports = sleepRandom
