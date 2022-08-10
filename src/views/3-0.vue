<template>
<body>
  <div  id="buttoncontainer">
    <center><div class="item">
        <button>챌린지 생성하기</button>
    </div></center>
    <center><div>
        <button>챌린지 검색</button>
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
  name: "3-0",
  data() {
    return {
    
    };
  },
  methods: {
    hoverevent(){
       this.style.b
    }
  }
}
</script>
<style scoped>
button{
  background-color:tomato;
  border:none;
  color:white;
  border-radius:10px;
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
