const quotes = [
    `Sol Iustitiae et Occidentem Illustra`
]

document.addEventListener('DOMContentLoaded', () => {
    const courseGal = document.getElementById('featuredCourses')
    const clubGal = document.getElementById('featuredClubs')


    // Rendering the courses and clubs
    const render1 = courseList => {
        courseGal.innerHTML = ''

        courseList.forEach(course => {
            const featCourses = document.createElement('div')

            featCourses.className = 'col-6 col-md-3'
            featCourses.innerHTML = `
            <h3>${course.name}</h3>
            `
            
            courseGal.appendChild(featCourses)
        })
    }

    const render2 = clubList => {
        clubGal.innerHTML = ''

        function getRandomClub (randomClub) {
            if (randomClub.length < 6) {
                var randomClub = Math.floor(Math.random() * clubs.length);
                clubFeatures.push(clubs[randomClub])
            } else {
                return
            }
        }

        clubList.forEach(featuredClub => {
            const featClubs = document.createElement('div')

            featClubs.className = 'col mb-2'
            featClubs.innerHTML = `
            <center>
                <div class="card" style="width: 18rem;">
                    <img src="${featuredClub.logo}" class="card-img-top" alt="${featuredClub.name} Logo">
                    <div class="card-body">
                        <h5 class="card-title">${featuredClub.name}</h5>
                        <small>${featuredClub.type}</small>
                        <p class="card-text">${featuredClub.name} is a ${featuredClub.subject} group ${featuredClub.desc}</p>
                    </div>
                </div>
            </center>
            `
        
            clubGal.appendChild(featClubs)
        })
    }

    render2(clubs)
    render1(courses)
})