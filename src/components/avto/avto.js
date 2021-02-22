import "./avto.scss";
import Slider from "../slider/slider";
import AvtoDescription from "../avto-description/avto-description";
import TabBarItem from "../tab-bar-item/tab-bar-item";
import TabBar from "../tab-bar/tab-bar";
import {Tab, CONTACTS} from "../../const";
import AvtoFeatures from "../avto-features/avto-features";
import Reviews from "../reviews/reviews";
import Contacts from "../contacts/contacts";


const Avto = ({car}) => {
  const {
    slides,
    name,
    params,
    price,
    features,
    reviews
  } = car;
  return (
    <section className="avto">
      <div className="avto__top">
        <Slider slides={slides}/>
        <AvtoDescription
          name={name}
          params={params}
          price={price}
        />
      </div>
      <TabBar>
        <TabBarItem label={Tab.FEATURES}>
          <AvtoFeatures
            features={features}
          />
        </TabBarItem>
        <TabBarItem label={Tab.REVIEWS}>
          <Reviews
            reviews={reviews}
          />
        </TabBarItem>
        <TabBarItem label={Tab.CONTACTS}>
          <Contacts
            contacts={CONTACTS}
          />
        </TabBarItem>
      </TabBar>
    </section>

  )
}

export default Avto;
