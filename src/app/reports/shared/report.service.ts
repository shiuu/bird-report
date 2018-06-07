import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';

import { IReport, ISpecies, IBird } from './report.model';

@Injectable()
export class ReportService {
  private birds:IBird[];

  constructor(private http: HttpClient) {
    // this.getBirds().subscribe(value => this.birds = value);

    this.http.get<IBird[]>('/api/birds')
      .pipe(catchError(this.handleError<IBird[]>('getBirds', [])))
      .subscribe(value => this.birds = value);
  }

  getReports():Observable<IReport[]> {
    return this.http.get<IReport[]>('/api/reports')
      .pipe(catchError(this.handleError<IReport[]>('getReports', [])));
  }
  
  getReport(id:number):Observable<IReport> {
    return this.http.get<IReport>('/api/reports/' + id)
      .pipe(tap( report => {report.species.forEach(s => {
              let bird = this.getBirdInfo(s.id);
              s['otherNames'] = bird.otherNames;
              s['scientificName'] = bird.scientificName;
              s['uncommon'] = bird.uncommon;
            });
            return of(report as IReport);
          }),
        catchError(this.handleError<IReport>('getReport'))
      )
  }

  saveReport(report) {
    let options = { headers: new HttpHeaders({'Content-Type': 'application/json'})};
    return this.http.post<IReport>('/api/reports', report, options)
      .pipe(catchError(this.handleError<IReport>('saveReport')))
  }

  /*
  getBirds():Observable<IBird[]> {
    return this.http.get<IBird[]>('/api/birds')
      .pipe(catchError(this.handleError<IBird[]>('getBirds', [])));
  }*/

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    }
  }

  getBirdId(birdName):number {
    return this.birds.find(bird => bird.name === birdName).id;
  }

  getBirdInfo(id: number):IBird {
    return this.birds.find(bird => bird.id === id);
  }

  getBirdInfoFromName(birdName: string):IBird {
    return this.birds.find(bird => bird.name === birdName);
  }

  getBirds():IBird[] {
    return this.birds;
  }
}

const REPORTS = [
  {
    id: 1,
    date: '3/31/2018',
    location: { 
      place: 'Capertee Valley',
      state: 'NSW'
    },
    notes: 'Birding highlights were 8 Regent Honeyeaters which were calling to each other with one pair observed nesting, several groups of up to 30 Plum-headed Finch, a Rockwarbler, Turquoise Parrots, a male Painted Button-quail, many Hooded Robins and light & dark morphs of both Little Eagle and White-bellied Cuckoo-shrike. Noisy Friarbirds were very aggressive and seemed to be everywhere.',
    species: [
      {
        name: 'Hooded Robin',
        count: 19,
        comments: ''
      },
      {
        name: 'Noisy Friarbird',
        count: 'hundreds',
        comments: 'They seemed to be everywhere!'
      },
      {
        name: 'Painted Button-quail',
        count: 1,
        comments: 'A male.'
      },
      {
        name: 'Plum-headed Finch',
        count: 1,
        comments: ''
      },
      {
        name: 'Regent Honeyeater',
        count: 8,
        comments: 'Actively calling. One pair observed nesting.'
      },
      {
        name: 'Rockwarbler',
        count: 1,
        comments: ''
      },
      {
        name: 'Turquoise Parrot',
        count: 1,
        comments: ''
      },
      {
        name: 'White-bellied Cuckoo-shrike',
        count: 3
      }

    ]
  },
  {
    id: 2,
    date: '3/24/2018',
    location: {
      place: 'Royal National Park',
      state: 'NSW'
    },
    notes: 'Rainbow Lorikeets and New Holland Honeyeaters seemed the most plentiful birds but Pied Oystercatcher, Crested Turns, Buff-banded Rail, Nankeen Night-heron, Variegated Fairywren and Red-capped Ploverwere pleasing to see.',
    species: [
      {
        name: 'Variegated Fairywren',
        count: 8
      },
      {
        name: 'Buff-banded Rail',
        count: 3,
        comments: ''
      },
      {
        name: 'Nankeen Night-heron',
        count: 2,
        comments: ''
      },
      {
        name: 'New Holland Honeyeater',
        count: 20,
        comments: ''
      },
      {
        name: 'Pied Oystercatcher',
        count: 7,
        comments: ''
      },
      {
        name: 'Powerful Owl',
        count: 1,
        comments: ''
      },
      {
        name: 'Rainbow Lorikeet',
        count: 20,
        comments: ''
      },
      {
        name: 'Red-capped Plover',
        count: 5,
        comments: ''
      }
    ]
  },
  {
    id: 3,
    date: '3/17/2018',
    location: {
      place: 'Centennial Park, Sydney',
      state: 'NSW'
    },
    notes: 'Surveyed the Duck Pond in Centennial Park this morning. No exciting birds on the pond but we did see 3 Tawny frogmouths and a Buff-banded Rail in Lachlan Swamp. The Powerful Owl hasn’t been seen for over a month and we couldn’t find the Barn Owl this morning. Lots of Yellow-tailed Black Coickies.',
    species: [
      { name: 'Yellow-tailed Black-Cockatoo',
        count: 3
      },
      {
        name: 'Buff-banded Rail',
        count: 3,
        comments: ''
      },
      {
        name: 'Nankeen Night-heron',
        count: 1,
        comments: ''
      },
      {
        name: 'Powerful Owl',
        count: 1,
        comments: ''
      },
      {
        name: 'Tawny Frogmouth',
        count: 3,
        comments: ''
      }
    ]
  },
  {
    id: 4,
    date: '3/3/2018',
    location: {
      place: 'Deniliquin',
      state: 'NSW'
    },
    notes: 'The afternoon at the Wanganella swamps gave us great views of Little grassbirds, as well as many of the expected waterbirds. Late afternoon two Major Mitchell cockatoos circled above the group for several minutes, giving everyone a chance to admire them. The evening yielded the sought-after Plains wanderers - both male and female birds were seen and admired at close range.',
    species: [
      { name: 'Australasian Bittern',
        count: 1,
        comments: ''
      },
      { name: 'Barn Owl',
        count: 13,
        comments: 'Plent of them on the way to the farm.'
      },
      {
        name: 'Little Bittern',
        count: '2',
        comments: 'A pair with three eggs in their nest.'
      },
      {
        name: 'Major Mitchell\'s Cockatoo',
        count: '2',
        comments: 'Late Saturday afternoon two Major Mitchell cockatoos circled above the group for several minutes.'
      },
      {
        name: 'Plains-wanderer',
        count: '4',
        comments: 'Seen 2 males and 2 females at close range.'
      }
    ]

  },
  {
    id: 5,
    date: '2/18/2018',
    location: {
      place: 'Pine Island Reserve',
      state: 'ACT'
    },
    notes: 'Quite a lot species were perching for good views by the Murrumbidgee River. They included Little Pied Cormorants, White-faced Heron, Black-faced Cuckoo-shrikes, Yellow-faced Honeyeater, several Dollarbirds and lots of Noisy Friarbirds. Towards the end of the walk, we saw a flock of 16 Rainbow Bee-eaters flying over high.',
    species: [
      {
        name: 'Australasian Grebe',
        count: '2',
        comments: ''
      },
      {
        name: 'Black-faced Cuckoo-shrike',
        count: '2',
        comments: ''
      },
      {
        name: 'Dollarbird',
        count: '5',
        comments: ''
      },
      {
        name: 'Hardhead',
        count: '4',
        comments: 'In the dam behind the Viking Sports Club.'
      },
      {
        name: 'Little Pied Cormorant',
        count: '18',
        comments: ''
      },
      {
        name: 'Noisy Friarbird',
        count: 5,
        comments: ''
      },
      {
        name: 'Rainbow Bee-eater',
        count: 17,
        comments: 'Flow over high'
      },
      {
        name: 'Red-browed Finch',
        count: 12,
        comments: ''
      },
      { 
        name: 'Sacred Kingfisher',
        count: 1,
        comments: ''
      },
      {
        name: 'Silvereye',
        count: 20,
        comments: ''
      },
      {
        name: 'White-faced Heron',
        count: 1
      },
      {
        name: 'Yellow-faced Honeyeater',
        count: 7
      }
    ]
  }
];

const BIRDS = [
  { id: 120101,     uncommon: false,     name: "Little Pied Cormorant" },

  { id: 130101,     uncommon: false,     name: "White-faced Heron" },
  { id: 130102,     uncommon: false,     name: "Nankeen Night Heron" },
  { id: 130103,     uncommon: true,      name: "Little Bittern" },
  { id: 130104,     uncommon: true,      name: "Australasian Bittern" },

  { id: 130201,     uncommon: false,     name: "Australasian Grebe" },
  { id: 130301,     uncommon: false,     name: "Australian White Ibis" },

  { id: 150101,     uncommon: true,      name: "Buff-banded Rail" },
  { id: 150102,     uncommon: true,      name: "Dusky Moorhen" },

  { id: 160101,     uncommon: true,      name: "Plains-wanderer" },
  { id: 160201,     uncommon: true,      name: "Red-capped Plover" },
  { id: 160301,     uncommon: true,      name: "Pied Oystercatcher" },
  { id: 160401,     uncommon: true,      name: "Painted Button-quail" },
  { id: 160501,     uncommon: true,      name: "Silver Gull" },

  { id: 170101,     uncommon: false,      name: "Rock Dove",  otherNames: [ "Feral Pigeon" ]},
  
  { id: 180101,     uncommon: false,     name: "Sulphur-crested Cockatoo" },
  { id: 180102,     uncommon: true,       name: "Major Mitchell's Cockatoo"},
  { id: 180103,     uncommon: true,       name: "Yellow-tailed Black-Cockatoo"},
  { id: 180104,     uncommon: false,      name: "Corella"},

  { id: 180201,     uncommon: false,     name: "Rainbow Lorikeet" },
  { id: 180202,     uncommon: true,       name: "Turquoise Parrot"},

  { id: 200101,     uncommon: true,       name: "Powerful Owl"},
  { id: 200201,     uncommon: true,      name: "Barn Owl"},

  { id: 210101,     uncommon: true,      name: "Tawny Frogmouth"},

  { id: 250101,     uncommon: true,     name: "Sacred Kingfisher" },
  { id: 250102,     uncommon: false,    name: "Kookaburra" },
  { id: 250201,     uncommon: true,     name: "Rainbow Bee-eater" },
  { id: 250301,     uncommon: true,     name: "Dollarbird" },

  { id: 270101,     uncommon: true,     name: "Rockwarbler" },
  { id: 270201,     uncommon: true,      name: "Regent Honeyeater" },
  { id: 270202,     uncommon: false,     name: "New Holland Honeyeater" },
  { id: 270203,     uncommon: false,     name: "Yellow-faced Honeyeater" },
  { id: 270204,     uncommon: false,     name: "Noisy Friarbird" },	
  { id: 270205,     uncommon: false,     name: "Noisy Miner" },
  
  { id: 270301,     uncommon: false,     name: "Silvereye" },
  { id: 270401,     uncommon: false,     name: "Red-browed Finch" },
  { id: 270402,     uncommon: false,     name: "Plum-headed Finch" },
  
  { id: 270501,     uncommon: false,     name: "Black-faced Cuckoo-shrike" },
  { id: 270502,     uncommon: false,     name: "White-bellied Cuckoo-shrike" },

  { id: 270601,     uncommon: false,     name: "Superb Fairywren" },
  { id: 270602,     uncommon: true,     name: "Variegated Fairywren" },
  { id: 270701,     uncommon: true,     name: "Hooded Robin" },
  { id: 270801,     uncommon: false,     name: "Common Myna" },
  { id: 270901,     uncommon: false,     name: "Australian Magpie" },
  { id: 271001,     uncommon: false,     name: "Magpie-lark" },
  { id: 271101,     uncommon: false,     name: "Welcome Swallow" },
  { id: 271201,     uncommon: false,     name: "Sparrow" },
  
  { id: 370101,     uncommon: false,     name: "Australian Wood Duck" },
  { id: 370102,     uncommon: false,     name: "Pacific Black Duck" },
  { id: 370103,     uncommon: false,     name: "Grey Teal" },
  { id: 370201,     uncommon: false,     name: "Hardhead" },
  { id: 370301,     uncommon: false,     name: "Black Swan"}
];