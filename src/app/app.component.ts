import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = '';
  panjang: Number = 10;
  lebar: Number = 10;
  isBreakTime: Boolean = true;
  isLoggedIn: Boolean = true;

  handleBlur(event: any) {
    this.title = event.target.value;
  }

  handleInput(event: any) {
    this.title = event.target.value;
  }

  handleClick(event: any) {
    this.title = "Kharisma Muzaki Ghufron";
  }

  handleChange(value){
    this.title = value;
  }

  todos: any = [
    {
      id:1,
      todo:"Create module perulangan",
      status:true,
      createdAt: new Date(2019,3,20)
    },
    {
      id:2,
      todo:"Create example project",
      status:false,
      createdAt: new Date(2019,3,21)
    },
    {
      id:3,
      todo:"Create dummy backend",
      status:false,
      createdAt: new Date(2019,3,22)
    },
    {
      id:4,
      todo:"Create challenge code",
      status:false,
      createdAt: new Date(2019,3,23)
    }
  ];
}
