// click event => An Interaction When a user clicks on a specific element.
//                  we can respond to clicks by passing
//                  a callback to the onclick event handler.

import styles from "./Button.module.css";

function Button() {
  const handleClick = () => console.log("OUCH!");

  const handleClick2 = (name) => console.log(`${name} stop Clicking me 😢`);

  let count = 0;

  const handleClick3 = (name) => {
    if (count < 3) {
      count++;
      console.log(`${name} you clicked me ${count} times`);
    } else {
      console.log(`${name} I Am Done Stop Clicking me 🙄`);
    }
  };

  const handleClick4 = (e) => (e.target.textContent = "OUCH! 🤕");

  return (
    <>
      <button className={styles.button} onClick={handleClick}>
        click me1 😒
      </button>

      <button className={styles.button} onClick={() => handleClick2("shaimaa")}>
        click me2 🤨
      </button>

      <button className={styles.button} onClick={() => handleClick3("shaimaa")}>
        click me3 🙄
      </button>

      <button className={styles.button} onDoubleClick={(e) => handleClick4(e)}>
        click me4 🥱
      </button>
    </>
  );
}
export default Button;
