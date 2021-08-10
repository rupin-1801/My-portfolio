const navs = document.querySelectorAll('.thumb');
const about = document.querySelector('#about');
const game = document.getElementById('game');
const skills = document.querySelector('#skill');
const projects = document.querySelector('#projects');
const contact = document.querySelector('#contact');

navs[0].addEventListener('click', () => {
    about.scrollIntoView({behavior: "smooth"});
})
navs[1].addEventListener('click', () => {
    game.scrollIntoView({behavior: "smooth"});
})
navs[2].addEventListener('click', () => {
    skills.scrollIntoView({behavior: "smooth"});
})
navs[3].addEventListener('click', () => {
    projects.scrollIntoView({behavior: "smooth"});
})
navs[4].addEventListener('click', () => {
    contact.scrollIntoView({behavior: "smooth"});
})