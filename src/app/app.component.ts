import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'SAFE';

  numbers = "";
  closed = false;
  savedpin = "";
  time = null;

  public clearcall(): void{

    this.numbers = "";
    this.time = null;

  }

  public resetTime(): void{

    if( this.time == null){

      this.time = setTimeout(() => {
        this.clearcall()
      }, 3000)

    }else{
      clearTimeout(this.time);
      this.time = null;
    }

  }


  public passNum(arg: any): void{

    this.resetTime();
    if(this.numbers.length < 6) {
      this.numbers += arg.toString();

      if(this.closed){

        if(this.numbers == this.savedpin){

          this.closed = !(this.closed);
          this.numbers = "O P E N";

        }

      }

    }
  }

  public triggerlock(): void{

    this.resetTime();

    if (2 < (this.numbers.length)){

      if(!this.closed) {

        this.closed = true;
        this.savedpin = this.numbers;
        this.numbers = "C L O S E D";

      }else{
        this.numbers = "DONT CHEAT. ENTER CORRECT PIN FIRST.";
      }
    }else if(!this.closed){
      this.numbers = "PIN TOO SHORT. TRY AGAIN."
    }else{
      this.numbers = "DONT CHEAT. ENTER CORRECT PIN FIRST.";
    }



  }

  public triggerclear(): void{

  this.resetTime();
  this.numbers = "";

  }


}
