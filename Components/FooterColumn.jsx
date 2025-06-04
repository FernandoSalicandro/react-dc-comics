const FooterColumn = ({ columnContent }) => {
    return (
        <div className="navCol g1 pt2">
            {columnContent.map((section, index) => (
                <div key={index}>
                    <h3 className="">{section.title}</h3>
                    <ul className="flex column">
                        {section.links.map((link, linkIndex) => (
                            <li key={linkIndex}>{link}</li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
    )
}

export default FooterColumn;