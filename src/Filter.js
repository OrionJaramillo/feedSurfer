import{ useEffect } from "react";

function Filter({setActiveButton, activeButton, setFiltered, photos}){

    useEffect(()=> {
        if(activeButton === 'all'){
            setFiltered(photos);
            return;
        }
        if (activeButton === 0){
            const filtered = photos.filter((photo)=>{
                return photo.likes >= 0 && photo.likes < 500;
            });
            setFiltered(filtered)
        }
        if (activeButton === 500){
            const filtered = photos.filter((photo)=>{
                return photo.likes >= 500 && photo.likes < 1000;
            });
            setFiltered(filtered)
        }
        if (activeButton === 1000){
            const filtered = photos.filter((photo)=>{
                return photo.likes >= 1000;
            });
            setFiltered(filtered)
        }
    },[activeButton])
    
    return(
        <div className="filter-container">
            <button className={activeButton === "all" ? "active" : ""} onClick={()=> setActiveButton('all')}>All Photos</button>
            <button className={activeButton === 0 ? "active" : ""} onClick={()=> setActiveButton(0)}>0-500 Likes</button>
            <button className={activeButton === 500 ? "active" : ""} onClick={()=> setActiveButton(500)}>500-999 Likes</button>
            <button className={activeButton === 1000 ? "active" : ""} onClick={()=> setActiveButton(1000)}>1000+ Likes</button>

        </div>
    )
}
export default Filter;