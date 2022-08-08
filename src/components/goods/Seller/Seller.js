import React, { useState, useEffect ,useRef} from 'react';
import './Seller.css';
import BScroll from 'better-scroll'
import PreviewImage from '../../PreviewImage/PreviewImage'
import { useHistory } from 'react-router';

function areEqual(prevProps, nextProps) {
    return prevProps.seller.name===nextProps.seller.name
}
function Seller(props){
    let [scalaImgSrc,setScalaImgSrc]=useState("")
    let [showScalaImage,setShowScalaImage]=useState(false)
    let [store,setStore]=useState(false)
    const seller=useRef()
    const image=useRef()

    const route=useHistory()
    useEffect(()=>{
        if(props.seller.length===0){
            route.replace("/home/food")
        }else{
            new BScroll(seller.current,{
                click:true,
                scrollY:true
            })
            new BScroll(image.current,{
                click:true,
                scrollY:false,
                scrollX:true
            })   
        }
        
        
    },[props.seller])
    const selectImage=(src)=>{
        setScalaImgSrc(src)
        setShowScalaImage(true)
    }
    const getSupportType=(type)=>{
        switch(type){
            case 0:
              return <img alt="" src={require("../../../icon/decrease_3@3x.png")} />
            case 1:
              return <img alt="" src={require("../../../icon/discount_2@3x.png")} />
            case 2:
              return <img alt="" src={require("../../../icon/guarantee_3@3x.png")} />
            case 3:
              return <img alt="" src={require("../../../icon/invoice_3@3x.png")} />
            case 4:
              return <img alt="" src={require("../../../icon/special_3@3x.png")} />
            default:
              return ""
         }  
    }
    return (
        props.seller.length===0?'':
        <div id="seller" ref={seller}>
            <div className="seller-wrapper" id="seller-wrapper">
            <div className="seller-top">
                <div style={{borderBottom:'1px solid #dddddd'}}>
                <div className="seller-name">{props.seller.name}</div>    
                </div>
                <div className="info-item-list">
                <div className="info-item">
                    <div className="el-font-size grey-font-color info-title">商家送餐</div>
                    <div className="el-font-size"><span className="el-large-font-size">{props.seller.deliveryPrice}</span>2元配送费</div>
                </div>
                <div className="info-item">
                    <div className="el-font-size grey-font-color info-title">预估送达时间</div>
                    <div className="el-font-size"><span className="el-large-font-size">{props.seller.deliveryTime}</span>40分钟</div>
                </div>
                </div>
            </div>
            
            <div className="split"></div>
            <div className="seller-bottom">
                <div className="seller-name">店铺实景</div>
                <div className="seller-image" ref={image}>
                    <ul>
                        {props.seller.pics.map(pic=>{
                            return <li className="seller-image-list" key={pic}><img alt="" src={pic} onClick={()=>selectImage(pic)}/></li>
                        })}
                    </ul>
                </div>
            </div>
            <div className="split"></div>
            <div className="seller-bottom-info" style={{paddingBottom:0}}>
                <div className="seller-name">店铺信息</div>
                <ul>
                    {props.seller.infos.map(info=><li className="el-font-size" key={info}>{info}</li>)}
                </ul>
            </div>
            </div>
            <PreviewImage imageSrc={scalaImgSrc} show={showScalaImage} hide={()=>setShowScalaImage(false)}></PreviewImage>
        </div>
    )
}
export default React.memo(Seller,areEqual)


