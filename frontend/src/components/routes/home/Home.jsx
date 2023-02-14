import Hero from "./hero/Hero.component";
import Popular from "./popular/Popular.component";
import TopPicks from "./topPicks/TopPicks.component";
import NewArrivals from "./newArrivals/NewArrivals.component";
import Shop from "./shop/Shop.component";
import FurnitureList from "../list/List.component";
import Blog from "./blog/Blog.component";
import Instagram from "./instagram/Instagram.component";

function Home() {
  return (
    <>
      <Hero />
      <Popular />
      <TopPicks />
      <NewArrivals />
      <Shop />
      <FurnitureList />
      <Blog />
      <Instagram />
    </>
  );
}

export default Home;
