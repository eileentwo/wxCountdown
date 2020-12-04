function addzero(num){
  return num>9?num:'0'+num;
}
class Countdown {
  static init(endTime,countdownId,that) {
    let end = new Date(endTime).getTime()

    that.setData({
      [countdownId]: {
        countdown: parseInt((end - new Date().getTime())/1000),
        day: parseInt((end - new Date().getTime())/1000/60/60/24),
        hour: parseInt((end - new Date().getTime())/1000/60/60%24),
        minute: addzero(parseInt((end - new Date().getTime())/1000/60%60)),
        seconds: addzero(parseInt((end - new Date().getTime())/1000)%60)
      }
    })

    let interval = setInterval(() => {
      that.setData({
        [countdownId]: {
          countdown: parseInt((end - new Date().getTime())/1000),
          day: parseInt((end - new Date().getTime())/1000/60/60/24),
          hour: parseInt((end - new Date().getTime())/1000/60/60%24),
          minute:addzero(parseInt((end - new Date().getTime())/1000/60%60)),
          seconds: addzero(parseInt((end - new Date().getTime())/1000)%60)
        }
      })

      if (that.data[countdownId].countdown <= 0) {
        clearInterval(interval)
        that.setData({seconds: 0})
      }
    }, 1000)
  }
}
export default Countdown
