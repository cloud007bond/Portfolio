const modal_menu = document.querySelector('.modal-1');
const btn_hamburger = document.querySelector('.hamburger-img');
const btn_close = document.querySelector('.close-1');

const links = document.querySelectorAll('.lnks a');
for (let link of links) {
    link.addEventListener('click', () => {
        modal_menu.close();
    });
}

btn_hamburger.addEventListener('click', () => {
    modal_menu.show();
});

btn_close.addEventListener('click', () => {
    modal_menu.close();
});

const projects = [
    {
        id: 1,
        title: 'TONIC',
        screnshot: './images/nature.svg',
        info: 'CANOPY',
        role: 'Back End Dev',
        year: 2023,
        desc: 'Experimental content creation feature that allows users to add to an existing story over the course of a day without spamming their friends.',
        tech: ['html', 'css', 'JavaScript'],
        seeLive: '',
        seeSource: '',
    },
    {
        id: 2,
        title: 'Multi-Post Stories',
        screnshot: './images/professional.svg',
        info: 'FACEBOOK',
        role: 'Back End Dev',
        year: 2023,
        desc: 'Experimental content creation feature that allows users to add to an existing story over the course of a day without spamming their friends.',
        tech: ['html', 'css', 'JavaScript'],
        seeLive: '',
        seeSource: '',
    },
    {
        id: 3,
        title: 'Facebook 360',
        screnshot: './images/Facebook.svg',
        info: 'FACEBOOK',
        role: 'Back End Dev',
        year: 2023,
        desc: 'Experimental content creation feature that allows users to add to an existing story over the course of a day without spamming their friends.',
        tech: ['html', 'css', 'JavaScript'],
        seeLive: '',
        seeSource: '',
    },
    {
        id: 4,
        title: 'Uber Navigation',
        screnshot: './images/Avaliable.svg',
        info: 'FACEBOOK',
        role: 'Back End Dev',
        year: 2023,
        desc: 'Experimental content creation feature that allows users to add to an existing story over the course of a day without spamming their friends.',
        tech: ['html', 'css', 'JavaScript'],
        seeLive: '',
        seeSource: '',
    },

];

const projectData = projects.map((project, index)=> (`<div class="project-card">
<div class="project-image">
   <img src=${project.screnshot} alt={project.title}>
</div>
<div class="project-details">
   <h3>${project.title}</h3>
   <ul>
      <li>
         ${project.info}
      </li>
      <li>
         <img src="images/dot.svg" alt="">
      </li>
      <li>
        ${project.role}
      </li>
   <li>
      <img src="images/dot.svg" alt="">
   </li>
   <li>
      ${project.year}
   </li>
   </ul>
   <p>
      ${project.desc}
   </p>
   <ul>
      <li>
         ${project.tech[0]}
      </li>
      <li>
         ${project.tech[1]}
      </li>
      <li>
         ${project.tech[2]}
      </li>
      

   </ul>
   <button type="button"class="see-project-btn" onclick="openPopup()" id=${index}>
      See project
   </button>
</div>
</div>`))

const portfolio = document.getElementById('portfolio')
portfolio.innerHTML = projectData;

const popup = document.getElementById('popup');

const displayPopup = projects.map((project)=>(`<div class="overlay">
<div class ="content">
    <button type="button" class="close">X</button>
    <h1 class="title">${project.title}</h1>
    <div class="detials">
        <p>${project.info}</p>
        <ul class="role-year">
            <li>${project.role}</li>
            <li>${project.year}</li>
        </ul>
    </div>
    <img src=${project.screnshot} alt="project screenshot">
    <p class="desc">
      ${project.desc}
    </p>
    <div class="tech-btns">
        <button type="button">${project.tech[0]}</button>
        <button type="button">${project.tech[1]}</button>
        <button type="button">${project.tech[2]}</button>
    </div>
    <div class="see-btns">
        <img src="./images/see-btn.svg">
    </div>
</div>
</div>`)).join('')

popup.innerHTML = displayPopup;

function openPopup() {
    if (popup.style.display ==='none') {
        const e = Number(this.id)
        popup.innerHTML = displayPopup[e]
        popup.style.display = 'block'
    } else {
        popup.style.display = 'none'
    }
}
openPopup();

function closePopup(){
    document.querySelector('.close').addEventListener('click', ()=>{
        popup.style.display = 'none'
    })
}