document.addEventListener('DOMContentLoaded', () => {
    const courses = document.getElementById('featuredCourses')
    const clubs = document.getElementById('featuredClubs')

    const render1 = courseList => {
        courses.innerHTML = ''

        courseList.forEach(course => {
            const featCourses = document.createElement('div')

            featCourses.className = 'col-6 col-md-3'
            featCourses.innerHTML = `
            <h3>${course.name}</h3>
            `
        })
    }

    const render2 = clubList => {
        clubs.innerHTML = ''

        clubList.forEach(club => {
            const featClubs = document.createElement('div')

            featClubs.className = 'gallery-cell'
            featClubs.innerHTML = `
            <center>
                <div class="card" style="width: 18rem;">
                    <img src="${club.logo}" class="card-img-top" alt="${club.name} Logo">
                    <div class="card-body">
                        <h5 class="card-title">${club.name}</h5>
                        <small>${club.type}</small>
                        <p class="card-text">${club.name} is a ${club.subject} group ${club.desc}</p>
                    </div>
                </div>
            </center>
            `
        })
    }

    render2(clubs)
    render1(courses)
})