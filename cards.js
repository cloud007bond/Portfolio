
const portfolio = document.getElementById('portfolio');

const projectData = [
    {
        name: 'Tonic',
        description: "A daily selection of privately personalized reads; no accounts or sign-ups required.",
        nation: ["CANOPY", "Back End Dev", 2015],
        technologies: ["html", "css", "javascript"],
        image: "images/nature - Copy.svg",
        link_live: "",
        link_source:"",
        button_text: "See project"
    },
    {
        name: "Multi-Post Stories",
        description: "Experimental content creation feature that allows users to add to an existing story over the course of a day without spamming their friends.",
        nation: ["FACEBOOK", "Full Stack Dev", 2015],
        technologies: ["html", "Ruby on rails", "css", "javascript"],
        image: "images/professional.svg",
        link_live: "",
        link_source:"",
        button_text: "See project"
    },
    {
      name: "Facebook 360",
      description: "Experimental content creation feature that allows users to add to an existing story over the course of a day without spamming their friends.",
      nation: ["FACEBOOK", "Full Stack Dev", 2015],
      technologies: ["html", "Ruby on rails", "css", "javascript"],
      image: "images/Facebook.svg",
      link_live: '',
      link_source:'',
      button_text: "See project"
  },
  {
   name: "Uber Navigation",
   description: "A smart assistant to make driving more safe, efficient, and fun by unlocking your most expensive computer: your car.",
   nation: ["Uber", "Lead developer", 2018],
   technologies: ["html", "Ruby on rails", "css", "javascript"],
   image: "images/Avaliable.svg",
   link_live: '',
   link_source:'',
   button_text: "See project"
}
  
]

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
   <img src="${projectData[2].name}" alt="">
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