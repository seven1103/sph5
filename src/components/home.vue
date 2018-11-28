<template>
  <div class="main">
    <section class="rush">
      <div class="logo"></div>
      <div class="countdown">
        <p>距离结束还有 :</p>
        <div class="time">
          <span>21</span>
          <p>:</p>
          <span>21</span>
          <p>:</p>
          <span>21</span>
        </div>
      </div>
      <div class="propaganda">
        <div class="propaganda-img">
          <img  class="p-img" src="../../static/images/dabiaoti.png">
          <img  class="p-icon" src="../../static/images/xianshiqianggou.png">
        </div>
        <div class="line"></div>
        <img class="English" src="../../static/images/English.png">
      </div>
      <div class="price">
        <span>599元</span>
        抢购“首杯”酱香<br/>
        仁怀“首杯”经典
      </div>
    </section>
    <section class="describe"></section>
    <section class="describe"></section>
    <section class="describe"></section>
  </div>
</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .main .describe{
    width: 100%;
    height: 160vw;
  }
  .main .describe:nth-child(2){
    background: url('../../static/images/tu2.png') no-repeat;
    background-size: 100%;
  }
  .main .describe:nth-child(3){
    background: url('../../static/images/tu3.png') no-repeat;
    background-size: 100%;
  }
  .main .describe:nth-child(4){
    background: url('../../static/images/tu4.png') no-repeat;
    background-size: 100%;
  }
  .rush{
    position: relative;
    width: 100%;
    height: 180vw;
    background: url('../../static/images/tu1_beijing.png') no-repeat;
    background-size: 100%;
  }
  .logo{
    position: absolute;
    top: 15vw;
    right: .3rem;
    width: .45rem;
    height: 1rem;
    background: url('../../static/images/logo.png') no-repeat;
    background-size: 100%;
  }
  .countdown{
    position: absolute;
    top: 30vw;
    left: 13.6%;
    
  }
  .countdown p{
    color: #E74D3D;
    font-size: .15rem;
  }
  .time{
    margin-top: .1rem;
    font-size: .15rem;
    color: #E74D3D;
    display:-moz-box; /* Firefox */
    display:-webkit-box; /* Safari and Chrome */
    display:box;
  }
  .time span{
    display: block;
    background-color: #E74D3D;
    width: .3rem;
    text-align: center;
    line-height: .4rem;
    color: #ffffff;
    border-radius: .05rem;
  }
  .time p{
    display: block;
    width: .2rem;
    font-size: .25rem;
    text-align: center;
  }
  .propaganda{
    position: absolute;
    width: 100%;
    top: 55vw;
  }
  .propaganda-img{
    position: relative;
    width: 72.8%;
    left: 13.6%;
  }
  .p-img{
    float: left;
    width: 90%;
  }
  .p-icon{
    float: left;
    width: 8%;
    margin-left: 2%;
  }
  .line{
    position: relative;
    top: 10vw;
    width: 100%;
    height: 2vw;
    background: url('../../static/images/zhixian.png') no-repeat center;
    background-size: 100%;
  }
  .English{
    display: block;
    position: relative;
    left: 13.6%;
    top: 8vw;
    width: 72.8%;
    height: 3vw;
  }
  .price{
    width: 72.8%;
    position: relative;
    left: 13.6%;
    top: 78vw;
    color: #4D4D4D;
    font-size: .15rem;
  }
  .price span{
    color: #E74D3D;
    font-size: .25rem;
  }
</style>
