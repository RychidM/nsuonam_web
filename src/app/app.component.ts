import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'nsuonam_web';

  currentStep: Stepper = Stepper.initialStep;

  Stepper = Stepper;

  stepForward(stepper: Stepper) {
    switch(stepper){
      case Stepper.initialStep:
        this.currentStep = Stepper.idVerificationStep;
        break;
      case Stepper.idVerificationStep:
        this.currentStep = Stepper.photoVerificationStep;
        break;
      case Stepper.photoVerificationStep:
        break; 
    }
  }

  stepBackwards(currentStep: Stepper){
    switch(currentStep){
      case Stepper.initialStep:
        break;
      case Stepper.idVerificationStep:
        this.currentStep = Stepper.initialStep;
        break;
      case Stepper.photoVerificationStep:
        this.currentStep = Stepper.idVerificationStep;
        break;    
    }
  }
}

enum Stepper {
  initialStep, idVerificationStep, photoVerificationStep
}