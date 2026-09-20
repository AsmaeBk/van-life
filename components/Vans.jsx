import React from "react"
import { Link, useSearchParams } from "react-router-dom"

export default function Vans() {
    const [vans, setVans] = React.useState([])
    const [loading, setLoading] = React.useState(true)
    const [error, setError] = React.useState(null)
    const [searchParams, setSearchParams] = useSearchParams()
    const filter = searchParams.get("type")

    React.useEffect(() => {
        fetch("/api/vans")
            .then(res => {
                if (!res.ok) {
                    throw new Error("Could not load vans")
                }
                return res.json()
            })
            .then(data => setVans(data.vans))
            .catch(err => setError(err.message))
            .finally(() => setLoading(false))
    }, [])

    const displayedVans = filter ? vans.filter(van => van.type === filter) : vans
    const updateFilter = type => setSearchParams(type ? { type } : {})

    return (
        <main>
            <div className="vans-container">
                <h1>Explore our van options</h1>
            </div>
            <div className="vans-filter">
                <button className={filter === "simple" ? "active-filter" : ""} onClick={() => updateFilter("simple")}>Simple</button>
                <button className={filter === "rugged" ? "active-filter" : ""} onClick={() => updateFilter("rugged")}>Rugged</button>
                <button className={filter === "luxury" ? "active-filter" : ""} onClick={() => updateFilter("luxury")}>Luxury</button>
                {filter && <button onClick={() => updateFilter("")}>Clear</button>}
            </div>
            {loading && <p className="status-message">Loading vans...</p>}
            {error && <p className="status-message error-message">{error}</p>}
            <div className="vans-container">
                {!loading && !error && displayedVans.map(van => (
                    <Link to={`/vans/${van.id}`} className="van-card" key={van.id}>
                        <div className="image-container">
                            <img src={van.imageUrl} alt={van.name} />
                        </div>
                        <div className="van-case">
                            <div className="name-type">
                                <h2>{van.name}</h2>
                                <button className={`van-type ${van.type}`}>{van.type}</button>
                            </div>
                            <p className="price">${van.price}<span>/day</span></p>
                        </div>
                    </Link>
                ))}
            </div>
        </main>
    )
}
