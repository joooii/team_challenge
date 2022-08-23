<template>
<body>
  <div  id="buttoncontainer">
    <center><div class="item">
        <button class="create_btn" @mouseover="hover = true" @mouseleave="hover = false"
        :class="{'create_btn-hover': hover}"><router-link to="/3-1"><a>챌린지 생성하기</a></router-link></button>
    </div></center>
    <center><div>
        <button class="search_btn" @mouseover="hover2 = true" @mouseleave="hover2 = false"
        :class="{'search_btn-hover2': hover2}"><router-link to="/3-2"><a>챌린지 검색</a></router-link></button>
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
   data () {
    return {
      hover: false,
      hover2: false
    }
   }
};

</script>

<style scoped>
a{
    text-decoration: none;
    color:white;
}
.create_btn{
  background-color:rgb(0,42,134);;
  border:none;
  color:white;
  border-radius:10px;
  margin: 30px;
  width: 400px;
  height: 50px;
  cursor: pointer;
}
.search_btn{
  background-color:rgb(0,42,134);;
  border:none;
  color:white;
  border-radius:10px;
  margin: 30px;
  width: 400px;
  height: 50px;
  cursor: pointer;
}
button{
  background-color:rgb(0,42,134);;
  border:none;
  color:white;
  border-radius:10px;
}
#challengename{
  border:none;
  border-radius:10px;
  background-color:rgb(0,42,134);;
  color:white;
}
#challengelist{
  border:2px solid rgb(0,42,134);;
  border-color:rgb(0,42,134);;
  border-radius:10px;
  margin-left:250px;
  margin-right:250px;
}
.create_btn-hover {
  background-color: rgb(12, 59, 161);
}
.search_btn-hover2 {
  background-color: rgb(12, 59, 161);
}
</style>