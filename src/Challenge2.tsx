const Challenge2 = () => {
    const today= new Date();
    const todaysDate=today.toLocaleDateString();
    const currentTime=today.toLocaleTimeString();
    return (
        <>
        <h1>Hello, My name is Abhishek Raj</h1>
        <p>todays Date is {todaysDate}</p>
        <p>current time is {currentTime}</p>
        </>
    )
}
export default Challenge2;



// import React from 'react';
// import './App.css';
// import Challenge2 from './Challenge2';

// const App: React.FC = () => {
 
//   return (
//     <div className="App">
//       <Challenge2></Challenge2>
//     </div>
//   );
// };

// export default App;
