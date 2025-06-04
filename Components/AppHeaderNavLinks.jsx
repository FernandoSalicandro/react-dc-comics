const HeaderLink = ({title, state,url}) => {
    return (
            <li><a className={state} href={url}>{title}</a></li>
     
    )
}

export default HeaderLink