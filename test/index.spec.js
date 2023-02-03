/* eslint-disable no-undef */
// importamos la funcion que vamos a testear
// import { TestWatcher } from 'jest';
// import { async } from 'regenerator-runtime';
// import { createUser } from '../src/lib/firebase.js';
import { createUser, createUserWithEmailAndPassword, authSing, signInWithEmailAndPassword } from '../src/lib/firebase.js';

//TEST PARA CREAR/REGISTRAR USUARIO
jest.mock('../src/lib/firebase.js', () => {
  return {
    createUser: jest.fn(() => {
      return { createUser: 'TEST' }
    }),

    createUserWithEmailAndPassword: jest.fn((email, password) => {
      if (!email || !password) {
        throw new Error('ERROR')
      }
      Promise.resolve({ user: 'admin' })

    })
  }

})

describe('Test para resgistro de usuario', () => {
  const email = 'admin@test.com'
  const pass = 'admin123'

  it('puede registrar un usuario createUserWithEmailAndPassword', async () => {
    await createUser(email, pass)
    expect(createUserWithEmailAndPassword).toHaveBeenCalled()
  })
  it('puede registrar un usuario createUserWithEmailAndPassword con argumentos', async () => {
    await createUser(email, pass)
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

jest.mock('../lib/firebase.js', () => {
  return {
    authSing: jest.fn(() => {
      return { authSing: 'TEST' }
    }),

    signInWithEmailAndPassword: jest.fn((email, password) => {
      if (!email || !password) {
        throw new Error('ERROR')
      }
      Promise.resolve({ user: 'admin' })

    })
  }

})

describe('Test para inicio sesion de usuario', () => {
  const email = 'admin@test.com'
  const pass = 'admin123'

  it('puede registrar un usuario signInWithEmailAndPassword', async () => {
    await authSing(email, pass)
    expect(signInWithEmailAndPassword).toHaveBeenCalled()
  })
  it('puede registrar un usuario signInWithEmailAndPassword con argumentos', async () => {
    await authSing(email, pass)
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

// describe ('test para las funciones de firebase.js', () => {
//   it('debería ser una función', () => {
//     expect(typeof (createUser)).toBe('function');
//   });
//   test('la funcion createUser crea un objeto con los valores de password and email de usuario que se registra', () => {
//     let email = 'adrianayhanna@gmail.com'
//     let password = 'hannabanana'
//     let usuario = createUser (email, password)

//     expect (usuario).toEqual({email,password})
//   });

// });
