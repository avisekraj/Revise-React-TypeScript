const Challenge3=()=>{
    const time=new Date().getHours();
    let greet='';
    const styling={
        margin:"500px 0",
        backgroundColor:"lightBlue",
        borderRadius:"10px"

    }
    const textColor={
        color:"Orange",
    }
    if(time<12){
        greet="Good Morning";
        

    }
    if(time<17&&time>=12){
        greet="Good Afternoon";
        styling.backgroundColor="Orange";
        textColor.color="voilet"
    }
    if(time>=17){
        greet="Good Night";
        styling.backgroundColor="Blue";
        textColor.color="while"
    }
    
return(
    <>
    <h1 style={styling}>Hello Sir <p style={textColor}>{greet}</p></h1>
    </>
)
}

export default Challenge3;




// import React from 'react';
// import './App.css';
// import Challenge3 from './Challenge3';

// const App: React.FC = () => {
 
//   return (
//     <div className="App">
//       <Challenge3></Challenge3>
//     </div>
//   );
// };

// export default App;
