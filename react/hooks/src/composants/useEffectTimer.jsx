import { useEffect, useState } from 'react'

const convertSecondsToTime = (seconds) => {
    const hours = Math.floor(seconds / 3600)
    const minutes = Math.floor((seconds % 3600) / 60)
    const remainingSeconds = seconds % 60

    const addHeure = (hours > 0) ? `${hours}:` : ''
    const addZeroMinutes = (minutes < 10) ? `0${minutes}` : minutes
    const addZeroSeconds = (remainingSeconds < 10) ? `0${remainingSeconds}` : remainingSeconds

    return `${addHeure}${addZeroMinutes}:${addZeroSeconds}`
}

export default function UseEffectHour(props) {

    const [seconds, setSeconds] = useState(props.timeTampon)
    const [showTimer, setShowTimer] = useState(false)

    const handleShowTimer = () => {
        setShowTimer(!showTimer)
    }

    
    useEffect(() => {
        // useEffect EST APPLE A CHAQUE FOIS QUE LE COMPOSANT EST MONTÉ.
        // AUSSI A CHAQUE MISE A JOUR DU COMPOSANT (si pas de tableau de dépendances).

        if (showTimer) {
            const interval = setInterval(() => {
                setSeconds((seconds) => seconds + 1)
            }, 1000)
            return () => clearInterval(interval) // NETTOYAGE DE L'INTERVAL, car sinon il continue de tourner.
        }else{
            props.setTimeTampon(seconds)
        }

    },[showTimer]) // TABLEAU DE DEPENDANCES.
    // SI LE TABLEAU DE DEPENDANCES EST VIDE, useEffect EST APPELE UNE SEULE FOIS, SEULEMENT AU MONTAGE DU COMPOSANT.
    // du coup il ignore les mises à jour du composant (des useStates).
    // SI LE TABLEAU DE DEPENDANCES EST REMPLI, useEffect EST APPELE A CHAQUE MISE A JOUR DU COMPOSANT (useState).


    return (
        <div>
            <button type='button' onClick={handleShowTimer}>
                {showTimer ? 'STOP' : 'START'}
            </button>
            <p>Temps de lecture: { convertSecondsToTime(seconds) }</p>
        </div>
    )
}