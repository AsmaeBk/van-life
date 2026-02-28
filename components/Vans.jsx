import React from "react"
import "../server"
/**
 * Challenge: Fetch and map over the data to display it on
 * the vans page. For an extra challenge, spend time styling
 * it to look like the Figma design.
 * 
 * Hints:
 * 1. Use `fetch("/api/vans")` to kick off the request to get the
 *    data from our fake Mirage JS server
 * 2. What React hook would you use to fetch data as soon as the
 *    Vans page loads, and only fetch it the one time?
 */

export default function Vans() {
    const [vans, setVans] = React.useState([])
    const [filter, setFilter] = React.useState("")
    const firstRender = React.useRef(true)
    
    React.useEffect(() => {
        fetch("/api/vans")
            .then(res => res.json())
            .then(data => setVans(data.vans))
    }, [])
    
    console.log(filter)
    
    return (
       <>  
           
            <div className="vans-filter">
                <button onClick={() => setFilter("simple")}>Simple</button>
                <button onClick={() => setFilter("rugged")}>Rugged</button>
                <button onClick={() => setFilter("luxury")}>Luxury</button>
                <a href="#" onClick={() => setFilter("")}>Clear filter</a>
            </div>
            <div className="vans-container">
                <h1>Explore our van options</h1>
                {
                    vans.map(
                        (van) => {
                          return(
                        (filter==="" || filter===van.type) &&        <div key={van.id}>
                                    <div className="image-container">
                                        <img src={van.imageUrl}/>
                                    </div>
                                    <div className="van-case">
                                        <div className="name-type">
                                            <h1 style={{fontWeight:"700", fontSize:"15px"}}>{van.name}</h1>
                                            <button>{van.type}</button>
                                        </div>
                                            <h1 className="price" style={{fontWeight:"700", fontSize:"15px"}}
                                            >${van.price}
                                            <span style={{fontWeight:"100", fontSize:"15px"}}>/day</span>
                                        </h1>
                                    </div>
                                </div>
                            )
                        }
                    )
                }
            </div>
         </>
    )
}