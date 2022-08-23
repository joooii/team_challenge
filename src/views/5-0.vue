<template>
    <div  id="challengelist">
    <div class="item" id="challengename">
      진행중인 챌린지
    </div>
    <div class="item" id="challengelist1">
      <h5>아마 데이터를 넣으면 이런식으로 나올것임 제발....</h5>
    </div>
    <div v-for="(챌린지기간별일정 ,i) in 챌린지기간별일정" :key="i">
        <h5>{{챌린지기간별일정}}</h5>
      </div>
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
  methods: {
  }
}
</script>
<style scoped>
button{
  background-color:rgb(0,42,134);;
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
</style>