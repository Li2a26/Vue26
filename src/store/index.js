import { createStore } from 'vuex'

const lisaData = "https://li2a26.github.io/data/db.json"

export default createStore({
  state: {
    projects:null,
    project:null,
    testimonials:null,
    testimonial:null,
    Education:null,
    Skills:null,
 
  },
  mutations: {
    //Projects
    setProjects:(state, projects) => {
      state.projects = projects;

    },
    setProject:(state,project) => {
      state.project =  project
    },
    // Testimonials
    setTestimonials:(state, testimonials) => {
      state.testimonials = testimonials;

    },
    setTestimonial:(state,testimonial) => {
      state.testimonial =  testimonial
    },
    //skill
    setEducation:(state, Education) => {
      state.Education = Education;

    },
    setSkills:(state, value) => {
      state.Skills = value;

    },
    
  },
  actions: {
  async fetchProjects(context) {
  let response = await fetch(lisaData) 
    let {projects} = await response.json()
    context.commit("setProjects", projects);
  },
  //Testimonials
  async fetchTestimonials(context) {
  let response = await fetch(lisaData) 
    let {testimonials} = await response.json()
    context.commit("setTestimonials", testimonials);
  },
  async fetchSkills(context) {
    let response = await fetch(lisaData) 
      let {Skills} = await response.json()
      context.commit("setSkills", Skills);
    },
    async fetchEducation(context) {
      let response = await fetch(lisaData) 
        let {Education} = await response.json()
        context.commit("setEducation", Education);
      },
}

  },
  
);
