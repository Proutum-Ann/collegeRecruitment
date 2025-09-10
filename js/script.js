document.addEventListener('DOMContentLoaded', () => {
    const courses = document.getElementById('featuredCourses')
    const clubs = document.getElementById('featuredClubs')

    const render1 = courseList => {
        courses.innerHTML = ''

        courseList.forEach(c => {
            const featCourses = document.createElement('div')

            featCourses.className = 'col-6 col-md-3'
            featCourses.innerHTML = ``
        })
    }

    const render2 = clubList => {
        clubs.innerHTML = ''

        clubList.forEach(c => {
            const featClubs = document.createElement('div')

            featClubs.className = 'gallery-cell'
            featClubs.innerHTML = ``
        })
    }
})