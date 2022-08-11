<template>
    <header>
        <h1>회원가입</h1>
        <p class="join_info" style="text-align:center;">빈칸을 채운 후, 가입하기 버튼을 클릭해 주세요.</p>
    </header>

<body>
    <div class="login_form">
        <form @submit.prevent="submitForm">
            <div id="idform">
                <label for="id">아이디</label>
                <input type="text" class="text_field" v-model="id" placeholder="아이디" @blur="checkDuplicate" />
                <div class="idconfirm">
                    <button class="idconfirm_chk">아이디 중복 확인</button>
                    <div class="idconfirm_txt" v-if="!availableId">이미 사용중인 아이디입니다.</div>
                </div>
                <!-- 중복확인은 if문 써서 true,false로 하면 될거같은디? -->
            </div>
            <div id="pwform">
                <label for="password">비밀번호</label>
                <input type="password" class="text_field" v-model="password" placeholder="비밀번호"/>
            </div>
            <div id="nameform">
                <label for="name">이름</label>
                <input type="text" class="text_field" v-model="name" placeholder="이름"/>
            </div>
            <div>
                <!-- <router-link to="/"> -->
                    <button type="submit" class="submit_btn">가입하기</button>
                <!-- </router-link> -->
                <!-- 가입하기 누르면 메인 이동 -->
            </div>
        </form>
    </div>
</body>
</template>

<script>
// import { response } from 'express';

export default {
  name: 'JoinForm',
  data () {
    return {
      id: '',
      idConfirm: '',
      password: '',
      name: ''
    }
  },
  methods: {
    submitForm () {
      console.log('dd')
    }
    // async checkDuplicate () {
    //     this.availableId = true;
    //     const reponse = await this.checkDuplicateId(this.id)
    //     if (!response.data) {
    //         this.availableId = false;
    //     }   else {
    //         this.availableId = true;
    //     }
    //     }
    // }
  }
}
</script>

<style scoped>
.join_info {
    font-size: 13px;
}
label {
    float:left;
}
.login_form {
    width: 300px;
    margin-right: auto;
    margin-left: auto;
    border: none;
}

.idconfirm {
    display: flex;
    /* flex-direction: column; */
}

.idconfirm_chk {
    border:none;
    margin-bottom:10px;
    margin-right: 7px;
    height: auto;
    flex-direction: row;
}

.idconfirm_txt {
    font-size:14px;
    flex-direction: row;
}

.text_field {
    font-size: 14px;
    padding: 10px;
    border: 1px solid gainsboro;
    width: 300px;
    margin-top: 5px;
    /* flex-direction: row; */
}

.submit_btn {
    font-size: 14px;
    border: none;
    padding: 10px;
    width: 320px;
    background-color: tomato;
    margin-top: 10px;
    /* margin-left: 100px; */
    color: white;
}
</style>
