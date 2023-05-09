const colorGenerator = () => {
    const randomNo = Math.floor(Math.random()*16777215);
    const randomColor = "#"+randomNo.toString(16);
    document.body.style.backgroundColor = randomColor;
    document.getElementById("color-code").innerText = randomColor;
} 

document.getElementById("btnClick").addEventListener(
    "click",
    colorGenerator
);


colorGenerator();
