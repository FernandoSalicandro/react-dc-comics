const AppCard = ({ thumb, title }) => {
return ( <>
        <div className="thumb"><img src={thumb} alt={title} /></div>

        <p className="comic-title">{title}</p>
    </>)
   


}

export default AppCard