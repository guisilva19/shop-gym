import { InfiniteMovingCards } from "../ui/infinite-moving-cards";
import bestSellers from "./assets/best-sellers.jpg";
import apparel from "./assets/apparel.jpg";
import deals from "./assets/deals.jpg";
import homeGymBundles from "./assets/home-gym-bundles.jpg";

export default function Cards() {
  return (
    <div className="w-screen">
      <InfiniteMovingCards
        className="-mt-14"
        items={[
          { image: bestSellers, title: "BEST SELLERS" },
          { image: apparel, title: "APPAREL" },
          { image: deals, title: "DEALS" },
          { image: homeGymBundles, title: "HOME GYM BUNDLES" },
          { image: homeGymBundles, title: "HOME GYM BUNDLES" },
        
        ]}
      />
    </div>
  );
}
