<template>
  <div class="MyPage">
    <h1>마이페이지</h1>
  </div>

  <div class="container">
    <div class="top">
        <div class="top-left">
          <div class="name">
            <div class="name_box">
              <b>NAME</b>
            </div>
          </div>
          <br>

          <div class="id">
            <div class="id_box">
              <b>ID</b>
            </div>
          </div>
        </div>

      <div class="remind_list">
        <img alt="Vue logo" src="../assets/logo.png">
      </div>
    </div>

    <div class="bottom">
      <div class="challenging">
        <div class="ongoing_list">
          <b>진행중인 챌린지</b>
        </div>
        <ul>
          <li v-for="(ongoingChallenge, i) in ongoingChallenge" :key="i">{{ ongoingChallenge }}</li>
        </ul>
      </div>

        <div class="finish_challenge">
          <div class="finish_list">
            <b>완료한 챌린지</b>
          </div>
          <ul>
            <li v-for="(completedChallenge, i) in completedChallenge" :key="i">{{ completedChallenge }}</li>
          </ul>
      </div>
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

b{
  font-size:17px;
  /* color: rgb(0,42,134); */
}

.container{
  padding: 5%;
  flex-direction: column;
  padding-right: 10%;
  padding-left: 10%;
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

.name_box, .id_box {
  position: absolute;
  width: inherit;
  max-width: 80px;
  height: 36px;
  padding-top: 15px;
  border-right: 1px solid rgb(174, 174, 174);
  font-size: 17px;
  /* color: rgb(0,42,134); */
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
