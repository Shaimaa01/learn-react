import PropTypes from "prop-types";

function List(props) {
  // fruits.sort((a,b)=> a.name.localeCompare(b.name)); // AllPHABETCAL
  // fruits.sort((a,b)=> b.name.localeCompare(a.name)); // Reverse AllPHABETCAL
  //  fruits.sort((a,b)=> a.calories - b.calories) // NUMRIc
  //  fruits.sort((a,b)=> b.calories - a.calories) // Reverse NuMRIC

  // const lowCalFruits = fruits.filter(fruit => fruit.calories < 100);
  // const highCalFruits = fruits.filter(fruit => fruit.calories >= 100);

  const category = props.category;
  const itemList = props.items;

  const listItems = itemList.map((itemList) => (
    <li key={itemList.id}>
      {itemList.name}: &nbsp; <b>{itemList.calories}</b>
    </li>
  ));
  return (
    <>
      <h3 className="list-category">{category}</h3>
      <ol className="list-items">{listItems} </ol>
    </>
  );
}

List.propTypes = {
  category: PropTypes.string,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      //shape: Describes the structure of each item inside that array.
      id: PropTypes.number,
      name: PropTypes.string,
      calories: PropTypes.number,
    })
  ),
};

List.defaultProps = {
  category: "category",
  items: [],
};

export default List;
