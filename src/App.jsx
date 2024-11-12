import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import Food from "./Food.jsx";
import Card from "./card.jsx";
import Button from "./Button/Button.jsx";
import Student from "./Student.jsx";
import UserGreeting from "./UserGreeting.jsx";
import List from "./List.jsx";
import ProfilePicture from "./ProfilePicture.jsx";
import MyComponent from "./MyComponent.jsx";
import Counter from "./Counter.jsx";
import ColorPicker from "./ColorPicker.jsx";

function App() {
  const fruits = [
    { id: 1, name: "apple", calories: 95 },
    { id: 2, name: "orange", calories: 45 },
    { id: 3, name: "banana", calories: 105 },
    { id: 4, name: "cocount", calories: 159 },
    { id: 5, name: "pineapple", calories: 159 },
  ];

  const vegetables = [
    { id: 6, name: "potatoes", calories: 110 },
    { id: 7, name: "celery", calories: 15 },
    { id: 8, name: "carrots", calories: 25 },
    { id: 9, name: "corn", calories: 63 },
    { id: 10, name: "brocoli", calories: 50 },
  ];

  return (
    <>
      <Header />
      <Food />
      <Card></Card>
      <Card></Card>
      <Button></Button>
      <Student name="Spongebob" age={30} isStudent={true}></Student>
      <Student name="Patrick" age={42} isStudent={false}></Student>
      <Student name="squidward" age={50} isStudent={false}></Student>
      <Student name="Sandy" age={27} isStudent={true}></Student>
      <Student name="Lary"></Student>
      <UserGreeting isLoggedIn={true} username="Shaimaa"></UserGreeting>
      {fruits.length > 0 && <List items={fruits} category="fruits" /> }
      {vegetables.length > 0 ? (
        <List items={vegetables} category="vegetables" />
      ) : null}
      <ProfilePicture/>
      <MyComponent/>
      <Counter/>
      <ColorPicker/>
      <Footer />
    </>
  );
}

export default App;
