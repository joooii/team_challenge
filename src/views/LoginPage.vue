<template>
    <header>
        <h1>로그인</h1>
        <p class="login_info" style="text-align:center;">아이디 비밀번호를 입력하신 후, 로그인 버튼을 클릭해 주세요.</p>
    </header>

    <body>
        <div class="login_form">
            <form style="text-align:center;">
                <input type="text" v-model="userId" name="id" class="text_field" placeholder="아이디"><br>
                <input type="password" v-model="userPassword" name="password" class="text_field" placeholder="비밀번호"><br>
                <div>
                  <router-link to="/3-0">
                    <button type="submit" @click="loginSubmit" class="submit_btn">로그인</button>
                  </router-link>
                  <!-- 로그인 누르면 메인으로 이동 -->
                </div>
            </form>
            <div>
              <router-link to="/JoinPage">
                <button class="login_join" onclick="location.href='#'">회원가입</button>
              </router-link>
              <!-- 회원가입 누르면 회원가입창 이동 -->
            </div>
        </div>
    </body>
</template>

<script>
/* eslint-disable */
// import { loginUser } from '백엔드위치'

export default {
  data () {
    return {
      userId: '',
      userPassword: ''
    }
  },
  methods: {
    loginSubmit () {
      if (this.userId === '') {
        alert('ID를 입력하세요.')
        return
      }
      if (this.userPassword === '') {
        alert('비밀번호를 입력하세요.')
        return
      }
      alert('로그인 되었습니다.');
      console.log('로그인 성공')
      } // 로그인 팝업창
    // }


      // const saveData = {}
      // saveData.userId = this.userId
      // saveData.userPassword = this.userPassword
    //   try {
    //     this.$axios
    //       .post(HOST + "/signin", JSON.stringify(saveData), {
    //         headers: {
    //           "Content-Type": `application/json`,
    //         },
    //       })
    //       .then((res) => {
    //         if (res.status === 200) {
    //           // 로그인 성공시 처리해줘야할 부분
    //         }
    //       });
    //   } catch (error) {
    //     console.error(error);
    //   }
      // 위에는 db 어떻게 할 지 알아보고 해야 할 듯
  }
}
</script>
<style scope>
.login_info {
    font-size: 13px;
}

.login_form {
    width: 300px;
    margin-right: auto;
    margin-left: auto;
    padding: 20px;
    border: none;
}

.text_field {
    font-size: 14px;
    padding: 10px;
    border: 1px solid gainsboro;
    width: 300px;
    margin-bottom: 10px;
}

.submit_btn {
    font-size: 14px;
    border: none;
    padding: 10px;
    width: 320px;
    background-color: tomato;
    margin-bottom: 10px;
    /* margin-left: 100px; */
    color: white;
    /* border-radius: 10px; */
}

.login_join{
    font-size: 14px;
    border: none;
    padding: 10px;
    width: 320px;
    background-color: tomato;
    /* margin-left: 10px; */
    color: white;
}
</style>
