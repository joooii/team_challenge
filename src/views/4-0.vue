<template>
  <div class="black-bg" v-if="modal == true">
    <div class="white-bg">
    <h4>정말로 참여하시겠습니까?</h4>
    <button class="smallbutton">예</button>
    <button class="smallbutton" @click="modal=false">아니오</button>
    </div>

  </div>
    <div  id="challengelist">
    <div class="item" id="challengename">
      {{챌랜지명}}챌랜지명
    </div>
    <div class="item" id="challengelist1">
      <h5>아마 데이터를 넣으면 이런식으로 나올것임 제발....</h5>
     </div>
      <div v-for="(챌린지기간별일정 ,i) in 챌린지기간별일정" :key="i">
        <h5>{{챌린지기간별일정}}</h5>
      </div>
    </div>

    <div>
      <button class="joinbutton" @click="modal = true">참여하기</button>
    </div>

</template>
<script>
/* eslint-disable */
export default {
  name: "4-0",
    setup() {
    const 챌린지기간별일정 = ["1주차:이것 저것", "여러개있는데 왜안됨"];
    
    return {챌린지기간별일정};
    const 챌린지명 = ["운동하기","공부하기","하기싫어","ㅋㅋ안함"];

    return (챌린지명);
   },
   data(){
    return {
     modal : false,
    }
  },
  methods: {
    plusNumbers(){
      this.result = parseInt(this.num1) + parseInt(this.num2);
    },
    ifjoinclicked(){
        modal = true
    }
  }
}
</script>
<style scoped>
.black-bg{
  display:flex;
  justify-content: center;
  width: 100%;
  height: 100%;
  background: rgba(0,0,0,0.5);
  position:fixed;
  padding:20px
}
.white-bg{
  justify-content: center;
  width: 200px;
  height: 10px;
  background: whitesmoke;
  border-radius:8px;
  padding: 200px;
}
#joinbutton{
    display: flex;
    justify-content:right;
    margin-left:250px;
    margin-right:250px;
}
.joinbutton{
  background-color:tomato;
  border:none;
  color:white;
  border-radius:10px;
  margin: 30px;
  width: 400px;
  height: 50px;
}
h5{
    border-bottom: 1px;
    border-style: none;
    border-bottom-style:solid;
    border-color:black;
}
#challengename{
  border:none;
  border-radius:10px;
  background-color:tomato;
  color:white;
}
#challengelist{
  border-color:tomato;
  border-radius:10px;
  margin-left:250px;
  margin-right:250px;
  border: 2px solid tomato;
}
.smallbutton{
  width:80px;
  height: 30px;
  background-color:tomato;
  border:none;
  color:white;
  border-radius:10px;
  margin-right:10px;
}
</style>
