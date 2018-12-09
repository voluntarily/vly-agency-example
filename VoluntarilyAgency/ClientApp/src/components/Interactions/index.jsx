import React, { Component } from 'react';
import Gallery from 'react-grid-gallery';
import img1 from '../../images/20181209_112114.jpg'
import img2 from '../../images/Classroom-Students-Teacher-Feature-Image-e1535388740402.jpg'
import img3 from '../../images/ClassroomGameBlog.jpg'
import img4 from '../../images/social_image.jpg'
import img5 from '../../images/students-listening-female-teacher-classroom-260nw-778983088.jpg'

const IMAGES =
[{
        src: img1,
        thumbnail: img1,
        thumbnailWidth: 320,
        thumbnailHeight: 174,
        isSelected: false,
        caption: "School 1 - Class interaction"
},
{
  src: img2,
  thumbnail: img2,
  thumbnailWidth: 320,
  thumbnailHeight: 174,
  isSelected: false,
  caption: "Kids participating"
},
{
  src: img3,
  thumbnail: img3,
  thumbnailWidth: 320,
  thumbnailHeight: 174,
  isSelected: false,
  caption: "Kids with laptops"
},
{
  src: img4,
  thumbnail: img4,
  thumbnailWidth: 320,
  thumbnailHeight: 174,
  isSelected: false,
  caption: "Raising hands"
},
{
  src: img5,
  thumbnail: img5,
  thumbnailWidth: 320,
  thumbnailHeight: 174,
  isSelected: false,
  caption: "Students listening female teacher"
}
]

export default class Interactions extends Component {


 render() {

    return (
      <div>
        <h1>Interactions</h1>
        <Gallery images={IMAGES}/>
      </div>
    );
  }
}
 
