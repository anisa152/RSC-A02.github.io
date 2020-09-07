let image = [
    {
        url:"../foto/headphone.png",
        name:"headphone"
    },
    {
        url:"../foto/laptop.png",
        name:"laptop"
    },
    {
        url:"../foto/komputer.png",
        name:"komputer"
    },
    {
        url:"../foto/hp.png",
        name:"hp"
    },
    {
        url:"../foto/printer.png",
        name:"printer"
    }
]
let totalItem = image.length;

let i = 1;

function animReset()
{
    document.querySelector(".jumbotron-img div img").style.animation="none";
    console.log("reset");
}

function next()
{
    document.querySelector(".jumbotron-img div img").style.animation="none";
    if(i<totalItem)
    {
        i++;

        document.querySelector(".jumbotron-img div img").src=image[i-1].url;
        document.querySelector(".jumbotron-img div img").style.animation="slide 1s";
        document.querySelector(`.page-indicator span:nth-child(${i})`).style.color="#00adb5"; 
    }
    setTimeout(animReset(),2000);
}

function previous()
{
    if(i>-1)
    {
        i-=1;
        document.querySelector(".jumbotron-img div img").src=image[i-1].url;
        document.querySelector(`.page-indicator span:nth-child(${i})`).style.color="white";
    }
}