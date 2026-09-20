import React from "react"
import { Link, useParams } from "react-router-dom"

export default function VanDetail() {
    const [van, setVan] = React.useState(null)
    const [loading, setLoading] = React.useState(true)
    const [error, setError] = React.useState(null)
    const [rented, setRented] = React.useState(false)
    const { id } = useParams()

    React.useEffect(() => {
        fetch(`/api/vans/${id}`)
            .then(res => {
                if (!res.ok) {
                    throw new Error("Could not load this van")
                }
                return res.json()
            })
            .then(data => setVan(data.vans))
            .catch(err => setError(err.message))
            .finally(() => setLoading(false))
    }, [id])

    if (loading) {
        return <main className="van-detail">Loading...</main>
    }

    if (error) {
        return <main className="van-detail error-message">{error}</main>
    }

    function rentVan() {
        localStorage.setItem("vanlife-rental", JSON.stringify(van))
        setRented(true)
    }

    return (
        <main className="van-detail">
            <Link to="/vans" className="back-link">&larr; Back to all vans</Link>
            <img src={van.imageUrl} alt={van.name} />
            <button className={`van-type ${van.type}`}>{van.type}</button>
            <h1>{van.name}</h1>
            <p className="detail-price">${van.price}<span>/day</span></p>
            <p>{van.description}</p>
            <button className="rent-button" onClick={rentVan}>
                Rent this van
            </button>
            {rented && (
                <p className="success-message">
                    Great choice! Your rental request for {van.name} has been received. <Link to="/rentals">View my rentals</Link>
                </p>
            )}
        </main>
    )
}
