<template>
  <div class="MyPage">
    <h1>마이페이지</h1>
  </div>
  <div class="container">
    <div class="top">
      <!-- <span class="account_section"> -->
        <div class="top-left">
          <div class="name">
            <p>이름: 신준성</p>
          </div>
          <br>
          <div class="id">
            <p>아이디: 990114js</p>
          </div>
        </div>
      <!-- </span> -->
    <!-- <span class="remind_section"> -->
      <div class="remind_list">
        <img alt="Vue logo" src="../assets/logo.png">
      </div>
    <!-- </span> -->
    </div>
    <div class="bottom">
      <!-- <span class="challenging_section"> -->
      <div class="challenging">
        <div class="ongoing_list">
          <b>진행중인 챌린지</b>
        </div>
        <ul>
          <li v-for="(ongoingChallenge, i) in ongoingChallenge" :key="i">{{ ongoingChallenge }}</li>
        </ul>
        <!-- 진행중인 챌린지<br>
        부트캠프(22/07/01~22/08/21)<br>
        운동(22/01/01~22/12/31)<br>
        기사 시험(22/09/01~22/12/31) -->
      </div>
      <!-- </span> -->
      <!-- <span class="finish_section"> -->
        <div class="finish_challenge">
          <div class="finish_list">
            <b>완료한 챌린지</b>
          </div>
          <ul>
            <li v-for="(completedChallenge, i) in completedChallenge" :key="i">{{ completedChallenge }}</li>
          </ul>

        <!-- 완료한 챌린지<br>
        1학기 중간고사(22/04/01~22/04/26)<br>
        1학기 기말고사(22/06/01~22/06/24)<br>
        이른 기상(22/01/01~22/06/31) -->
        </div>
      <!-- </span>/ -->
    </div>
  </div>
</template>

<script>
/* eslint-disable */
export default {
    name: "ongoingChallenge",
    setup() {
        const ongoingChallenge = ["부트캠프", "운동", "기사시험"];
        return {ongoingChallenge};

        const completedChallenge = ["아자", "굿", "배고파"];
        return {completedChallenge};
    }
}
</script>

<style scoped>
h1 {
  margin-bottom: 60px;
}

.container{
  /* padding: 5%; */
  flex-direction: column;
  padding-right: 10%;
  padding-left: 10%;
}
.account_section{
  float: left;
  margin-left: 10%;
}
.remind_section{
  float: right;
  margin-right: 10%;
}
.challenging_section{
  float: left;
  margin-left: 10%;
}
.finish_section{
  float: right;
  margin-right: 10%;
}
.top{
  display: flex;
  /* height: 250px; */
  margin-left:10%;
}
.bottom{
  display: flex;
  margin-left:10%;
}
nav a.router-link-exact-active {
  color: #42b983;
}

.top_left {
  display: flex;
}

.name {
  border: 1px solid rgb(174, 174, 174);
  width: 400px;
  height: 50px;
  flex-direction: column;
}

.id {
  border: 1px solid rgb(174, 174, 174);
  width: 400px;
  height: 50px;
  flex-direction: column;
}

.remind_list{
  flex-direction: row;
  margin-left: 200px;
}

.challenging {
  border: 1px solid rgb(174, 174, 174);
  width: 400px;
  /* height: 150px; */
  /* margin-left:10%; */
  flex-direction: column;
}

.challenging li {
  border-bottom: 1px solid #eaeaea;
  margin-right: 32px;
  padding: 10px 0;
  list-style: none;
  text-align: left;
}

.finish_challenge {
  border: 1px solid rgb(174, 174, 174);
  width: 420px;
  height: 150px;
  margin-left: 10%;
  flex-direction: column;
}

.finish_challenge li {
  border-bottom: 1px solid #eaeaea;
  margin-right: 32px;
  padding: 10px 0;
  list-style: none;
  text-align: left;
}

.ongoing_list, .finish_list {
  border-bottom: 1px solid rgb(174, 174, 174);
  text-align: center;
  padding: 5px;
}
  </style>
