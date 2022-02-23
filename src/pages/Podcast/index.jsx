import React from 'react'
import Footer from '../Home/Footer'
import HeaderMenu from '../../components/special/HeaderMenu'
import Card from '../../components/main/podcastCard'
import Button from '../../components/main/Button'
import MoreBtn from '../../components/special/MoreBtn'

export default function podcastCard() {
  const podcastCard = [
    {
      image: "https://picsum.photos/1000/1000",
      title: "Podcast Title",
      datetime: "Mon, May 25th 2020",
      clock: "55 mins",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, fugiat asperiores inventore beatae accusamus odit minima enim, commodi quia, doloribus eius! Ducimus nemo accusantium maiores velit corrupti tempora reiciendis molestiae repellat vero. Eveniet ipsam adipisci illo iusto quibusdam, sunt neque nulla unde ipsum dolores nobis enim quidem excepturi, illum quos!"
    },
    {
      image: "https://picsum.photos/1000/1000",
      title: "Podcast Title",
      datetime: "Mon, May 25th 2020",
      clock: "55 mins",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, fugiat asperiores inventore beatae accusamus odit minima enim, commodi quia, doloribus eius! Ducimus nemo accusantium maiores velit corrupti tempora reiciendis molestiae repellat vero. Eveniet ipsam adipisci illo iusto quibusdam, sunt neque nulla unde ipsum dolores nobis enim quidem excepturi, illum quos!"
    },
    {
      image: "https://picsum.photos/1000/1000",
      title: "Podcast Title",
      datetime: "Mon, May 25th 2020",
      clock: "55 mins",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, fugiat asperiores inventore beatae accusamus odit minima enim, commodi quia, doloribus eius! Ducimus nemo accusantium maiores velit corrupti tempora reiciendis molestiae repellat vero. Eveniet ipsam adipisci illo iusto quibusdam, sunt neque nulla unde ipsum dolores nobis enim quidem excepturi, illum quos!"
    },
    {
      image: "https://picsum.photos/1000/1000",
      title: "Podcast Title",
      datetime: "Mon, May 25th 2020",
      clock: "55 mins",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, fugiat asperiores inventore beatae accusamus odit minima enim, commodi quia, doloribus eius! Ducimus nemo accusantium maiores velit corrupti tempora reiciendis molestiae repellat vero. Eveniet ipsam adipisci illo iusto quibusdam, sunt neque nulla unde ipsum dolores nobis enim quidem excepturi, illum quos!"
    },
    {
      image: "https://picsum.photos/1000/1000",
      title: "Podcast Title",
      datetime: "Mon, May 25th 2020",
      clock: "55 mins",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, fugiat asperiores inventore beatae accusamus odit minima enim, commodi quia, doloribus eius! Ducimus nemo accusantium maiores velit corrupti tempora reiciendis molestiae repellat vero. Eveniet ipsam adipisci illo iusto quibusdam, sunt neque nulla unde ipsum dolores nobis enim quidem excepturi, illum quos!"
    },
    {
      image: "https://picsum.photos/1000/1000",
      title: "Podcast Title",
      datetime: "Mon, May 25th 2020",
      clock: "55 mins",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, fugiat asperiores inventore beatae accusamus odit minima enim, commodi quia, doloribus eius! Ducimus nemo accusantium maiores velit corrupti tempora reiciendis molestiae repellat vero. Eveniet ipsam adipisci illo iusto quibusdam, sunt neque nulla unde ipsum dolores nobis enim quidem excepturi, illum quos!"
    },
    {
      image: "https://picsum.photos/1000/1000",
      title: "Podcast Title",
      datetime: "Mon, May 25th 2020",
      clock: "55 mins",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, fugiat asperiores inventore beatae accusamus odit minima enim, commodi quia, doloribus eius! Ducimus nemo accusantium maiores velit corrupti tempora reiciendis molestiae repellat vero. Eveniet ipsam adipisci illo iusto quibusdam, sunt neque nulla unde ipsum dolores nobis enim quidem excepturi, illum quos!"
    },
    {
      image: "https://picsum.photos/1000/1000",
      title: "Podcast Title",
      datetime: "Mon, May 25th 2020",
      clock: "55 mins",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, fugiat asperiores inventore beatae accusamus odit minima enim, commodi quia, doloribus eius! Ducimus nemo accusantium maiores velit corrupti tempora reiciendis molestiae repellat vero. Eveniet ipsam adipisci illo iusto quibusdam, sunt neque nulla unde ipsum dolores nobis enim quidem excepturi, illum quos!"
    },
    {
      image: "https://picsum.photos/1000/1000",
      title: "Podcast Title",
      datetime: "Mon, May 25th 2020",
      clock: "55 mins",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, fugiat asperiores inventore beatae accusamus odit minima enim, commodi quia, doloribus eius! Ducimus nemo accusantium maiores velit corrupti tempora reiciendis molestiae repellat vero. Eveniet ipsam adipisci illo iusto quibusdam, sunt neque nulla unde ipsum dolores nobis enim quidem excepturi, illum quos!"
    },
    {
      image: "https://picsum.photos/1000/1000",
      title: "Podcast Title",
      datetime: "Mon, May 25th 2020",
      clock: "55 mins",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, fugiat asperiores inventore beatae accusamus odit minima enim, commodi quia, doloribus eius! Ducimus nemo accusantium maiores velit corrupti tempora reiciendis molestiae repellat vero. Eveniet ipsam adipisci illo iusto quibusdam, sunt neque nulla unde ipsum dolores nobis enim quidem excepturi, illum quos!"
    },
    {
      image: "https://picsum.photos/1000/1000",
      title: "Podcast Title",
      datetime: "Mon, May 25th 2020",
      clock: "55 mins",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, fugiat asperiores inventore beatae accusamus odit minima enim, commodi quia, doloribus eius! Ducimus nemo accusantium maiores velit corrupti tempora reiciendis molestiae repellat vero. Eveniet ipsam adipisci illo iusto quibusdam, sunt neque nulla unde ipsum dolores nobis enim quidem excepturi, illum quos!"
    },
    {
      image: "https://picsum.photos/1000/1000",
      title: "Podcast Title",
      datetime: "Mon, May 25th 2020",
      clock: "55 mins",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, fugiat asperiores inventore beatae accusamus odit minima enim, commodi quia, doloribus eius! Ducimus nemo accusantium maiores velit corrupti tempora reiciendis molestiae repellat vero. Eveniet ipsam adipisci illo iusto quibusdam, sunt neque nulla unde ipsum dolores nobis enim quidem excepturi, illum quos!"
    },
    {
      image: "https://picsum.photos/1000/1000",
      title: "Podcast Title",
      datetime: "Mon, May 25th 2020",
      clock: "55 mins",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, fugiat asperiores inventore beatae accusamus odit minima enim, commodi quia, doloribus eius! Ducimus nemo accusantium maiores velit corrupti tempora reiciendis molestiae repellat vero. Eveniet ipsam adipisci illo iusto quibusdam, sunt neque nulla unde ipsum dolores nobis enim quidem excepturi, illum quos!"
    },
    {
      image: "https://picsum.photos/1000/1000",
      title: "Podcast Title",
      datetime: "Mon, May 25th 2020",
      clock: "55 mins",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, fugiat asperiores inventore beatae accusamus odit minima enim, commodi quia, doloribus eius! Ducimus nemo accusantium maiores velit corrupti tempora reiciendis molestiae repellat vero. Eveniet ipsam adipisci illo iusto quibusdam, sunt neque nulla unde ipsum dolores nobis enim quidem excepturi, illum quos!"
    },
    {
      image: "https://picsum.photos/1000/1000",
      title: "Podcast Title",
      datetime: "Mon, May 25th 2020",
      clock: "55 mins",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, fugiat asperiores inventore beatae accusamus odit minima enim, commodi quia, doloribus eius! Ducimus nemo accusantium maiores velit corrupti tempora reiciendis molestiae repellat vero. Eveniet ipsam adipisci illo iusto quibusdam, sunt neque nulla unde ipsum dolores nobis enim quidem excepturi, illum quos!"
    },
    {
      image: "https://picsum.photos/1000/1000",
      title: "Podcast Title",
      datetime: "Mon, May 25th 2020",
      clock: "55 mins",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, fugiat asperiores inventore beatae accusamus odit minima enim, commodi quia, doloribus eius! Ducimus nemo accusantium maiores velit corrupti tempora reiciendis molestiae repellat vero. Eveniet ipsam adipisci illo iusto quibusdam, sunt neque nulla unde ipsum dolores nobis enim quidem excepturi, illum quos!"
    },
  ]

  return (
    <div>
      <HeaderMenu />
        <section class="dark">
          <div class="container py-4">
            {
              podcastCard.map(
                (element, index) => {
                  return (
                    <Card image={element.image} title={element.title} datetime={element.datetime} clock={element.clock} text={element.text} />
                  )
                }
              )
            }
          </div>

        </section>
      <MoreBtn />
      <Footer />
    </div>
  )
}