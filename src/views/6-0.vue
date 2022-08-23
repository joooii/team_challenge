<template>
    <div id="challengelist">
    <div style="float:left" class="item">
    <h4 class="item1" id="challengename1" style="margin-left:15px">
      {{챌랜지명}}운동하기
    </h4>
    </div>
    <div style="float:right;">
    <button>회고록 추가하기</button>
    </div>
    <br>
    <br>
    <br>
    <br>
    <div class="item" id="challengelist1">
      <div v-for="(회고록제목 ,i) in 회고록제목" :key="i">
        <h5>{{회고록작성자}} : {{회고록제목}}</h5>
      </div>
    </div>
    </div>
</template>
<script>
/* eslint-disable */
export default {
  name: "4-0",
    setup() {
    const 회고록제목 = ["아 오늘그냥 게임해버렸다", "폴가이즈 ㄱㄱ?"];
    
    return {회고록제목};
    const 챌린지명 = ["운동하기","공부하기","하기싫어","ㅋㅋ안함"];
    return (챌린지명);
    const 회고록작성자 = ["박종우"]
    return (회고록작성자);
   },
  methods: {
  }
}
</script>
<style scoped>
h5{
    border-bottom: 1px;
    border-style: none;
    border-bottom-style:solid;
    border-color:black;
}
button{
    display:flex;
    justify-self:right;
    width:auto;
    height: auto;
    background-color:rgb(0,42,134);;
    border:none;
    color:white;
    border-radius:3px;
    margin-top:5px;
    margin-right:3px;
}
#addbutton{
    display: flex;
    justify-self: right;
}
.item1{
  border:none;
  border-radius:1px;
  background-color:rgb(0,42,134);;
  color:white;
}
#challengelist{
  border-color:rgb(0,42,134);;
  border-radius:10px;
  margin-left:250px;
  margin-right:250px;
  border: 2px solid rgb(0,42,134);;
}
h4{
  padding: 3px;
}
</style>