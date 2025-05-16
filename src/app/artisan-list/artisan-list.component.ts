
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-artisan-list',
  templateUrl: './artisan-list.component.html',
  styleUrls: ['./artisan-list.component.scss']
})
export class ArtisanListComponent {
  artisans = [
    {
      name: 'Artisan 1',
      rating: 5,
      specialty: 'Plumbing',
      location: 'Paris',
      id: 1
    },
    {
      name: 'Artisan 2',
      rating: 4,
      specialty: 'Electrician',
      location: 'Lyon',
      id: 2
    },
    {
      name: 'Artisan 3',
      rating: 4,
      specialty: 'Carpenter',
      location: 'Marseille',
      id: 3
    }
  ];

  constructor(private router: Router) {}

  goToProfile(artisan: any) {
    this.router.navigate(['/artisan', artisan.id]);
  }
}
