import Items from "./Items";

const Home = () => {
  return (
    <div className="home">

      <Items
        image="https://via.placeholder.com/200"
        name="T-Shirt"
        description="Cotton T-Shirt"
        price="20"
      />

      <Items
        image="https://via.placeholder.com/200"
        name="Shoes"
        description="Comfortable running shoes"
        price="50"
      />

      <Items
        image="https://via.placeholder.com/200"
        name="Watch"
        description="Stylish digital watch"
        price="35"
      />

      <Items
        image="https://via.placeholder.com/200"
        name="Bag"
        description="College backpack"
        price="40"
      />

    </div>
  );
};

export default Home;