/* eslint-disable no-undef */
// importamos la funcion que vamos a testear
// import { TestWatcher } from 'jest';
// import { async } from 'regenerator-runtime';
// import { createUser } from '../src/lib/firebase.js';
import { createUser, auth, authSing } from '../src/lib/firebase.js';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from '../src/init.js';

//TEST PARA CREAR/REGISTRAR USUARIO
jest.mock('../src/init.js', () => {
  return {
    auth: jest.fn(() => {
      return { auth: 'TEST' }
    }),

    createUserWithEmailAndPassword: jest.fn((auth, email, password) => {
      if (!email || !password) {
        throw new Error('ERROR')
      }
      Promise.resolve({ user: 'admin' })

    }),

    signInWithEmailAndPassword: jest.fn((auth, email, password) => {
      if (!email || !password) {
        throw new Error('ERROR')
      }
      Promise.resolve({ user: 'admin' })

    })


    
  }

})

describe('Test para resgistro de usuario', () => {
  const email = 'admin@test.com'
  const password = 'admin123'

  it('la funcion debe llamar a createUserWithEmailAndPassword', async () => {
    await createUser(email, password)
    expect(createUserWithEmailAndPassword).toHaveBeenCalled()
  })
  it('la funcion debe llamar a createUserWithEmailAndPassword con argumentos', async () => {
    await createUser(auth, email, password)
    expect(createUserWithEmailAndPassword).toHaveBeenCalledWith(auth, email, password)
  })
  it('Should throw an error if executed without argument', async () => {
    try {
      await createUser()
    } catch (error) {
      expect(error).toMatch('ERROR')
    }
  })
})

//TEST PARA INICIO DE SESIÓN 

// jest.mock('../src/init.js', () => {
//   return {
//     auth: jest.fn(() => {
//       return { auth: 'TEST' }
//     }),

  

describe('Test para inicio sesion de usuario', () => {
  const email = 'admin@test.com'
  const password = 'admin123'

  it('la funcion llama a signInWithEmailAndPassword', async () => {
    await authSing(email, password)
    expect(signInWithEmailAndPassword).toHaveBeenCalled()
  })
  it('la funcion debe llamar a signInWithEmailAndPassword con argumentos', async () => {
    await authSing(auth, email, password)
    expect(signInWithEmailAndPassword).toHaveBeenCalledWith(auth, email, password)
  })
  it('Should throw an error if executed without argument', async () => {
    try {
      await authSing()
    } catch (error) {
      expect(error).toMatch('ERROR')
    }
  })
})

// // describe ('test para las funciones de firebase.js', () => {
// //   it('debería ser una función', () => {
// //     expect(typeof (createUser)).toBe('function');
// //   });
// //   test('la funcion createUser crea un objeto con los valores de password and email de usuario que se registra', () => {
// //     let email = 'adrianayhanna@gmail.com'
// //     let password = 'hannabanana'
// //     let usuario = createUser (email, password)

// //     expect (usuario).toEqual({email,password})
// //   });

// // });
