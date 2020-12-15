import { Component, ElementRef, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Info } from './components/info.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  books: Info[] = [];

  constructor() {}
  ngOnInit(): void {
    this.books = [
      {
        Id: 1,
        Title: 'New Lands Online Book 1: Encounters: A LitRPG Series',
        Content:
          "Jack was enjoying life, though broke, as a snowboarding instructor in Lake Tahoe until an accident happened. Due to a hospital mix up his life takes a novel turn and he ends up inside New Lands Online, as its first ever digital human. He never signed up to be the main character in an ultra realistic virtual reality game where bodily functions are as real as can be and has to learn new skills to survive. From the arena where Jack has to fight to survive to the Three Rivers, a small village where Jack experiences multiple adventures, to Boon Peak, where Jack gets a taste of his old life, Encounters has entertaining action, adventure & humor from beginning to end. The progression from newbie in the game world to druid with magic powers and spells is a thrill ride you're sure to enjoy.",
        Date: '12 Sep. 2018',
        Class: 'primary',
      },
      {
        Id: 2,
        Title: 'Light Online Book Four: Defender',
        Content:
          "Eddie Hunter just wants to keep building his settlement, but somehow there's always something in the way. His good ties with Freyja have made him a target for one of the other AIs in the game. One of the other less savory AIs, who isn't too picky about how he expresses his displeasure.",
        Date: '19 Sep. 2019',
        Class: 'secondary',
      },
      {
        Id: 3,
        Title: 'Retina (Color Atlas and Synopsis of Clinical Ophthalmology)',
        Content:
          'Developed at Philadelphia’s world-renowned Wills Eye Hospital, the Color Atlas and Synopsis of Clinical Ophthalmology series covers the most clinically relevant aspects of ophthalmology in a highly visual, easy-to-use format. Vibrant, full-color photos and a consistent outline structure present a succinct, high-yield approach to the seven topics covered by this popular series: Cornea, Retina, Glaucoma, Oculoplastics, Neuro-Ophthalmology, Pediatrics, and Uveitis. This in-depth, focused approach makes each volume an excellent companion to the larger Wills Eye Manual as well as a practical stand-alone reference for students, residents, and practitioners in every area of ophthalmology.',
        Date: '22 Sep. 2020',
        Class: 'success',
      },
    ];
  }

  onClickReadMore() {
    if (this.books.length === 3) {
      this.books.push(
        ...[
          {
            Id: 4,
            Title: 'Glory to the Brave: Ascend Online, Book 4',
            Content:
              "Betrayed by those they'd taken in and narrowly avoiding a disaster of untold proportions, Lyrian and his friends are once again thrust into a fight for their very survival, this time against Carver and his band of murderous adventurers. But as their newfound war quickly reaches a stalemate, both sides find themselves scrambling for a way to break it, while viciously battling one another for every inch of ground that they can steal in the process.",
            Date: '15 Sep. 2018',
            Class: 'danger',
          },
          {
            Id: 5,
            Title:
              'Guitar All-in-One For Dummies: Book + Online Video and Audio Instruction',
            Content:
              "There's no denying that guitar players have cachet. The guitar is an ever-present part of our collective musical heritage, and the sound can be sensual, aggressive, or a million things in between. Whether you're hoping to conquer Free Bird, Bourée, or Bolero Mallorquin, you need to learn to walk before you can run. Even once you can run, you need something to help you clear hurdles along the way.",
            Date: '18 Sep. 2017',
            Class: 'warning',
          },
        ]
      );
    }
  }
}
