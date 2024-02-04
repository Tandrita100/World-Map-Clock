async function getUser(place) {
    const api_url = `https://timezone.abstractapi.com/v1/current_time/?api_key=YOUR-API-KEY&location=${place}`
    
    const response = await fetch(api_url);
    
    const data = await response.json();
    
    time = await data.datetime
    document.getElementById("time").innerText = `${place}'s time = ${time} ${data.timezone_abbreviation}`

}

document.querySelectorAll(".allPaths").forEach(e => {
e.setAttribute('class', `allPaths ${e.id}`);
e.addEventListener("mouseover", function () {
    window.onmousemove=function (j) {
        x = j.clientX
        y = j.clientY
        document.getElementById('name').style.top = y-60  + 'px'
        document.getElementById('name').style.left = x +10 + 'px'
    }
    const classes=e.className.baseVal.replace(/ /g, '.')         
    document.querySelectorAll(`.${classes}`).forEach(country =>{
        country.style.fill = "yellow"
    })
    document.getElementById("name").style.opacity = 1
    
    document.getElementById("namep").innerText = e.id
})
e.addEventListener("mouseleave", function () {
    const classes=e.className.baseVal.replace(/ /g, '.')
    document.querySelectorAll(`.${classes}`).forEach(country =>{
        country.style.fill = "red"
    })
    document.getElementById("name").style.opacity = 0
})

e.addEventListener("click",function(){
    getUser(e.id)
})

})


//-------------------------------------------------------------------------------------------------------------

async function getUser(place) {
    const api_url = `https://timezone.abstractapi.com/v1/current_time/?api_key=YOUR-API-KEY&location=${place}`
    
    const response = await fetch(api_url);
    
    const data = await response.json();
    
    const time = await data.datetime;
    const timezoneAbbreviation = await data.timezone_abbreviation;
    
    document.getElementById("time").innerText = `${place}'s time = ${time} ${timezoneAbbreviation}`;
    document.getElementById("navbar-time").innerText = `${place}'s time = ${time} ${timezoneAbbreviation}`;
}

// Function to get the current time in India
async function getDefaultTime() {
    await getUser("Asia/Delhi"); // Set default time to India 
}

// Display default time on page load
getDefaultTime();

document.querySelectorAll(".allPaths").forEach(e => {

    e.addEventListener("click", function(){
        getUser(e.id);
        updateNavbarTime(e.id);
    });
});

// Function to update the time in the navbar
function updateNavbarTime(place) {
    getUser(place);
}