import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Kharisma Muzaki Ghufron';
  panjang : Number = 10;
  lebar : Number = 10;
  isBreakTime : Boolean = true;

  handleBlur(event: any){
    console.log(event.target.value);
  }
}
