<template>
  <nav>
    <span class="logo"><router-link to="/">LOGO</router-link></span>&nbsp;
    <span class="mypage"><router-link to="/about">마이페이지</router-link></span>&nbsp;
    <span class="3-2"><router-link to="/3-2">3-2</router-link></span>&nbsp;
    <span class="3-0"><router-link to="/3-0">3-0</router-link></span>&nbsp;
    <span class="4-0"><router-link to="/4-0">4-0</router-link></span>&nbsp;
    <span class="5-0"><router-link to="/5-0">5-0</router-link></span>&nbsp;
    <span class="6-0"><router-link to="/6-0">6-0</router-link></span>&nbsp;
  </nav>
  <router-view/>
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
.container{
  padding: 5%;
  flex-direction: column;
  padding-right: 20%;
  padding-left: 20%;
}
.account_section{
  float: left;
}
.remind_section{
  float: right;
}
.challenging_section{
  float: left;
}
.finish_section{
  float: right;
}
.top{
  height: 300px;
}
.bottom{
  height: 300px;
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
.search_challenge{
  border: 1px solid;
}
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
