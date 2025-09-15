const quotes = [
    `Sol Iustitiae et Occidentem Illustra`
]

document.addEventListener('DOMContentLoaded', () => {
    const courseGal = document.getElementById('featuredCourses')
    const clubGal = document.getElementById('featuredClubs')

    const render1 = courseList => {
        courses.innerHTML = ''

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
        clubs.innerHTML = ''

        clubList.forEach(club => {
            const featClubs = document.createElement('div')

            featClubs.className = 'carousel-inner'
            featClubs.innerHTML = `
            <center>
                <div class="carousel-item">
                    <div class="card" style="width: 18rem;">
                        <!-- <img src="${club.logo}" class="card-img-top" alt="${club.name} Logo"> -->
                        <div class="card-body">
                            <h5 class="card-title">${club.name}</h5>
                            <small>${club.type}</small>
                            <p class="card-text">${club.name} is a ${club.subject} group ${club.desc}</p>
                        </div>
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