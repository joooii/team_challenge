<template>
  <nav>
    <span class="logo"><router-link to="/3-0">LOGO</router-link></span>&nbsp;
    <span class="MyPage"><router-link to="/MyPage">마이페이지</router-link></span>&nbsp;
    <span class="3-0"><router-link to="/3-0">3-0</router-link></span>&nbsp;
    <span class="4-0"><router-link to="/4-0">4-0</router-link></span>&nbsp;
    <span class="5-0"><router-link to="/5-0">5-0</router-link></span>&nbsp;
    <span class="6-0"><router-link to="/6-0">6-0</router-link></span>&nbsp;
    <span class="login"><router-link to="/login">Login</router-link></span>&nbsp;
    <span class="SignUp"><router-link to="/SignUp">SignUp</router-link></span>&nbsp;
    <span class="WriteReview"><router-link to="/WriteReview">WriteReview</router-link></span>&nbsp;
    <span class="MyReview"><router-link to="/MyReview">MyReview</router-link></span>&nbsp;
    <span class="3-2"><router-link to="/3-2">3-2</router-link></span>&nbsp;
    <span class="3-1"><router-link to="/3-1">3-1</router-link></span>&nbsp;
  </nav>
  <router-view/>
  <span class="back"><button id="back">이전</button></span>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      ongoingchallenelist: ['운동챌린지', '공부챌린지', '노는챌린지', '이런챌린지', '저런챌린지', '아니 왜 안되냐고']
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
/* body {
  margin:0px;
} */
nav{
  display: flex;
  align-items: center;
  border-bottom: 1px solid gainsboro;
  /* background-color: #b6b7b9dc; */
  margin: 0;
  padding: 16px;
}
nav a {
  font-weight: bold;
  color: #2c3e50;
  /* text-decoration: none; */
}
.logo{
  margin: auto;
}
.mypage{
  margin-right: 0px;
}
/* .container{
  padding: 5%;
  flex-direction: column;
  padding-right: 20%;
  padding-left: 20%;
} */
.account_section{
  float: left;
}
.remind_section{
  float: right;
}
/* .challenging_section{
  float: left;
} */
/* .finish_section{
  float: right;
} */
/* .top{
  height: 300px;
}
.bottom{
  height: 300px;
} */
/* nav {
  padding: 30px;
} */
nav a.router-link-exact-active {
  color: #42b983;
}
/* .search_challenge{
  border: 1px solid;
} */
#buttoncontainer {
  display:flex;
  justify-content: center;
  margin-left:200px;
  margin-right:200px;
}
.item {
  display: flex;
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
/* 얘 전역변수? 암튼 그거 */
.list{
  margin:0 auto;
  height:150px;
  width:90%;
  border-color:black;
}
/* nav{
  display: flex;
  align-items: center;
} */
.logo{
  margin: auto;
}
/* .mypage{
  margin-right: 0px;
} */
/* nav {
  padding: 30px;
} */
/* nav a {
  font-weight: bold;
  color: #2c3e50;
} */
/* nav a.router-link-exact-active {
  color: #42b983;
} */

/* 이전버튼 */
.back {
  position: absolute;
  bottom: 5%;
  left: 5%;
}
#back {
  height: 50px;
  width: 100px;
  border: none;
  background-color: rgb(0,42,134);
  color: white;
  border-radius: 10px;
}
</style>
