// import { useState } from 'react';

// const FunFact = ({ data, setData }) => {
//   const [firstSale, setFirstSale] = useState(false);
//   const [firstSaleData, setFirstSaleData] = useState([]);
//   const [topState, setTopState] = useState(false);
//   const [lowestState, setLowestState] = useState(false);
//   const [funFactIndex, setFunFactIndex] = useState(0);

//   const handleFunFact = () => {
//     setFunFactIndex((prevIndex) => (prevIndex + 1) % funFacts.length);
//   }

//   const handleFirstSale = () => {
//     console.log('test!!', [data[data.length - 1]]);
//     let firstSaleObj = [data[data.length - 1]];
//     setData(firstSaleObj);
//     setFirstSale(true);
//     setFirstSaleData(firstSaleObj);
//   };

//   const handleTopState = () => {
//     console.log('top state:');
//     setTopState(true);
//   };

//   const handleLowestState = () => {
//     console.log('lowest state:');
//     setLowestState(true);
//   };

//   // Array to store the fun facts
//   const funFacts = [
//     `Your first sale was <b>${firstSaleData[0]?.item}</b> in ${firstSaleData[0]?.city}, ${firstSaleData[0]?.state} on ${firstSaleData[0]?.date}`,
//     'Top State alert! You\'ve sold the most products in....state',
//     'Lowest state here',
//   ];

//   // Function to show the next fun fact in order
//   const showNextFunFact = () => {
//     if (funFactIndex >= funFacts.length) {
//       // If the index is out of range, reset to zero
//       setFunFactIndex(0);
//     } else {
//       // Otherwise, increment the index to show the next fun fact
//       setFunFactIndex((prevIndex) => prevIndex + 1);
//     }
//   };

//   return (
//     <>
//       <div>
//         <button onClick={handleFunFact}>Fun Fact!</button>
//       </div>
//       {firstSale && <p dangerouslySetInnerHTML={{ __html: funFacts[funFactIndex] }}></p>}
//       {topState && <p>{funFacts[funFactIndex]}</p>}
//       {lowestState && <p>{funFacts[funFactIndex]}</p>}
//       <button onClick={showNextFunFact}>Next Fun Fact</button>
//     </>
//   );
// };

// export default FunFact;

// //Top state
// //States I haven't sold to yet
// //Most sold product
// //On this day in the past, you made these sales
