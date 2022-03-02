import { motion } from 'framer-motion';
function Photo({photo}){
    return(
        <motion.div 
            layout
            animate={{ opacity: 1 }} 
            initial={{ opactiy: 0 }}
            exit={{ opacity: 0 }}
        >
            <div>
            <img src={photo.urls.small} alt={photo.alt_description} />
            </div>
            <div className="user-info">
                <div className="user">
                    <div className="profile-photo-container">
                    <a href={photo.user.links.html} target="_blank"><img src={photo.user.profile_image.medium} alt="" /></a>
                    </div>
                    <div className="user-name-contianer">
                        <h2>{photo.user.first_name.length <= 17 ? photo.user.first_name : photo.user.first_name.slice(0,17) + "..."}
                        </h2>
                        <p>@<a href={photo.user.links.html} target="_blank">{photo.user.username}</a></p>
                    </div>
                </div>
                <div className="photo-stats">
                    <div className="location">
                        <p>{photo.tags[2].title} <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-geo-alt-fill" viewBox="0 0 16 16">
  <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"/></svg></p>
                    </div>
                    <div className="likes">
                    <p >{photo.likes} <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-heart-fill" viewBox="0 0 16 16">
  <path fillRule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"/>
</svg></p>
                    </div> 
                </div>
            </div>
        </motion.div>
    )
};

export default Photo;