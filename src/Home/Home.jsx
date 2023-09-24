import React from 'react'
import Carousel from '../Body/Carousel/Carousel/Carousel';
import Profile from '../Body/Profile/Profile';
import Reviews from '../Body/Reviews/Reviews';
import AppFaq from '../Body/Appointment&Faq/AppFaq';
import HomepageBlog from '../Body/Blog/HomepageBlog';
import Host from '../Body/Host/Host';
import Gallery from '../Body/Gallery/Gallery';
import WhyChooseUs from '../Body/WhyChooseUS/WhyChooseUs';
import Display from '../Body/Display';

const Home = () => {
  return (
    <div>
      <Carousel />
      <Display>
        <WhyChooseUs />
      </Display>
      <Profile />
      <Host />
      <Gallery />
      <Reviews />
      
      <HomepageBlog />
      <AppFaq />
    </div>
  );
}

export default Home