const quotes = [
    `Sol Iustitiae et Occidentem Illustra`,
    `Curiosity. Knowledge. Purpose.`,
    `Sun of righteousness, shine upon the West also`
]

var randomNumber = Math.floor(Math.random() * quotes.length);
	document.getElementById('college-quote').textContent = '“' + quotes[randomNumber].split(' — ')[0] + '”'
	console.log(quotes[randomNumber])

document.addEventListener('DOMContentLoaded', () => {
    const courseGal = document.getElementById('featuredCourses')
    const clubGal = document.getElementById('featuredClubs')


    // Rendering the courses and clubs

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