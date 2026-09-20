import React from "react"
import { Link } from "react-router-dom"

export default function Rentals() {
    const [rental, setRental] = React.useState(null)

    React.useEffect(() => {
        const savedRental = localStorage.getItem("vanlife-rental")
        if (savedRental) {
            setRental(JSON.parse(savedRental))
        }
    }, [])

    function clearRental() {
        localStorage.removeItem("vanlife-rental")
        setRental(null)
    }

    return (
        <main className="rentals">
            <h1>My rentals</h1>
            <p>See the van you requested to rent.</p>

            {rental ? (
                <div className="rental-card">
                    <img src={rental.imageUrl} alt={rental.name} />
                    <div>
                        <button className={`van-type ${rental.type}`}>{rental.type}</button>
                        <h2>{rental.name}</h2>
                        <p>${rental.price}/day</p>
                        <p>Your rental request is pending confirmation.</p>
                        <button className="clear-rental-button" onClick={clearRental}>Cancel request</button>
                    </div>
                </div>
            ) : (
                <div className="empty-rentals">
                    <h2>No rental yet</h2>
                    <p>Choose a van and click "Rent this van" to see it here.</p>
                    <Link to="/vans">Browse vans</Link>
                </div>
            )}
        </main>
    )
}
