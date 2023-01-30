// importamos la funcion que vamos a testear
//import { TestWatcher } from 'jest';
import { createUser } from '../src/lib/firebase.js';

describe('test para las funciones de firebase.js', () => {
  it('debería ser una función', () => {
    expect(typeof (createUser)).toBe('function');
  });
  test('la funcion createUser crea un objeto con los valores de password and email de usuario que se registra', () => {
    let email = 'adrianayhanna@gmail.com'
    let password = 'hannabanana'

    let usuario = createUser (email, password)

    expect (usuario).toEqual({email,password})
  });

});
