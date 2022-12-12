import { Component, OnInit } from '@angular/core';

declare let AOS: any;

@Component({
  selector: 'app-my-skills',
  templateUrl: './my-skills.component.html',
  styleUrls: ['./my-skills.component.scss'],
})
export class MySkillsComponent implements OnInit {
  skills = [
    { img: 'angular', description: 'Angular' },
    { img: 'typescript', description: 'Typescript' },
    { img: 'javascript', description: 'Javascript' },
    { img: 'html', description: 'HTML' },
    { img: 'firebase', description: 'Firebase' },
    { img: 'git', description: 'GIT' },
    { img: 'css', description: 'CSS' },
    { img: 'api', description: 'Rest-Api' },
    { img: 'scrum', description: 'Scrum' },
    { img: 'material-design', description: 'Material design' },
  ];

  constructor() {
    console.log(this.skills);
  }

  ngOnInit(): void {
    AOS.init();
  }

  scroll(id) {
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
  }
}
