/* eslint-disable no-undef */
// importamos la funcion que vamos a testear
// import { TestWatcher } from 'jest';
// import { async } from 'regenerator-runtime';
// import { createUser } from '../src/lib/firebase.js';
import { createUser, auth, authSing, authGoogle } from '../src/lib/firebase.js';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup,GoogleAuthProvider } from '../src/init.js';

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

    }),

    signInWithPopup: jest.fn((auth, provider) => {
      if (!auth || !provider) {
        throw new Error('ERROR')
      }
      Promise.resolve({ user: 'admin' })
    }),
  }
})

//TEST PARA FUNCION REGISTRAR USUARIO
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

//TEST PARA FUNCION DE INICIO DE SESIÓN   
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

//TEST PARA FUNCION INICIO DE SESION CON GOOGLE 
describe('Test para inicio sesion de usuario con google', () => {
  const provider = GoogleAuthProvider;

  it('la funcion llama a signInWithPopup', async () => {
    await authGoogle(auth, provider)
    expect(signInWithPopup).toHaveBeenCalled()
  })
  it('la funcion debe llamar a signInWithPopup con argumentos', async () => {
    await authGoogle(auth, provider)
    expect(signInWithPopup).toHaveBeenCalledWith(auth, provider)
  })
  it('Should throw an error if executed without argument', async () => {
    try {
      await authGoogle()
    } catch (error) {
      expect(error).toMatch('ERROR')
    }
  })
})