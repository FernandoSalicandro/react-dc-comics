const CtaIconLinks = ({text, img}) => {
    return (
        <li className="flex align-center justify-center g1">
            <img src={img} alt={text} /><a href="">{text}</a>
        </li>
    )
}


export default CtaIconLinks