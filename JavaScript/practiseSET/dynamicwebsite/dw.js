function createCard(title, cName, views, monthsOld, duration, thumbnail){
  let html=` <div class="imageC">
        <img src=${thumbnail}
            class="image" alt="thumbnail">
            <div class="duration">
            <p>${duration}</p>
        </div>
            </div>
            <div class="textW">
                <div class="headingC">
        <h1 class="heading">${title}</h1>
        </div>
        <div class="small">
            <span class="channelN info">${cName}</span>
            <span>&#9679;</span>
            <span class="views info">${views}</span>
            <span>&#9679;</span>
            <span class="time info">${monthsOld}</span>
        </div>
        </div>
        
    </div>`
     document.querySelector(".container").innerHTML=html; //we can also use .getElementByClassName but it returns an html collection

}
let title1=prompt("enter Title of the video");
let cName1=prompt("enter channel name");
let views1=prompt("enter views");
let monthsOld1=prompt("enter how the video is");
let duration1=prompt("enter the duration of the video");
let thumbnail1=prompt("enter the thumbnail link of the video");
createCard(title1,cName1,views1,monthsOld1,duration1,thumbnail1)
// createCard("Introduction to Backend | Sigma Web Dev video #2", "CodeWithHarry", 560000, 7, "31:22", "https://i.ytimg.com/vi/tVzUXW6siu0/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLACwWOixJVrKLFindK92kYMgTcQbw")
