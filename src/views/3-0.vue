<template>
<body>
  <div  id="buttoncontainer">
    <center><div class="item">
        <button><router-link to="/3-1"><a>챌린지 생성하기</a></router-link></button>
    </div></center>
    <center><div>
        <button><router-link to="/3-2"><a>챌린지 검색</a></router-link></button>
    </div></center>
  </div>
  <div  id="challengelist">
    <div class="item" id="challengename">
      진행중인 챌린지
    </div>
    <div class="item" id="challengelist1">
    <select class="list" multiple>
      <option v-for="(챌린지리스트,i) in ongoingchallenelist" :key="i" >{{ongoingchallenelist[i]}}</option>
    </select>
    </div>
  </div>

</body>
</template>
<script>
/* eslint-disable */
export default {
   setup() {
    const ongoingchallenelist = ["운동하기","공부하기","이거하고 놀기","저거하고놀기"];

    return {ongoingchallenelist};
   },
};

</script>
<style scoped>
a{
    text-decoration: none;
    color:white;
}
button{
  background-color:tomato;
  border:none;
  color:white;
  border-radius:10px;
  margin: 30px;
  width: 400px;
  height: 50px;
}
button:hover{
  background-color:tomato;
  border:none;
  color:white;
  border-radius:10px;
}
#challengename{
  border:none;
  border-radius:10px;
  background-color:tomato;
  color:white;
}
#challengelist{
  border:2px solid tomato;
  border-color:tomato;
  border-radius:10px;
  margin-left:250px;
  margin-right:250px;
}
</style>
