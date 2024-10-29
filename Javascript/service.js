
const serviceDetails = [{
    image: "./icons/algolia.svg",
    title: "Web Development",
    message: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi debitis, repudiandae architecto nam hic exercitationem voluptas! Deleniti, quod, esse nulla sit autem atque molestias porro quibusdam, nobis sapiente rerum voluptatibus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam ipsam itaque tempore corrupti. Explicabo, hic a magni quod eius totam necessitatibus. Officiis fugit deleniti dolor tenetur quaerat esse odit. Sit?",
    buttonInfo: "Click To Hire Me"
},{
    image: "./icons/slack.svg",
    title: "Mobile App Development",
    message: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi debitis, repudiandae architecto nam hic exercitationem voluptas! Deleniti, quod, esse nulla sit autem atque molestias porro quibusdam, nobis sapiente rerum voluptatibus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam ipsam itaque tempore corrupti. Explicabo, hic a magni quod eius totam necessitatibus. Officiis fugit deleniti dolor tenetur quaerat esse odit. Sit?",
    buttonInfo: "Hire The Expert. Click Here"
},{
    image: "/icons/menu.png",
    title: "SEO Analysis",
    message: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi debitis, repudiandae architecto nam hic exercitationem voluptas! Deleniti, quod, esse nulla sit autem atque molestias porro quibusdam, nobis sapiente rerum voluptatibus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam ipsam itaque tempore corrupti. Explicabo, hic a magni quod eius totam necessitatibus. Officiis fugit deleniti dolor tenetur quaerat esse odit. Sit?",
    buttonInfo: "Click Here To Improve Your SEO Knowledge"
}, {
    image: "./icons/circle-info-solid.svg",
    title: "Graphic Designing",
    message: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi debitis, repudiandae architecto nam hic exercitationem voluptas! Deleniti, quod, esse nulla sit autem atque molestias porro quibusdam, nobis sapiente rerum voluptatibus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam ipsam itaque tempore corrupti. Explicabo, hic a magni quod eius totam necessitatibus. Officiis fugit deleniti dolor tenetur quaerat esse odit. Sit?",
    buttonInfo: "Let The Experts Handle Your Graphics"
}];

let displayHtml = "";
serviceDetails.forEach((service)=>{
    displayHtml += `
        <div class="service-details">
            <img src=${service.image}  alt="image">
            <h3>${service.title}</h3>
            <p>${service.message}</p>
            <button onclick ="location.href = '/hireme.html';" title = "Contact Samuel Botchwey">Click To Hire Me</button>
        </div>
        `

})


document.querySelector(".js-add-to-page").innerHTML = displayHtml;