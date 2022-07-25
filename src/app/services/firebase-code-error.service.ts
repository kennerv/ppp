import { Injectable } from '@angular/core';
import { FirebaseCodeErrorEnum } from '../utils/firebase-code-error';

@Injectable({
  providedIn: 'root'
})
export class FirebaseCodeErrorService {

  constructor() { }

  codeError(code: string) {
    switch(code) {
      //correo ya existe
      case FirebaseCodeErrorEnum.EmailAlreadyInUse:
        return 'El usuario ya existe.';
        //contraseña corta
        case FirebaseCodeErrorEnum.WeakPassword:
          return 'Ingrese una contraseña de mínimo 6 dígitos.';
          //correo inválido
          case FirebaseCodeErrorEnum.InvalidEmail:
          return 'Ingrese un correo válido.';
          //contraseña incorrecta
          case FirebaseCodeErrorEnum.WrongPassword:
          return 'contraseña incorrecta.';
          //correo no existe
          case FirebaseCodeErrorEnum.UserNotFound:
          return 'El usuario no existe.';
        default:
        return 'Error desconocido';
    }
  }
}
