
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  imports: [FormsModule],
})
export class HeaderComponent {
  searchQuery: string = '';

 
  onSearch() {
    console.log('Searching for artisans with query:', this.searchQuery);
   
  }
}
