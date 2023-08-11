import { Component , Renderer2} from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  constructor(private renderer: Renderer2) {}

  toggleProfile(){
    const button = document.getElementById("profileTab");
    if(button){
      if (button.classList.contains('show')) {
        this.renderer.removeClass(button, 'show');
      } else{
        this.renderer.addClass(button, 'show');
      }
  }

  }
}
