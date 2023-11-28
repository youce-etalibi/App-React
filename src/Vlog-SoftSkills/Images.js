import React from "react";
import { useParams } from "react-router";
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';

const SlideshowWithImages = () => {
  const { images } = useParams();
  const ImagesArr = images ? images.split(",") : [];

  console.log(ImagesArr);

  function isImage(filename) {
    const imageExtensions = [".jpg"];
    const ext = filename.slice(((filename.lastIndexOf("."))));
    return imageExtensions.includes(ext.toLowerCase());
  }

  const overrideStyles = {
    position: 'absolute',
    top: '50%',
    transform: 'translateY(-50%)',
    width: '230px', 
  };

  return (
    <div>
        <br/>
        <br/>
    <div className="slide-container" style={{ position: 'relative', width: '420px', margin: 'auto', borderRadius:'15px'}}>
      <Slide
        prevArrow={<div style={overrideStyles}><i class='bx bxs-caret-left-circle' style={{color:'white', fontSize:'20px', marginLeft:'7px'}}></i></div>}
        nextArrow={<div style={{ ...overrideStyles, right: 0 }}><i class='bx bxs-caret-right-circle' style={{color:'white', fontSize:'20px', position:'relative', left:'200px'}}></i></div>}
        >
        {ImagesArr.map((item, index) => (
            <div key={index} style={{ width: '420px', height: '420px' }}>
            {isImage(item) ? (
                <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundSize: 'cover',
                width: '100%',
                height: '100%',
            }}>
                <img src={require(`../Images/${item}`)} alt={`Image-${index}`} style={{ maxWidth: '100%', maxHeight: '100%' }} />
                </div>
            ) : (
                <div>
                <video className="img_Slide" controls src={require(`../Images/${item}`)} />
              </div>
            )}
          </div>
        ))}
      </Slide>
    </div>
        </div>
  );
};

export default SlideshowWithImages;
