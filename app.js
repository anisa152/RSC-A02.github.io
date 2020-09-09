let image = [
    {
        url:"./foto/headphone.png",
        name:"headphone"
    },
    {
        url:"./foto/laptop.png",
        name:"laptop"
    },
    {
        url:"./foto/komputer.png",
        name:"komputer"
    },
    {
        url:"./foto/hp.png",
        name:"hp"
    },
    {
        url:"./foto/printer.png",
        name:"printer"
    }
]
let totalItem = image.length;

setInterval(() => {
    i++;
    if(i>=6){i=1};
    document.querySelector(".jumbotron-img div img").src=image[i-1].url;
}, 5000)

let i = 1;

function next()
{
    if(i<totalItem)
    {
        i++;
        document.querySelector(".jumbotron-img div img").src=image[i-1].url;
    }
    else
    {
        i=1;
    }
}

function previous()
{
    if(i>-1)
    {
        i-=1;
        document.querySelector(".jumbotron-img div img").src=image[i-1].url;
    }
    else
    {
        i=6;
    }
}
