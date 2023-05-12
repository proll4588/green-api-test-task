import { useEffect } from 'react'
import { useRecoilState } from 'recoil'
import authAtom from '../atoms/auth.atom'
import useHttp from './http.hook'

const useWhatsApp = () => {
    const [auth, setAuth] = useRecoilState(authAtom)
    const { request, error } = useHttp()

    // При наличии ошибок при запросах сбрасываем авторизацию
    useEffect(() => {
        if (error) unAuth()
    }, [error])

    // Обработчик ошибок
    const errorHandler = (error) => {
        // ...
        unAuth()
    }

    // Сброс данных авторизации
    const unAuth = () => {
        setAuth({
            idInstance: null,
            apiTokenInstance: null,
        })

        localStorage.removeItem('AUTH')
    }

    // Запись данных авторизации
    const doAuth = (id, token) => {
        setAuth({
            idInstance: id,
            apiTokenInstance: token,
        })

        localStorage.setItem(
            'AUTH',
            JSON.stringify({
                idInstance: id,
                apiTokenInstance: token,
            })
        )
    }

    // Отправка сообщения
    const sendMessage = async (message, number) => {
        try {
            return await request(
                `https://api.green-api.com/waInstance${auth.idInstance}/SendMessage/${auth.apiTokenInstance}`,
                'POST',
                {
                    chatId: `${number}@c.us`,
                    message: message,
                }
            )
        } catch (error) {
            errorHandler(error)
        }
    }

    // Получение событий
    const receiveNotification = async () => {
        try {
            return await request(
                `https://api.green-api.com/waInstance${auth.idInstance}/ReceiveNotification/${auth.apiTokenInstance}`
            )
        } catch (error) {
            errorHandler(error)
        }
    }

    // Удаление события
    const deleteNotification = async (receiptId) => {
        try {
            return await request(
                `https://api.green-api.com/waInstance${auth.idInstance}/DeleteNotification/${auth.apiTokenInstance}/${receiptId}`,
                'DELETE'
            )
        } catch (error) {
            errorHandler(error)
        }
    }

    return {
        sendMessage,
        receiveNotification,
        deleteNotification,
        doAuth,
        unAuth,
        isAuth: auth.apiTokenInstance && auth.idInstance,
    }
}

export default useWhatsApp
