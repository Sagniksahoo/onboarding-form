import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  constructor(private router: Router) {}

  // onButtonClick() {
  //   // Add the CSS class that triggers the logo animation
  //   const logo = document.querySelector('.logo');
    
  //   if (logo) {
  //     logo.classList.add('split-logo');
  //   }

  //   // Wait for the animation to finish, then navigate to the linked page
  //   setTimeout(() => {
  //     this.router.navigate(['/app-infrafrom']);  // Change to your desired route
  //   }, 2000);  // Wait for 1 second (match the duration of the animation)
  // }


  onButtonClick() {
    // Add the CSS class that triggers the logo animation
    const logo = document.querySelector('.logo');
    const welcomeText = document.getElementById('welcomeText');
    
    if (logo) {
      logo.classList.add('split-logo'); // Split the logo
    }

    // Show the welcome text after a slight delay (to sync with the split)
    setTimeout(() => {
      if (welcomeText) {
        welcomeText.classList.add('show-welcome');
      }
    }, 500); // Wait for 0.5 seconds before showing the text

    // Wait for the animation to finish, then navigate to the linked page
    setTimeout(() => {
      this.router.navigate(['/app-infrafrom']);  // Change to your desired route
    }, 1500);  // Wait for 1.5 seconds (animation + welcome)
  }

}
