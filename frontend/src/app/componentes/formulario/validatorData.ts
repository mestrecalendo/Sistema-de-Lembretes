import { AbstractControl } from "@angular/forms";

export function validatorData(control: AbstractControl) {
  const data = new Date(control.value);
  var dataAtual = new Date();

  console.log(data, dataAtual);
  console.log(data > dataAtual);
  if (dataAtual > data) {
    return { datafutura: true };
  } else {
    return null;
  }
}
