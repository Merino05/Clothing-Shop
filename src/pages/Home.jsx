import CollectionStrip from '../Home components/CollectionStrip'
import Customers from '../Home components/Customers'
import Footer from '../Home components/Footer'
import Header from '../Home components/Header'
import Hero from '../Home components/Hero'
import ProductSection from '../Home components/ProductSection'
import PromoBanner from '../Home components/PromoBanner'
import Categories from '../Home components/Categories'



function Home() {

  return (
   <div>
      
      <Hero />
      <ProductSection  title="محصولات تخفیف دار" subtitle="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از طراحان گرافیک است" />
      <Categories />
      <PromoBanner />
      <ProductSection title="جدیدترین محصولات" subtitle="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از طراحان گرافیک است" />
      <CollectionStrip />
      <Customers />
      
    </div>
  )
}

export default Home