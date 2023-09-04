import { Component , Renderer2} from '@angular/core';
import { Router, UrlSegment } from '@angular/router';
import { UtilityService } from '../utility.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  constructor(private renderer: Renderer2, private router: Router, private util:UtilityService) {}

  path: string | null = null;

  ngOnInit() {
    const tree = this.router.parseUrl(this.router.url);
    const firstSegment: UrlSegment = tree.root.children['primary'].segments?.[0];
    this.path = firstSegment.path;
  }

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
  signOut(){
    this.util.updateRoute('/login')
  }
}
