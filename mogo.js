const blockPar = document.querySelector(".parent__blocks");
const block1 = document.querySelector(".photography");
const block2 = document.querySelector(".crteative");
const block3 = document.querySelector(".web-design");

block1.addEventListener("click", function() {
    block1.style.height = "160px";
    block1.innerHTML = "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit dicta, eligendi mollitia corrupti vitae numquam reprehenderit aperiam? Amet necessitatibus incidunt cupiditate alias natus, molestiae perferendis iusto esse laborum aperiam adipisci?";
    block1.style.fontSize = "25px";
    block1.style.paddingLeft = "10px"
});
block1.addEventListener("dblclick", function() {
    block1.style.height = "65px";
    block1.innerHTML = "PHOTOGRAPHY";
});

block2.addEventListener("click", function() {
    block2.style.height = "160px";
    block2.innerHTML = "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit dicta, eligendi mollitia corrupti vitae numquam reprehenderit aperiam? Amet necessitatibus incidunt cupiditate alias natus, molestiae perferendis iusto esse laborum aperiam adipisci?";
    block2.style.fontSize = "25px";
    block2.style.paddingLeft = "10px";
});

block2.addEventListener("dblclick", function() {
    block2.style.height = "65px";
    block2.innerHTML = "CREATIVE";  
});

block3.addEventListener("click", function() {
    block3.style.height = "160px";
    block3.innerHTML = "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit dicta, eligendi mollitia corrupti vitae numquam reprehenderit aperiam? Amet necessitatibus incidunt cupiditate alias natus, molestiae perferendis iusto esse laborum aperiam adipisci?";
    block3.style.fontSize = "25px";
    block3.style.paddingLeft = "10px"
});
block3.addEventListener("dblclick", function() {
    block3.style.height = "65px";
    block3.innerHTML = "WEB DESIGN";
});
