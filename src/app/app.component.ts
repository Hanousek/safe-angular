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

  }

  public cleartimer(): void{

    clearTimeout(this.time);
    this.time = null;

  }

  public isTimerRunning(): boolean{

    return typeof this.time != null;

  }

  public makeTimer(): void{

    this.time = setTimeout(() => {
      this.clearcall();
    }, 3000)

  }

  public resetTime(): void{

    if(!this.isTimerRunning()){

      this.makeTimer();

    }else{
      this.cleartimer();
      this.makeTimer();

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


}
