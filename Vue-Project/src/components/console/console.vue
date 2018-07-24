<template>
<div class=" console" ref="container">  
     <el-row  :gutter="10" style="margin:20px 10px 0;">
            <el-col :xs="24" :sm="12" :md="6"  >
              <div  class="item" style="background:rgb(49, 180, 141);">
                <div >
                  <img src="../../assets/1.png" class="picture" />
                </div>
                <div>
                  <p class="title">昨日浏览</p>
                <p class="number">55</p>
                </div>
                
              </div>
                
            </el-col>
            <el-col :xs="24" :sm="12" :md="6">
              <div  class="item"  style="background: rgb(56, 161, 242);">
                <div >
                  <img src="../../assets/2.png" class="picture" />
                </div>
                <div>
                  <p class="title">总访问数</p>
                <p class="number">66</p>
                </div>
                
              </div>
            </el-col>
            <el-col :xs="24" :sm="12" :md="6"  >
              <div class="item"  style="background: rgb(117, 56, 199);"> 
                 <div >
                  <img src="../../assets/3.png" class="picture" />
                </div>
                <div>
                 <p class="title">总订阅数</p>
                 <p class="number">77</p>
                </div> 
              </div>               
            </el-col>
            <el-col :xs="24" :sm="12" :md="6"  >
              <div  class="item" style="background: rgb(59, 103, 164);">
                 <div >
                  <img src="../../assets/4.png" class="picture" />
                </div>
                <div>
                <p class="title">总收入数</p>
                <p class="number">77</p>
                </div> 
              </div>
                
            </el-col>
        </el-row>
  </div>      
</template>

<script>

export default {
  data(){
    return{

    }
  },
  methods:{
    setHeight() {
      let h = document.documentElement.clientHeight || document.body.offsetHeight;
      this.$refs.container.style.minHeight = h - 60 - 80-40 +'px';
    },
  },
  mounted(){
    this.setHeight();
  }
}
</script>

<style lang="scss">
.console{              
      .item{
          cursor: pointer;                  
          font-size: 14px;
          margin:0 10px 20px;
          border-radius: 2px;
          box-sizing: border-box;
          height: 100%;   
          display: flex;
          justify-content: left; 
          align-items: center;                
          padding: 24px 32px;          
          color: white;
          .picture{
            width:40px;
            height:40px;
            border-radius:50%;
            margin-right:20px;
          }          
          .title {
              margin: 0;
          }
          .number{
              font-size: 30px;
              cursor: pointer;
              font-weight: bolder;
             
          }
      }
      @media screen and (max-width: 767px) {
        .item{
          display: flex;
          justify-content: left;  
          .picture{
            width:70px;
            height:70px;
            border-radius:50%;
            margin-right:20px;
          }  
        }
      }
      @media screen and (min-width: 768px) and (max-width: 991px){
         .item{
          display: flex;
          justify-content: left;  
        }
      }
          
}
      
      

</style>
