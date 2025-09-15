const quotes = [
    `Sol Iustitiae et Occidentem Illustra`
]

document.addEventListener('DOMContentLoaded', () => {
    const courseGal = document.getElementById('featuredCourses')
    const clubGal = document.getElementById('featuredClubs')

    // https://stackoverflow.com/questions/2380019/generate-unique-random-numbers-between-1-and-100
    while(clubs.length < 6){
        r2 = Math.floor(Math.random() * 100) + 1;
        if(arr.indexOf(r2) === -1) arr.push(r2);
    }
    console.log(clubs);

    // Rendering the courses and clubs
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

            featClubs.className = 'col mb-2'
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
        
            clubGal.appendChild(featClubs)
        })
    }

    render2(clubs)
    render1(courses)
})