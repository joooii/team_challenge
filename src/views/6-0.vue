<template>
    <div id="challengelist">
    <div style="float:left" class="item">
    <h4 class="item1" id="challengename1" style="margin-left:15px">
      {{챌랜지명}}운동하기
    </h4>
    </div>
    <div style="float:right;">
    <button>회고록 추가하기</button>
    </div>
    <br>
    <br>
    <br>
    <br>
    <div class="item" id="challengelist1">
      <h5>회고록 작성자 : 회고록 제목</h5>
      <h5 v-for="(회고록제목 ,i) in 회고록제목" :key="i" >{{회고록작성자}} : {{회고록제목[i]}}</h5>
    </div>
    </div>
</template>

<style scoped>
h5{
    border-bottom: 1px;
    border-style: none;
    border-bottom-style:solid;
    border-color:black;
}
button{
    display:flex;
    justify-self:right;
    width:auto;
    height: auto;
    background-color:tomato;
    border:none;
    color:white;
    border-radius:3px;
}
#addbutton{
    display: flex;
    justify-self: right;
}
.item1{
  border:none;
  border-radius:1px;
  background-color:tomato;
  color:white;
}
#challengelist{
  border-color:tomato;
  border-radius:10px;
  margin-left:250px;
  margin-right:250px;
}
h4{
  padding: 3px;
}
</style>
