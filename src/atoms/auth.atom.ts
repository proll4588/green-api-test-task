import { atom } from 'recoil'
import { IAuth } from '../interfaces/auth.interface'

// Получаем данные авторизации из кэша браузера
const cashe = JSON.parse(localStorage.getItem('AUTH'))

// Данные авторизации
const authAtom = atom<IAuth>({
    key: 'authAtomKey',
    default: cashe || {
        idInstance: null,
        apiTokenInstance: null,
    },
})

export default authAtom
