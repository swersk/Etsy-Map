// //
// //
// //
// // Draft for v2
// //
// //
// //

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

//   const showNextFunFact = () => {
//     if (funFactIndex >= funFacts.length) {
//       setFunFactIndex(0);
//     } else {
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
