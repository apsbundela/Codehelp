import Cards from "./Cards";

function Tours({tours,removeTour}){

    return(
        <div className="container">
            <div>
                <h2>Plan with Ayush</h2>
            </div>

            <div className="tours">
                {
                    tours.map((tour)=>{

                    return <Cards {...tour} removeTour={removeTour}></Cards>
                    })
                }
             </div>
        </div>
    );
}

export default Tours;