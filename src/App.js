import './App.css';

function App() {
  const currentDate = new Date()
  const getHours = currentDate.getHours()
  const colorText = {}

  let greeting = ''

  if (getHours >= 1 && getHours < 12) {
    greeting = 'Good Morning'
    colorText.color = 'green'
  } else if (getHours >= 12 && getHours < 20) {
    greeting = 'Good Afternoon'
    colorText.color = 'blue'    
  } else {
    greeting = 'Good Night'    
    colorText.color = 'black'
  }

  return (
    <div className="container">
      <div className="content">
        <h1>Hi Friends, <span style={colorText}>{greeting}</span></h1>
      </div>
    </div>
  );
}

export default App;
