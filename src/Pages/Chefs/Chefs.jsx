import React from 'react'
import CoverBanner from '../../Components/CoverBanner/CoverBanner'
import Container from '../../Components/Container'
import ChefCard from '../../Components/Chef/ChefCard';
import Image from '../../assets/chef_1.jpg';

const chefData = [
  {
    name: 'Jesmin',
    title: "Senior Chef",
    image: Image,
    fLink:"https://www.facebook.com/",
    tLink:"https://www.facebook.com/",
    lLink:"https://www.facebook.com/",
    bLink:"https://www.facebook.com/",
  },
  {
    name: 'Jesmin',
    title: "Senior Chef",
    image: Image,
    fLink:"https://www.facebook.com/",
    tLink:"https://www.facebook.com/",
    lLink:"https://www.facebook.com/",
    bLink:"https://www.facebook.com/",
  },
  {
    name: 'Jesmin',
    title: "Senior Chef",
    image: Image,
    fLink:"https://www.facebook.com/",
    tLink:"https://www.facebook.com/",
    lLink:"https://www.facebook.com/",
    bLink:"https://www.facebook.com/",
  },
  {
    name: 'Jesmin',
    title: "Senior Chef",
    image: Image,
    fLink:"https://www.facebook.com/",
    tLink:"https://www.facebook.com/",
    lLink:"https://www.facebook.com/",
    bLink:"https://www.facebook.com/",
  },
  {
    name: 'Jesmin',
    title: "Senior Chef",
    image: Image,
    fLink:"https://www.facebook.com/",
    tLink:"https://www.facebook.com/",
    lLink:"https://www.facebook.com/",
    bLink:"https://www.facebook.com/",
  },
  {
    name: 'Jesmin',
    title: "Senior Chef",
    image: Image,
    fLink:"https://www.facebook.com/",
    tLink:"https://www.facebook.com/",
    lLink:"https://www.facebook.com/",
    bLink:"https://www.facebook.com/",
  },
  {
    name: 'Jesmin',
    title: "Senior Chef",
    image: Image,
    fLink:"https://www.facebook.com/",
    tLink:"https://www.facebook.com/",
    lLink:"https://www.facebook.com/",
    bLink:"https://www.facebook.com/",
  },
  {
    name: 'Jesmin',
    title: "Senior Chef",
    image: Image,
    fLink:"https://www.facebook.com/",
    tLink:"https://www.facebook.com/",
    lLink:"https://www.facebook.com/",
    bLink:"https://www.facebook.com/",
  },
  {
    name: 'Jesmin',
    title: "Senior Chef",
    image: Image,
    fLink:"https://www.facebook.com/",
    tLink:"https://www.facebook.com/",
    lLink:"https://www.facebook.com/",
    bLink:"https://www.facebook.com/",
  },
  {
    name: 'Jesmin',
    title: "Senior Chef",
    image: Image,
    fLink:"https://www.facebook.com/",
    tLink:"https://www.facebook.com/",
    lLink:"https://www.facebook.com/",
    bLink:"https://www.facebook.com/",
  },
  {
    name: 'Jesmin',
    title: "Senior Chef",
    image: Image,
    fLink:"https://www.facebook.com/",
    tLink:"https://www.facebook.com/",
    lLink:"https://www.facebook.com/",
    bLink:"https://www.facebook.com/",
  },
  {
    name: 'Jesmin',
    title: "Senior Chef",
    image: Image,
    fLink:"https://www.facebook.com/",
    tLink:"https://www.facebook.com/",
    lLink:"https://www.facebook.com/",
    bLink:"https://www.facebook.com/",
  },
  {
    name: 'Jesmin',
    title: "Senior Chef",
    image: Image,
    fLink:"https://www.facebook.com/",
    tLink:"https://www.facebook.com/",
    lLink:"https://www.facebook.com/",
    bLink:"https://www.facebook.com/",
  },
]

function Chefs() {
  return (
    <div>
      <CoverBanner heading={"Meet Our Expert Chefs"} subHeading={"Chefs"} />
      <Container>
        <div className='py-10 grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-2 gap-5'>
          {
            chefData.map((item, i)=><ChefCard key={i} item={item} />)
          }
        </div>
      </Container>
    </div>
  )
}

export default Chefs