<template>
<body>
  <div class="container" id="buttoncontainer">
    <center><div class="item">
        <button>챌린지 생성하기</button>
    </div></center>
    <center><div>
        <button>챌린지 검색</button>
    </div></center>
  </div>

  <div class="container" id="challengelist">
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

<footer>
</footer>


</template>

<script>


export default {
  name: 'App',
  data(){
    return {
      ongoingchallenelist : ['운동챌린지','공부챌린지','노는챌린지','이런챌린지','저런챌린지','아니 왜 안되냐고']
    }
  },
  methods: {

    },
  
  components: {
  
  },
}
</script>

<style>

#buttoncontainer {
  display:flex;
  justify-content: center;
  margin-left:200px;
  margin-right:200px;
}

.item {
  display: flex;
}

button{
  margin: 30px;
  width: 400px;
  height: 50px;
}

#challengelist{
  border:5px;
  border-color:black;
  border-style:solid;
  
}

#challengename{
 width:15%;
 border:2px;
  border-color:black;
  border-style:solid;
  margin-left:15px;
  margin-top:10px;
  justify-content: center;
}

#challengelist1{
  margin-left:15px;
  margin-right:15px;
  margin-top:10px;
  margin-bottom:10px;
}
.list{
  margin:0 auto;
  height:150px;
  width:90%;
  border-color:black;
}
nav{
  display: flex;
  align-items: center;
}
.logo{
  margin: auto;
}
.mypage{
  margin-right: 0px;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}

</style>