

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-artisan-profile',
  templateUrl: './artisan-profile.component.html',
  styleUrls: ['./artisan-profile.component.scss'],
  imports: [FormsModule],
})
export class ArtisanProfileComponent implements OnInit {
  artisan: any;
  contactForm = {
    name: '',
    subject: '',
    message: ''
  };

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    const artisanId = this.route.snapshot.paramMap.get('id');
    
    this.artisan = this.getArtisanById(artisanId); 
  }


  getArtisanById(id: string | null ) {
   console.log(id);
   
    return {
      name: 'Artisan 1',
      rating: 5,
      specialty: 'Plumbing',
      location: 'Paris',
      about: 'Expert plombier avec 10 ans d\'expérience.'
    };
  }

  submitForm() {
   
    alert('Message envoyé!');
  }
}
