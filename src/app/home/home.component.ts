import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  imports: [CommonModule],
})
export class HomeComponent {
  featuredArtisans = [
    {
      name: 'Artisan 1',
      rating: 5,
      specialty: 'Plumbing',
      location: 'Paris'
    },
    {
      name: 'Artisan 2',
      rating: 4,
      specialty: 'Electrician',
      location: 'Lyon'
    },
    {
      name: 'Artisan 3',
      rating: 4,
      specialty: 'Carpenter',
      location: 'Marseille'
    }
  ];
  ngOnInit()
  {
    
  }
}
