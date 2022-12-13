import './App.css';



function App() {

  // Check if a given character is alphabetic or not
  function isLetter(character) {
    return character.length === 1 && character.match(/[a-z]/i);
  }



  // Return TRUE if a given character is uppercase
  function isUpperCase(character) {
    return character === String(character).toUpperCase()
  }



  function Cipher(character, key) {
    if (!isLetter(character)) {
      return character;
    }

    // if charater is Uppercase then ASCII value = 65, if not then value = 97
    let offset = (isUpperCase(character) ? 65 : 97);

    return String.fromCharCode(((character.charCodeAt(0) - offset) + key) % 26 + offset);
  }




  function Encipher(value, key) {

    let output = "";
    let encodedString = window.btoa(window.btoa(window.btoa(value)));

    for (var i = 0; i < encodedString.length; i++) {
      output = output + Cipher(encodedString.charAt(i), key);
    }

    return output;
  }


  
  return (
    <div className="App">
      {Encipher("rodis123", 3)}
    </div>
  );
}

export default App;
