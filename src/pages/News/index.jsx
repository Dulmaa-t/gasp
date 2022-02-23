import React, { useEffect } from 'react'

import HeaderMenu from '../../components/special/HeaderMenu'
import Card from '../../components/main/newsCard'
import Footer from '../Home/Footer'

import Button from '../../components/main/Button'
import MoreBtn from '../../components/special/MoreBtn'
import axios from 'axios'

export default function News() {

  /** enw bol card nii meedeelel */
  const newsCards = [
    {
      image: "https://images.pexels.com/photos/127513/pexels-photo-127513.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
      title: "Crystal Card",
      text: "Crystal CardLorem ipsum dolor sit amet, consectetur adiscing elit. Aenean leo urna, tempor non neque vel, ruteum tempus ligula. Maecenas accumsan varius elit sit amet posuere."
    },
    {
      image: "https://images.pexels.com/photos/631954/pexels-photo-631954.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
      title: "Crystal Card",
      text: "Lorem ipsum dolor sit amet, consectetur adiscing elit. Aenean leo urna, tempor non neque vel, ruteum tempus ligula. Maecenas accumsan varius elit sit amet posuere."
    },
    {
      image: "/static/image/9.jpg",
      title: "Crystal Card",
      text: "Lorem ipsum dolor sit amet, consectetur adiscing elit. Aenean leo urna, tempor non neque vel, ruteum tempus ligula. Maecenas accumsan varius elit sit amet posuere."
    },
    {
      image: "/static/image/9.jpg",
      title: "Crystal Card",
      text: "Lorem ipsum dolor sit amet, consectetur adiscing elit. Aenean leo urna, tempor non neque vel, ruteum tempus ligula. Maecenas accumsan varius elit sit amet posuere."
    },
  ]

  const articles = [
    {
      "source": {
        "id": "engadget",
        "name": "Engadget"
      },
      "author": "Mariella Moon",
      "title": "Apple drops mask mandate in most US stores",
      "description": "Most Apple Stores in the US won't require customers to wear masks anymore. The tech giant has dropped its mask mandate and is also preparing for the return of in-person classes at its stores, according to Bloomberg. Apple has reportedly told employees about t…",
      "url": "https://www.engadget.com/apple-drops-mask-mandate-most-us-stores-112525582.html",
      "urlToImage": "https://s.yimg.com/os/creatr-uploaded-images/2022-02/4f3b51f0-948d-11ec-bf7f-1e35d2e5e583",
      "publishedAt": "2022-02-23T11:25:25Z",
      "content": "Most Apple Stores in the US won't require customers to wear masks anymore. The tech giant has dropped its mask mandate and is also preparing for the return of in-person classes at its stores, accordi… [+1428 chars]"
    },
    {
      "source": {
        "id": "engadget",
        "name": "Engadget"
      },
      "author": "Jon Fingas",
      "title": "Apple will give Siri a less gendered voice option in iOS 15.4",
      "description": "Apple's iOS 15.4 will bring more than AirTag anti-stalking messages and direct iPhone contactless payments. Axios has confirmed the latest iOS 15.4 beta includes a less gendered Siri voice option for English speakers. The voice, recorded by a member of the LG…",
      "url": "https://www.engadget.com/apple-siri-less-gendered-voice-140556492.html",
      "urlToImage": "https://s.yimg.com/os/creatr-uploaded-images/2022-02/9da429b0-94ac-11ec-bfc9-5ba282123ed8",
      "publishedAt": "2022-02-23T14:05:56Z",
      "content": "Apple's iOS 15.4 will bring more than AirTag anti-stalking messages and direct iPhone contactless payments. Axios has confirmed the latest iOS 15.4 beta includes a less gendered Siri voice option for… [+936 chars]"
    },
    {
      "source": {
        "id": "engadget",
        "name": "Engadget"
      },
      "author": "Steve Dent",
      "title": "Apple AirTags gain additional anti-stalking messaging in new iOS 15.4 beta",
      "description": "Apple's latest anti-stalking features for AirTags announced earlier this month have started to appear in iOS, MacRumors has reported. The latest beta 4 version of iOS 15.4 now includes a warning shown to users when they first set up an AirTag. \"Using this ite…",
      "url": "https://www.engadget.com/apple-airtags-updated-anti-stalking-features-ios-15-4-beta-4-120506954.html",
      "urlToImage": "https://s.yimg.com/os/creatr-uploaded-images/2022-02/ca82d5a0-9496-11ec-a3ff-ff7415fb976b",
      "publishedAt": "2022-02-23T12:05:06Z",
      "content": "Apple's latest anti-stalking features for AirTags announced earlier this month have started to appear in iOS, MacRumors has reported. The latest beta 4 version of iOS 15.4 now includes a warning show… [+1932 chars]"
    },
    {
      "source": {
        "id": "engadget",
        "name": "Engadget"
      },
      "author": "Steve Dent",
      "title": "Apple’s 1TB 14-inch MacBook Pro falls to a new all-time low",
      "description": "Apple's 2021 MacBook Pros offer incredible performance thanks to the latest M1 Pro and Max chips, while the return of certain key ports makes them more practical than ever. If you've been looking for one but have been put off by the price, the 14-inch 1TB mod…",
      "url": "https://www.engadget.com/apples-1-tb-14-inch-mac-book-pro-falls-to-a-new-all-time-low-101039991.html",
      "urlToImage": "https://s.yimg.com/os/creatr-uploaded-images/2022-02/f38b1670-9486-11ec-aeb2-4c4742d59d8a",
      "publishedAt": "2022-02-23T10:10:39Z",
      "content": "Apple's 2021 MacBook Pros offer incredible performance thanks to the latest M1 Pro and Max chips, while the return of certain key ports makes them more practical than ever. If you've been looking for… [+1654 chars]"
    },
    {
      "source": {
        "id": "engadget",
        "name": "Engadget"
      },
      "author": "Mat Smith",
      "title": "The Morning After: This is the PlayStation VR2 headset",
      "description": "Like the PlayStation 5 before it, Sony has eked out specifications and teasers for its next-generation virtual reality hardware. We saw the controllers a while back (which have now been further refined, and color-swapped to white), but finally the headset its…",
      "url": "https://www.engadget.com/the-morning-after-this-is-the-play-station-vr-2-headset-121634753.html",
      "urlToImage": "https://s.yimg.com/os/creatr-uploaded-images/2022-02/89e58530-93ef-11ec-bd7f-e2bb069e5b36",
      "publishedAt": "2022-02-23T12:16:34Z",
      "content": "Like the PlayStation 5 before it, Sony has eked out specifications and teasers for its next-generation virtual reality hardware. We saw the controllers a while back (which have now been further refin… [+4177 chars]"
    },
  ]

  useEffect(() => 
  {
    axios.get("https://newsapi.org/v2/everything?q=Apple&from=2022-02-23&sortBy=popularity&apiKey=d02d61bb60eb42c7b7dc345b2e357507")
      .then(rsp =>
        {
          console.log(rsp);
        })
    alert("1 udaa")
  }, [])

  return (
    <div>
      <HeaderMenu />
      <div className="news-menu">
        <div className="content-wrapper">
          {
            newsCards.map(
              (element, index) => {
                return (
                  <Card key={index} image={element.image} title={element.title} text={element.text} />
                )
              }
            )
          }
        </div>

        <div className="content-wrapper">
          {
            newsCards.map(
              (element, index) => {
                return (
                  <Card key={index} image={element.image} title={element.title} text={element.text} />
                )
              }
            )
          }
        </div>

        <div className="content-wrapper">
          {
            newsCards.map(
              (element, index) => {
                return (
                  <Card key={index} image={element.image} title={element.title} text={element.text} />
                )
              }
            )
          }
        </div>

        <div className="content-wrapper">
          {
            newsCards.map(
              (element, index) => {
                return (
                  <Card key={index} image={element.image} title={element.title} text={element.text} />
                )
              }
            )
          }
        </div>
      </div>
      <MoreBtn />
      <Footer />
    </div>
  )
}
