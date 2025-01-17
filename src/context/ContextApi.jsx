import { createContext, useState } from "react";

export const contextCountry = createContext();

export default function ContextApiProvider({ children }) {
  const [testimonials, setTestimonials] = useState([
    {
      quote:
        "The attention to detail and innovative features have completely transformed our workflow. This is exactly what we've been looking for.",
      name: "Brazil",
      designation: "Product Manager at TechFlow",
      src: "https://freedomhouse.org/sites/default/files/styles/768x400_fp_scale_crop_/public/2019-10/Brazil-flags_shutterstock_1091198084.jpg?h=f5a5af4a&itok=8yFxHXVU",
      id: 0,
      cities: [
        {
          id: 0,
          src: "https://keystoneacademic-res.cloudinary.com/image/upload/v1696429984/articles/educationscom/article-open-graph-image-19896.jpg",
          name: "Ironic",
          desc: "etail and innovative features have completely transforme",
        },
        {
          id: 1,
          src: "https://lp-cms-production.imgix.net/2023-08/-CantoiStock-975466162-RFC.jpg",
          name: "Lonely",
          desc: "etail and innovative features have completely transforme",
        },
        {
          id: 2,
          src: "https://travellersworldwide.com/wp-content/uploads/2022/05/shutterstock_1369316819.jpg",
          name: "ironic",
          desc: "etail and innovative features have completely transforme",
        },
      ],
    },
    {
      quote:
        "Implementation was seamless and the results exceeded our expectations. The platform's flexibility is remarkable.",
      name: "Samarkand",
      designation: "CTO at InnovateSphere",
      src: "https://cdn.britannica.com/01/137501-050-B02429E9/madrasa-Shirdar-Rigestan-Square-Samarkand-Uzbekistan.jpg",
      id: 1,
      cities: [
        {
          id: 0,
          src: "https://www.golivegotravel.nl/wp-content/uploads/2016/07/samarkand-registan-afstand-1-2048x1205.jpg",
          name: "Ironic",
          desc: "etail and innovative features have completely transforme",
        },
        {
          id: 1,
          src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTlR2FCaTNyr_Erychqs8yZpBbnvL7vwxWdKOc4lyngcWEiNrOf-lTZ5MJ695dZyuFhO0&usqp=CAU",
          name: "Lonely",
          desc: "etail and innovative features have completely transforme",
        },
        {
          id: 2,
          src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgfb-F4BdrbvqPeVBQ9uReV6kmou7ZvsBEaWo0aXUCWNdKKqORBwppngy58WAmcY_zcT4&usqp=CAU",
          name: "ironic",
          desc: "etail and innovative features have completely transforme",
        },
      ],
    },
    {
      quote:
        "This solution has significantly improved our team's productivity. The intuitive interface makes complex tasks simple.",
      name: "London",
      designation: "Operations Director at CloudScale",
      src: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/London_Skyline_%28125508655%29.jpeg/640px-London_Skyline_%28125508655%29.jpeg",
      id: 2,
      cities: [
        {
          id: 0,
          src: "https://www.telegraph.co.uk/content/dam/Travel/Destinations/Europe/United%20Kingdom/London/london-aerial-thames-guide.jpg?imwidth=680",
          name: "Ironic",
          desc: "etail and innovative features have completely transforme",
        },
        {
          id: 1,
          src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTlR2FCaTNyr_Erychqs8yZpBbnvL7vwxWdKOc4lyngcWEiNrOf-lTZ5MJ695dZyuFhO0&usqp=CAU",
          name: "Lonely",
          desc: "etail and innovative features have completely transforme",
        },
        {
          id: 2,
          src: "https://media.cntraveller.com/photos/66b4dd85072bc99496bf3d1a/1:1/w_3899,h_3899,c_limit/london-GettyImages-1869881584.jpg",
          name: "ironic",
          desc: "etail and innovative features have completely transforme",
        },
      ],
    },
    {
      quote:
        "Outstanding support and robust features. It's rare to find a product that delivers on all its promises.",
      name: "Australia",
      designation: "Engineering Lead at DataPro",
      src: "https://media.cnn.com/api/v1/images/stellar/prod/191011110307-02-australia-beautiful-places.jpg?q=w_1110,c_fill",
      id: 3,
      cities: [
        {
          id: 0,
          src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLLcq_IpHOwiYcuzuK_zP6OGscJQ4Q2BcbuhxRG__N_U3mSNYoCZnur-Ygo_O77bDmTw0&usqp=CAU",
          name: "Ironic",
          desc: "etail and innovative features have completely transforme",
        },
        {
          id: 1,
          src: "https://assets.bwbx.io/images/users/iqjWHBFdfxIU/iZDshdZpXIHI/v0/-1x-1.webp",
          name: "Lonely",
          desc: "etail and innovative features have completely transforme",
        },
        {
          id: 2,
          src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUxDdKNLv1Po9neLbWMlMRGDNHyLE5nMbZPseuagEEbdIPwwI0qtESm4G9OYLN9RCwkwo&usqp=CAU",
          name: "ironic",
          desc: "etail and innovative features have completely transforme",
        },
      ],
    },
    {
      quote:
        "The scalability and performance have been game-changing for our organization. Highly recommend to any growing business.",
      name: "Russion",
      designation: "VP of Technology at FutureNet",
      src: "https://ichef.bbci.co.uk/ace/standard/976/cpsprodpb/11366/production/_87020507_russia_petersburg.jpg",
      id: 4,
      cities: [
        {
          id: 0,
          src: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEj9nAJsC4B20ZXbFwxE_JmhO-S-rwe5lxxbEkvgj6UGntoy3LnQ-PlmKQClLrAWNiPgW49ReHxoLQ9sHIxRlfNG-FR-8P60AvORiD_2VchBOtZ9-UpJ4JF1VqhZdt8FU9k6xwGC9_cXAR8/s640/1+-+Church+on+Spilled+Blood.jpg",
          name: "Ironic",
          desc: "etail and innovative features have completely transforme",
        },
        {
          id: 1,
          src: "https://assets.bwbx.io/images/users/iqjWHBFdfxIU/iZDshdZpXIHI/v0/-1x-1.webp",
          name: "Lonely",
          desc: "etail and innovative features have completely transforme",
        },
        {
          id: 2,
          src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUxDdKNLv1Po9neLbWMlMRGDNHyLE5nMbZPseuagEEbdIPwwI0qtESm4G9OYLN9RCwkwo&usqp=CAU",
          name: "ironic",
          desc: "etail and innovative features have completely transforme",
        },
      ],
    },
  ]);
  return (
    <contextCountry.Provider
      value={{
        testimonials,
      }}
    >
      {children}
    </contextCountry.Provider>
  );
}
