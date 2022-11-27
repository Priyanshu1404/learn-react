
import { useState } from 'react';
import './App.css';

function App() {

  /** State */
  const [emotiType, setEmotiType] = useState('');

  /** onbuttonclick event function */
  const onClickHandlerXyzWithParam = function(text1) {
    setEmotiType(text1)
  }

  const onInputEmojiChange = function(e) {
    const val = e.target.value
    setEmotiType(val)
  }

  /** will render on screen to user */
  return (
    <div className="App">
      <h3>Emoji Play</h3>
      <div>

      {
        (() => {
            if (emotiType == 'Like')
                return <img src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/apple/325/thumbs-up_1f44d.png" height="200px" width="200px"/>
            else if (emotiType == 'Smile')
                return <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkpcRgFUqmy1E5x14ukeNznpaeT6SVDAmHIF2B_G6C&s" height="200px" width="200px"/>
            else if (emotiType == 'Heart')
              return <img src="https://toppng.com/uploads/preview/heart-emoji-11549911583t6kulc2slx.png" height="200px" width="200px"/>
        })()
      }

      </div>
      <br/>

      {/* tujtju */}
      
      <input type="text" onChange={onInputEmojiChange}  id="emotitxt" placeholder="enter the emoji"></input>
      <br/>

      <Button txt = "Like" clr="blue" onClickAction={onClickHandlerXyzWithParam}/>
      <Button txt = "Smile" clr="yellow" onClickAction={onClickHandlerXyzWithParam}/>
      <Button txt = "Heart" clr="red" onClickAction={onClickHandlerXyzWithParam}/>
    </div>
  );
}


function Button(props) {

  return(
    <>
      <button onClick={() => { props.onClickAction(props.txt) }} style={{backgroundColor : props.clr, color: 'grey'}}>{props.txt}</button>
    </>
  );
}

export default App;
