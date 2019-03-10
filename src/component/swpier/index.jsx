import React ,{Component} from 'react'
import {render} from 'react-dom';
import Swiper from 'react-id-swiper';
import './swiper.min.css'
import './index.css'



class mySwiper extends Component{
  
  handleClick(i) {
      window.location.href=this.props.images[i].href
  }
  render(){
    const params = {
      autoplay:true,
      loop:true
   
    }
    return (
      <Swiper {...params}>
        {
          this.props.images.map((item,i)=>{
            return (<div onClick={this.handleClick.bind(this, i)} key={i}>
              <img src={item.img} />
            </div>)
          })
        }
      </Swiper>
    )
  }
}
export default mySwiper


// const Swiper= () => {
  
  
//     const swiperOptions = {
//       preloadImages: true,
//       autoplay: 4000,
//       autoplayDisableOnInteraction: false
//     };
//     return (
//       <ReactSwiper swiperOptions={swiperOptions} showPagination items={slide}
//                    className="swiper-example" />
//     );
//   };
  // render(<ReactSwiperExample />, document.getElementById('layout'));