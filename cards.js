const portfolio = document.getElementById('portfolio');

const projectData = [
   {
      id: 1,
      name: 'Tonic',
      description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
      nation: ['CANOPY', 'Back End Dev', 2015],
      technologies: ['html', 'css', 'javascript'],
      image: 'images/nature - Copy.svg',
      link_live: '',
      link_source: '',
      button_text: 'See project',
   },
   {
      id: 2,
      name: 'Multi-Post Stories',
      description: 'Experimental content creation feature that allows users to add to an existing story over the course of a day without spamming their friends.',
      nation: ['FACEBOOK', 'Full Stack Dev', 2015],
      technologies: ['html', 'Ruby on rails', 'css', 'javascript'],
      image: 'images/professional.svg',
      link_live: '',
      link_source: '',
      button_text: 'See project',
   },
   {
      id: 3,
      name: 'Facebook 360',
      description: 'Experimental content creation feature that allows users to add to an existing story over the course of a day without spamming their friends.',
      nation: ['FACEBOOK', 'Full Stack Dev', 2015],
      technologies: ['html', 'Ruby on rails', 'css', 'javascript'],
      image: 'images/Facebook.svg',
      link_live: '',
      link_source: '',
      button_text: 'See project',
   },
   {

      id: 4,
      name: 'Uber Navigation',
      description: 'A smart assistant to make driving more safe, efficient, and fun by unlocking your most expensive computer: your car.',
      nation: ['Uber', 'Lead developer', 2018],
      technologies: ['html', 'Ruby on rails', 'css', 'javascript'],
      image: 'images/Avaliable.svg',
      link_live: '',
      link_source: '',
      button_text: 'See project',
   },

];

const child = `<div class="project-card">
<div class="project-image">
   <img src="${projectData[0].image}" alt="">
</div>
<div class="project-details">
   <h3>${projectData[0].name}</h3>
   <ul>
      <li>
         ${projectData[0].nation[0]}
      </li>
      <li>
         <img src="images/dot.svg" alt="">
      </li>
      <li>
        ${projectData[0].nation[1]} 
      </li>
   <li>
      <img src="images/dot.svg" alt="">
   </li>
   <li>
    ${projectData[0].nation[2]}
   </li>
   </ul>
   <p>
      ${projectData[0].description}
   </p>
   <ul>
      <li>
         ${projectData[0].technologies[0]}
      </li>
      <li>
        ${projectData[0].technologies[1]}
      </li>
      <li>
        ${projectData[0].technologies[2]}
      </li>
   </ul>
   <button class="see-project-btn">
   ${projectData[0].button_text}
   </button>
</div>
</div>

<div class="project-card">
<div class="project-image">
   <img src="${projectData[1].image}" alt="">
</div>
<div class="project-details">
   <h3>${projectData[1].name}</h3>
   <ul>
      <li>
         ${projectData[1].nation[0]}
      </li>
      <li>
         <img src="images/dot.svg" alt="">
      </li>
      <li>
         ${projectData[1].nation[1]}
      </li>
   <li>
      <img src="images/dot.svg" alt="">
   </li>
   <li>
      ${projectData[1].nation[3]}
   </li>
   </ul>
   <p>
      ${projectData[1].description}</p>
   <ul>
      <li>
         ${projectData[1].technologies[0]}
      </li>
      <li>
         ${projectData[1].technologies[1]}
      </li>
      <li>
      ${projectData[1].technologies[2]}
      </li>
      <li>
         ${projectData[1].technologies[3]}
      </li>
   </ul>
   <button class="see-project-btn">
      ${projectData[1].button_text}
   </button>
</div>
</div>
<div class="project-card">
<div class="project-image">
   <img src="${projectData[2].image}" alt="">
</div>
<div class="project-details">
   <h3>${projectData[2].name}</h3>
   <ul>
      <li>
         ${projectData[2].nation[0]}
      </li>
      <li>
         <img src="images/dot.svg" alt="">
      </li>
      <li>
         ${projectData[2].nation[1]}
      </li>
   <li>
      <img src="images/dot.svg" alt="">
   </li>
   <li>
      ${projectData[2].nation[2]}
   </li>
   </ul>
   <p>
      ${projectData[2].description}
   </p>
   <ul>
      <li>
         ${projectData[2].technologies[0]}
      </li>
      <li>
         ${projectData[2].technologies[1]}
      </li>
      <li>
         ${projectData[2].technologies[2]}
      </li>
      <li>
         ${projectData[2].technologies[3]}
      </li>
   </ul>
   <button>
      ${projectData[2].button_text}
   </button>
</div>
</div>
<div class="project-card">
<div class="project-image">
   <img src="${projectData[3].image}" alt="">
</div>
<div class="project-details">
   <h3>${projectData[3].name}</h3>
   <ul>
      <li>
      ${projectData[3].nation[0]}
      </li>
      <li>
         <img src="images/dot.svg" alt="">
      </li>
      <li>
      ${projectData[3].nation[1]}
      </li>
   <li>
      <img src="images/dot.svg" alt="">
   </li>
   <li>
   ${projectData[3].nation[2]}
   </li>
   </ul>
   <p>
   ${projectData[3].description}
   </p>
   <ul>
      <li>
      ${projectData[3].technologies[0]}
      </li>
      <li>
      ${projectData[3].technologies[1]}
      </li>
      <li>
      ${projectData[3].technologies[2]}
      </li>
      <li>
      ${projectData[3].technologies[3]}
      </li>
   </ul>
   <button class="see-project-btn">
      ${projectData[3].button_text}
   </button>
</div>
</div>`;

portfolio.innerHTML = child;

/*
Popup Window function lies here
*/

const popupWindow = 
`<div class="mobile-modal-content">
  <div class="mobile-modal-header">
    <div class="close-mobile-modal">
      <button type="button" class="material-symbols-outlined" id="close"> X </button>
    </div>
    <h3 class="Pop-mobile-topic">${projectData.name}</h3>
  </div>
  <nav class="pop-up-list">
    <ul class="pop-mobile-items">
      <li class="mobile-canopy">${projectData[0].nation[0]}</li>
      <li class="mobile-back-end">${projectData.nation[1]}</li>
      <li class="mobile-year">${projectData.nation[2]}</li>
    </ul>
  </nav>
  <img src=${projectData.image} alt="nature" class="pop-up-img" id="mobile-popup-img" />
  <div class="pop-mobile-container">
    <p class="pop-mobile-text">${project.description}</p>
    <div class="pop-up-mobile-tech">
      <ul class="pop-mobile-tech">
      <li>${projectData.technologies[0]}</li>
      <li>${projectData.technologies[1]}</li>
      <li>${projectData.technologies[2]}</li>
      <li>${projectData.technologies[3]}</li>
      </ul>
      <div class="pop-up-button">
        <button class="see-live">
          See live
          <img
            src="images/icon_image/live-icon.png"
            width="20"
            height="20"
          />
        </button>
        <button class="see-source">
          See source
          <img
            src="images/icon_image/github-source.png"
            width="20"
            height="20"
          />
        </button>
      </div>
    </div>
  </div>
</div>`;

const popup = document.getElementById('popup');

popup.innerHTML = popupWindow;

const closePopupBtn = document.getElementById('close');

function closePopu() {
   closePopupBtn.addEventListener("click", () => {
      popup.style.display = 'none'
   });
}