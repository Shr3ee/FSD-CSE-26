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
        name="Trousers"
        description="Denim Trousers"
        price="400"
      />
      <Items
        image="https://via.placeholder.com/200"
        name="Shoes"
        description="Good Shoes"
        price="300"
      />
      <Items
        image="https://via.placeholder.com/200"
        name="Bag"
        description="Good Bag"
        price="700"
      />
      <Items
        image="https://via.placeholder.com/200"
        name="Waist chain"
        description="Good thing"
        price="600"
      />
      <Items
        image="https://via.placeholder.com/200"
        name="Wallet"
        description="Good wallet"
        price="400"
      />

    </div>
  );
};

export default Home;