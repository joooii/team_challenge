<template>
    <div  id="challengelist">
    <div class="item" id="challengename">
      진행중인 챌린지
    </div>
    <div class="item" id="challengelist1">
      <h5>아마 데이터를 넣으면 이런식으로 나올것임 제발....</h5>
      <h5 v-for="(챌린지기간별일정 ,i) in 챌린지기간별일정" :key="i" >{{챌린지기간별일정[i]}}</h5>
    </div>
    </div>
</template>

<style scoped>
button{
    width:auto;
    height: auto;
    background-color:tomato;
  border:none;
  color:white;
  border-radius:10px;
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
}
</style>
