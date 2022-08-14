<template>
<body>
    <div class="make_chal">
        <h1>챌린지 등록</h1>
        <form class="chal_form">
            <p>챌린지명 <input type="text" name="name" class="text_field"></p>
            <p>챌린지 총 기간 <input type="text" name="period" class="text_field"></p>
            <p>기간별 할 일 <input type="text" name="todolist" class="text_field"></p>
            <div class="todo_list">
                <ul>
                    <li>부트캠프</li>
                    <li>토익</li>
                    <li>3대 500</li>
                    <li>매일 6시 기상</li>
                </ul>
            </div>
        </form>
    </div>
</body>
<footer>
    <div class="footer_right">
        <button class="makebtn"><p>챌린지 생성 완료</p></button>
    </div>
</footer>
</template>

<style scoped>
.make_chal {
    margin-right: auto;
    margin-left: 10px;
    padding: 20px;
    border: none;
}
.todolist{
    margin: auto;
    padding-right: 30%;
}
.text_field {
    font-size: 14px;
    padding: 10px;
    border: 1px solid gainsboro;
    width: 400px;
    margin-bottom: 10px;
}
footer {
    height: 80px;
    bottom: 0px;
    position:absolute;
    right:5%;
}
.footer_right {
    border: none;
    float: right;
}
.makebtn {
    border: none;
    background-color: rgb(0,42,134);
    width: 200px;
    font-size: 14px;
    color: white;
    border-radius: 10px;
}

#search_bar {
width: 80%;
border: white solid 0px;
}
.todo_list {
    border-radius: 5%;
}
.todo_list {
border: black solid 1px;
width: 30%;
margin: auto;
text-align: left;
}
</style>
