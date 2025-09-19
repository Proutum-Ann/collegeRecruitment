const quotes = [
    `Sol Iustitiae et Occidentem Illustra`,
    `Curiosity. Knowledge. Purpose.`,
    `Sun of righteousness, shine upon the West also`
]

var randomNumber = Math.floor(Math.random() * quotes.length);
document.getElementById('college-quote').textContent = '“' + quotes[randomNumber] + '”'
console.log(quotes[randomNumber])

const videos = [
    `https://www.youtube.com/embed/PI7NHVnnrqQ?si=es7dCdR4ZXjjLIaR`,
    `https://www.youtube.com/embed/AzLEiDCTuYQ?si=5qx1Iw67dDX0XSJn`,
    `https://www.youtube.com/embed/MMxgHNLQnko?si=4a9yVWOMliUYzx_O`,
    `https://www.youtube.com/embed/wFNaTFsHHV8?si=3mvEuaYg8NUdxh7r`,
    `https://www.youtube.com/embed/zFmB7vWY9oY?si=gXbbvplyMCo4DApM`,
    `https://www.youtube.com/embed/o-gfhu2uJ_I?si=vUFC-ZIGyxxDxb1A`,
    `https://www.youtube.com/embed/_0u51uoQ8Xc?si=Xkn_gYIoZOuKQs6t`
]

var randomVid = Math.floor(Math.random() * videos.length);
document.getElementById('videoplayer').src = videos[randomVid]
console.log(videos[randomVid])

document.addEventListener('DOMContentLoaded', () => {
    const courseGal = document.getElementById('featuredCourses')
    const clubGal = document.getElementById('featuredClubs')


    // Rendering clubs

    const render = clubList => {
        clubGal.innerHTML = ''

        clubList.forEach(featuredClub => {
            const featClubs = document.createElement('div')

            featClubs.className = 'col mb-2'
            featClubs.innerHTML = `
            <center>
                <div class="card" style="width: 18rem;">
                    <img src="${featuredClub.logo}" class="card-img-top" alt="${featuredClub.name} Logo">
                    <div class="card-body">
                        <h5 class="card-title">${featuredClub.name}</h5>
                        <p style="overflow-y: auto; height: ${featuredClub.height}">${featuredClub.name} is a ${featuredClub.type} group ${featuredClub.desc}</p>
                    </div>
                </div>
            </center>
            `
        
            clubGal.appendChild(featClubs)
        })
    }

    render(clubs)
})