import React from "react"
import { Link } from "react-router-dom"

export default function Rentals() {
    const [rentals, setRentals] = React.useState([])

    React.useEffect(() => {
        const savedRentals = JSON.parse(localStorage.getItem("vanlife-rentals")) || []
        setRentals(savedRentals)
    }, [])

    function cancelRental(id) {
        const updatedRentals = rentals.filter(rental => rental.id !== id)
        localStorage.setItem("vanlife-rentals", JSON.stringify(updatedRentals))
        setRentals(updatedRentals)
    }

    return (
        <main className="rentals">
            <h1>My rentals</h1>
            <p>See the van you requested to rent.</p>

            {rentals.length > 0 ? (
                <div className="rentals-list">
                    {rentals.map(rental => (
                        <div className="rental-card" key={rental.id}>
                            <img src={rental.imageUrl} alt={rental.name} />
                            <div>
                                <button className={`van-type ${rental.type}`}>{rental.type}</button>
                                <h2>{rental.name}</h2>
                                <p>${rental.price}/day</p>
                                <p>Your rental request is pending confirmation.</p>
                                <button className="clear-rental-button" onClick={() => cancelRental(rental.id)}>Cancel request</button>
                            </div>
                        </div>
                    ))}
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
