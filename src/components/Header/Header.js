import React from 'react';
import './Header.css';
const detailRef = React.createRef()
export default class Header extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            seller: {},
            detailShow: false,
        }
    }
    controlDetail = () => {
        this.setState({
            detailShow: !this.state.detailShow
        }, () => {
            if (this.state.detailShow) {
                detailRef.current.style.display = "flex"
                setTimeout(() => {
                    detailRef.current.style.opacity = 1
                }, 0)
            } else {
                detailRef.current.style.opacity = 0
                setTimeout(() => {
                    detailRef.current.style.display = "none"
                }, 500)
            }
        })
    }
    render() {
        const seller = this.props.seller
        let agreeStar = Math.floor(seller.score ? seller.score : 3)
        let disagreeStar = 5 - Math.floor(seller.score ? seller.score : 3)
        let stars = []
        let grey_stars = []
        for (let i = 0; i < agreeStar; i++) {
            stars.push(i)
        }
        for (let i = 0; i < disagreeStar; i++) {
            grey_stars.push(i)
        }
        stars = stars.map((star, index) => <span className="star" key={index}></span>)
        grey_stars = grey_stars.map((star, index) => <span className="star-grey" key={index}></span>)
        let supports = seller.supports ? seller.supports : []
        supports = supports.map((support) => {
            return (
                <div className="coupon-list" key={support.type}>
                    <span className="support-icon"></span>
                    <span>{support.description}</span>
                </div>)
        })

        return (
            <div className="head">

                <div className='detail-container' ref={detailRef}>
                    <div className="detail-head">
                        {seller.name}
                        <div className="star-container">
                            {stars}
                            {grey_stars}
                        </div>
                    </div>
                </div>


                <div className="content-wapper">

                    <div className="avatar">
                        <img alt="img" src={seller.avatar} />
                    </div>
                    <div className="seller-info">
                        <div className="info-list">
                            <img alt="img" src={require('../../icon/brand@3x.png')} />
                            <span className="seller-name">{seller.name}</span>
                        </div>
                        <div className="info-list">
                            <div className="seller-info-list">{seller.description}/ {seller.deliveryTime}40????????????</div>
                        </div>

                    </div>

                </div>
                <div className="background">
                    <img alt="img" src={seller.avatar} />
                </div>
                <div className="declear">
                    <div className="icon"></div>
                    <div className="text">{seller.bulletin}</div>
                </div>
            </div>
        )
    }
}
