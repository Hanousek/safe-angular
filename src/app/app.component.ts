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
  counter: number = 0;



  public countTime(arg: number, arg2: any): void{

    alert("Timeout " + arg);
    if(arg < 4) {
      arg += 1;
    }else{
      arg = "";
      clearInterval(arg2);
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
