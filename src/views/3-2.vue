<template>
<div class='container'>
    <h1>챌린지 검색</h1>
    <div class="search_challenge">
        <!-- <SearchBar hint="Search hint" :text="searchPhrase" @textChange="onTextChanged" @submit="onSubmit" /> -->
        <input type="text" class="search_bar" placeholder=" 검색어 입력">
        <button class="search_btn">검색</button>
    </div>
    <br>
    <br>
    <div class="search_challenge_list">
        <div class="list_title"><b>검색된 챌린지 목록</b></div>
        <ul>
            <li v-for="(challengeList, i) in challengeList" :key="i">{{ challengeList }}</li>
            <!-- <li>토익</li>
            <li>3대 500</li>
            <li>매일 6시 기상</li> -->
        </ul>
    </div>
    <!-- <span class="3-0"><router-link to="/3-0">3-0</router-link></span> -->
    </div>
</template>

<script>
/* eslint-disable */
export default {
    name: "searchList",
    setup() {
        const challengeList = ["부트캠프", "토익", "3대500", "매일 6시 기상"];
        return {challengeList};
    }
}
</script>

<style scoped>
.search_bar {
    width: 40%;
    height: 38px;
    border: 1px solid rgb(0,42,134);
    outline: none;
    margin-top: 20px;
}

.search_btn {
    width: 4%;
    height: 43px;
    border: none;
    background-color: rgb(14, 60, 160);
    color: white;
}

.search_challenge_list li {
    border-bottom: 1px solid #eaeaea;
    margin-right: 32px;
    padding: 10px 0;
    list-style: none;
}

.search_challenge_list {
border: 1px solid rgb(0,42,134);
width: 50%;
margin: auto;
text-align: left;
}

.list_title {
    border-bottom: 1px solid rgb(0,42,134);
    text-align: center;
    padding: 5px;
}
</style>
