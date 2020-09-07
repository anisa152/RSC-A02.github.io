let image = [
    {
        url:"./foto/headphone.png",
        size:"big",
        name:"headphone"
    },
    {
        url:"./foto/laptop.png",
        size:"small",
        name:"laptop"
    },
    {
        url:"./foto/komputer.png",
        size:"medium",
        name:"komputer"
    }
    ]

let totalItem = image.length;

let i = 0;

function next()
{
    if(i+1<totalItem)
    {
        i++;
        document.querySelector(".jumbotron-img div img").src=image[i].url;
        document.querySelector(".page-indicator").style.color="white"
        document.querySelector(`.page-indicator span:nth-child(${i})`).style.color="#00adb5";
        
    }
}

function previous()
{
    if(i-1>-1)
    {
        i-=1;
        document.querySelector(".jumbotron-img div img").src=image[i].url;
        document.querySelector(`.page-indicator span:nth-child(${i})`).style.color="#00adb5";
    }
}
