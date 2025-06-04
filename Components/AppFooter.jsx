import CtaIconLinks from "./CtaIconLinks"
import FooterColumn from "./FooterColumn"

const footerLinks = [
  {
    columnContent: [
      {
        title: 'DC COMICS',
        links: [
          'Characters',
          'Comics',
          'Movies',
          'TV',
          'Games',
          'Videos',
          'News'
        ]
      },
      {
        title: 'SHOP',
        links: [
          'Shop DC',
          'Shop DC Collectibles'
        ]
      }
    ]
  },
  {
    columnContent: [
      {
        title: 'DC',
        links: [
          'Terms Of Use',
          'Privacy policy (New)',
          'Ad Choices',
          'Advertising',
          'Jobs',
          'Subscriptions',
          'Talent Workshops',
          'CPSC Certificates',
          'Ratings',
          'Shop Help',
          'Contact Us'
        ]
      }
    ]
  },
  {
    columnContent: [
      {
        title: 'SITES',
        links: [
          'DC',
          'MAD Magazine',
          'DC Kids',
          'DC Universe',
          'DC Power Visa'
        ]
      }
    ]
  }
];

const ctaIconLink = [
    {
        img: 'buy-comics-digital-comics.png',
        text: 'DIGITAL COMICS'
    },
    {
        img: 'buy-comics-merchandise.png',
        text: 'DC MERCHANDISE'
    },
    {
        img: 'buy-comics-subscriptions.png',
        text: 'SUBSCRIPTION'
    },
    {
        img: 'buy-comics-shop-locator.png',
        text: 'COMIC SHOP LOCATOR'
    },
    {
        img: 'buy-dc-power-visa.svg',
        text: 'DC POWER VISA'
    }
];

const printCtaLinks = () => {
    return ctaIconLink.map((curLink, index) => (
        <CtaIconLinks
            key={index}
            text={curLink.text}
            img={curLink.img}
        />
    ))
}

const AppFooter = () => {
    return (
        <>
            <div className="cta">
                <div className="container">
                    <ul className="flex g2 justify-between">
                        {printCtaLinks()}
                    </ul>
                </div>
            </div>

            <div className="footerBg">
                <div className="footerLogo">
                    <div className="container flex">
                        {footerLinks.map((column, index) => (
                            <FooterColumn 
                                key={index}
                                columnContent={column.columnContent}
                            />
                        ))}
                    </div>
                </div>
            </div>

            <div className="footerBottom flex align-center">
                <div className="container flex justify-between">
                    <div className=" primary-left"><a href="">SIGN-UP NOW</a></div>


               <div className="rightBottom flex justify-center align-center g1">
                 <a className="primary" href="">FOLLOW US</a>

                <a href=""><img src="footer-facebook.png" alt="" /></a>
                <a href=""><img src="footer-periscope.png" alt="" /></a>
                <a href=""><img src="footer-pinterest.png" alt="" /></a>
                <a href=""><img src="footer-twitter.png" alt="" /></a>
                <a href=""><img src="footer-youtube.png" alt="" /></a>
               </div>
                </div>
                
            </div>
        </>
    )
}

export default AppFooter