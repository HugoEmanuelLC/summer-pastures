import { useNavigate } from 'react-router-dom'

export default function NotFoundPage() {
    const navigate = useNavigate()
    return (
        <div>
            <h1>404</h1>
            <p>Page not found</p>
            <button onClick={() => navigate(-1, {replace: true})}>retour</button>
        </div>
    )
}