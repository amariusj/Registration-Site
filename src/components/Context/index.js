import React, { Component } from 'react';

//Images
import ecma from './img/ecma.png';
import jay from './img/jay.png';
import json from './img/json.png';
import nodestradamus from './img/nodestradamus.png';
import robbie from './img/robbie.png';
import vivianne from './img/vivianne.png';
import logo from './img/pdx.jpg'

const SpeakerContext = React.createContext();

export class Provider extends Component {

  state = {
    logo: logo,
    speakers: [
      {
        name: "Ecma Scriptnstuff",
        description: "Ecma found her passion for programming and teaching over 15 years ago. She is excited to introduce you to all of the wonders of JavaScript.",
        image: ecma,
        id: 1
      },
      {
        name: "Ecma",
        description: "All of his professional life, Json has worked with computers online; he is a polyglot programmer and likes using the right tools for the job.",
        image: json,
        id: 2
      },
      {
        name: "Jay Query",
        description: ">Jay is a developer, author of CSS: The Missing Manual, JavaScript &amp; jQuery: The Missing Manual, and web development teacher.",
        image: jay,
        id: 3
      },
      {
        name: "Robbie Redux",
        description: "Robbie is a JavaScript developer working on large-scale applications. He's also a teacher who strives to support students in removing barriers to learning code.",
        image: robbie,
        id: 4
      },
      {
        name: "NodeStradamus",
        description: "'NodeStra' is a software engineer and philosopher trying to leave the world better than he found it. He codes for non-profits, eCommerce, and large-scale web apps.",
        image: nodestradamus,
        id: 5
      },
      {
        name: "Vivianne McVue",
        description: "Vivianne is a web developer and teacher who is passionate about building scalable, data-driven web apps, especially ones that address old problems with new tech!",
        image: vivianne,
        id: 6
      }
    ]
  };

  componentDidMount() {
    this.intervalID = this.hide(document.getElementById('other'));
  }

  focus = (firstInput) => {
    setTimeout(() => firstInput.focus(), 500);
  }

  hide = (element) => {
    element.style.display = "none";
  }

  show = (element) => {
    element.style.display = "block";
  }

  showOrHide = (event) => {
    if (event.target.value === "other") {
      this.show(document.getElementById('other'));
    } else {
      this.hide(document.getElementById('other'));
    }
  }


  //

  checkDisable = (event) => {
    if (event.target.checked === true
       && event.target.nextSibling.textContent.includes('Tuesday 9am-12pm')) {
      let fieldset = event.target.parentNode.parentNode;
      for (let i = 0; i < fieldset.children.length; i++) {
        let input = fieldset.children[i].children[0];
        let label = fieldset.children[i].children[1];
        if (input.checked === false
           && label.textContent.includes('Tuesday 9am-12pm')
      ) { input.setAttribute('disabled', true) }
      }
    } else  if (event.target.checked === true
      && event.target.nextSibling.textContent.includes('Tuesday 1pm-4pm')){
      let fieldset = event.target.parentNode.parentNode;
      for (let i = 0; i < fieldset.children.length; i++) {
        let input = fieldset.children[i].children[0];
        let label = fieldset.children[i].children[1];
        if ( input.checked === false
          && label.textContent.includes('Tuesday 1pm-4pm')
        ) { input.setAttribute('disabled', true) }
      }
  //  } else if () {
      //event is unchecked, then remove the disabled attribute with removeAttribute
  //  } else if () {
      //event is unchecked, then remove the disabled attribute with removeAttribute
    }
  }

  render() {
    return(
      <SpeakerContext.Provider value={{
        speakers: this.state.speakers,
        logo: this.state.logo,
        actions: {
          focus: this.focus,
          showOrHide: this.showOrHide,
          checkDisable: this.checkDisable
        }
      }}>
        { this.props.children }
      </SpeakerContext.Provider>
    );
  }
}
export const Consumer = SpeakerContext.Consumer;
