import React, { FC, useState } from 'react'
import styles from './NumberForm.module.scss'
import NumberFormProps from './NumberForm.props'
import { NumberFormatter } from 'react-number-formatter'

const NumberForm: FC<NumberFormProps> = ({ onEnter }) => {
    /* Данные формы */
    const [number, setNumber] = useState('')
    const [code, setCode] = useState('+7')

    // Обработчик нажатия кнопки
    const btnHandler = () => {
        if (number.length === 10) {
            onEnter && onEnter(Number(code.substring(1) + number))
        }
    }

    return (
        <div className={styles.NumberForm}>
            <div className={styles.NumberForm__container}>
                <h3 className={styles.NumberForm__title}>
                    Введите номер телефона
                </h3>

                <NumberFormatter
                    value={number}
                    defaultCountry='RUS'
                    getCountryCode={setCode}
                    getValue={(n) => setNumber(n)}
                />
                <button onClick={btnHandler}>Написать</button>
            </div>
        </div>
    )
}

export default NumberForm
