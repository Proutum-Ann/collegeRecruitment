
document.addEventListener('DOMContentLoaded', () => {
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

    const proGal = document.getElementById('featuredPrograms')
    const clubGal = document.getElementById('featuredClubs')
    const facGal = document.getElementById('facultyGal')

    // Rendering programs

    const render1 = clubList => {
        proGal.innerHTML = ''

        clubList.forEach(featuredProgram => {
            const featPro = document.createElement('div')

            featPro.className = 'col mb-2'
            featPro.innerHTML = `
            <center>
                <h5 class="card-title">${featuredProgram.name}</h5>
                <small>${featuredProgram.majmin}</small>
                <p>${featuredProgram.desc}</p>
            </center>
            `
        
            proGal.appendChild(featPro)
        })
    }

    render1(programs)

    // Rendering clubs

    const render2 = clubList => {
        clubGal.innerHTML = ''

        clubList.forEach(featuredClub => {
            const featClubs = document.createElement('div')

            featClubs.className = 'col mb-2'
            featClubs.innerHTML = `
            <center>
                <div class="card club-card" style="width: 18rem;">
                    <a href="${featuredClub.link}" target="_blank">
                        <img src="${featuredClub.logo}" class="card-img-top" alt="${featuredClub.name} Logo">
                    </a>
                    <div class="card-body" style="overflow-y: auto; height: 200px">
                        <h5 class="card-title">${featuredClub.name}</h5>
                        <p>${featuredClub.name} is a ${featuredClub.type} group ${featuredClub.desc}</p>
                    </div>
                </div>
            </center>
            `
        
            clubGal.appendChild(featClubs)
        })
    }

    render2(clubs)

    //Rendering Faculty

    const render3 = facList => {
        facGal.innerHTML = ''

        facList.forEach(featuredFac => {
            const featFac = document.createElement('div')

            featFac.className = 'col mb-2'
            featFac.innerHTML = `
            <center>
                <div class="card faculty-card" style="width: 18rem;">
                    <img src="${featuredFac.image}" class="card-img-top">
                    <div class="card-body">
                        <h5 class="card-title">${featuredFac.name}</h5>
                        <p><small>${featuredFac.position}</small><br>
                        ${featuredFac.subject}<br>
                        <small><a href="${featuredFac.email}" target="_blank">${featuredFac.email}</a></small></p>
                    </div>
                </div>
            </center>
            `
        
            facGal.appendChild(featFac)
        })
    }

    render3(staff)
})