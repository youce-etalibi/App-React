import React, { Fragment } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Vlog from './Vlog-SoftSkills/Accueil';
import { Provider } from 'react-redux';
import store from './Vlog-SoftSkills/Redux/store';

// import reportWebVitals from './reportWebVitals';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Fragment>
    <Provider store={store}>
    <Vlog />
    </Provider>
  </Fragment>
)


// import React from 'react';
// import { Slide } from 'react-slideshow-image';
// import 'react-slideshow-image/dist/styles.css'

// const spanStyle = {
//   padding: '20px',
//   background: '#efefef',
//   color: '#000000'
// }

// const divStyle = {
//   display: 'flex',
//   alignItems: 'center',
//   justifyContent: 'center',
//   backgroundSize: 'cover',
//   height: '400px'
// }
// const slideImages = [
//   {
//     url: 'https://images.unsplash.com/photo-1509721434272-b79147e0e708?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80',
//     caption: 'Slide 1'
//   },
//   {
//     url: 'https://images.unsplash.com/photo-1506710507565-203b9f24669b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1536&q=80',
//     caption: 'Slide 2'
//   },
//   {
//     url: 'https://images.unsplash.com/photo-1536987333706-fc9adfb10d91?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80',
//     caption: 'Slide 3'
//   },
// ];

// const Slideshow = () => {
//     return (
//       <div className="slide-container">
//         <Slide>
//          {slideImages.map((slideImage, index)=> (
//             <div key={index}>
//               <div style={{ ...divStyle, 'backgroundImage': `url(${slideImage.url})` }}>
//                 <span style={spanStyle}>{slideImage.caption}</span>
//               </div>
//             </div>
//           ))} 
//         </Slide>
//       </div>
//     )
// }

// const root = ReactDOM.createRoot(document.getElementById('root'))
// root.render(
//   <>
//   <Slideshow />
//   </>
// )