import React, { Component } from 'react'
import Profile from './account/Profile'

class SubNavbar extends Component {
    render() {
        const style = {
            profileCard: {
                background: "#f1f1f1",
                borderRadius: "none",
                border: "none",
                fontWeight: "bold",
                color: 'grey',
            },
            salesCard: {
                background: "#f1f1f1",
                border: "none",
                fontWeight: "bold",
                color: 'grey',
                borderRadius: "none",
                height: "220px",
                padding: "10px"
            },
            profileCardBackground: {
                height: "200px", 
                background: "#f5f5f5"
            },
            avatarImg: {
                padding: "5px", 
                marginTop: "40px", 
                width: "100px", 
                height:"100px", 
                marginLeft: "100px"
            },
            social: {
                background: "black",
                color: "white",
                borderRadius: "4px",
                textAlign: "center",
                width: "25px",
                height: "22px",
                paddingTop: "2px"
            }
        }
        
        return(
            <div className="container">
                <ul className="nav nav-tabs" role="tablist">
                    <li className="nav-item">
                        <a className="nav-link active" data-toggle="tab" href="#home">Home</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link text-info" data-toggle="tab" href="#menu1">Account</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link text-info" data-toggle="tab" href="#menu2">Projects</a>
                    </li>
                </ul>
                <div className="tab-content">
                    <div id="home" className="container tab-pane active"><br/>
                        <div className="row">
                            <div className="col-md-4">
                                <div className="card">
                                    <div className="card-body">
                                        <div style={style.profileCardBackground}>
                                            <img src={require("../../assets/img/userLarg.png")} alt="User" style={style.avatarImg} />
                                        </div>
                                        <ul className="list-group">
                                            <li style={style.profileCard} className="list-group-item d-flex mt-2">
                                                <span className="fa fa-briefcase fa-lg mt-1"></span>
                                                <span className="d-flex align-items-start ml-2">Projects</span>
                                                <span className="badge badge-info badge-pill p-2 ml-auto">10</span>
                                            </li>
                                            <li style={style.profileCard} className="list-group-item d-flex justify-content-between align-items-center mt-2">
                                                <span className="fa fa-envelope-o fa-lg"></span>
                                                <span className="d-flex align-items-start ml-2">Message</span>
                                                <span className="badge badge-info badge-pill p-2 ml-auto">11</span>
                                            </li>
                                            <li style={style.profileCard} className="list-group-item d-flex justify-content-between align-items-center mt-2">
                                                <span className="fa fa-users fa-lg"></span>
                                                <span className="d-flex align-items-start ml-2">Friends</span>
                                                <span className="badge badge-info badge-pill p-2 ml-auto">14</span>
                                            </li>
                                            <li style={style.profileCard} className="list-group-item d-flex mt-2">
                                                <span className="d-flex fa fa-cog fa-lg mt-1"></span>
                                                <span className="d-flex align-items-start ml-2">Settings</span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-8">
                                <div className="row">
                                    <div className="col-md-7">
                                        <h2 className="text-left">Ted Stinson</h2>
                                        <p className="text-justify pt-2 pl-2 pb-2 pr-2">W3Schools is optimized for learning, testing, and training. 
                                            Examples might be simplified to improve reading and basic understanding. 
                                            Tutorials, references, and examples are constantly reviewed to avoid errors, 
                                            but we cannot warrant full correctness of all content. While using this site, 
                                            you agree to have read and accepted our terms of use, cookie and privacy policy.
                                            Copyright 1999-2019 by Refsnes Data is a complete. 
                                        </p>
                                        <p>We cannot warrant full correctness of all content.</p>
                                    </div>
                                    <div className="col-md-5" style={style.salesCard}>
                                        <ul>
                                            <h3 className="mt-4 lt-2">Sales Summary</h3>
                                            <li className="d-flex lt-0">Today Sold <span className="mr-3 p-2 ml-auto text-info">19</span></li>
                                            <li className="d-flex">Weekly Sales <span className="mr-3 p-2 ml-auto text-info">35</span></li>
                                            <li className="d-flex">Total Sold <span className="mr-3 badge-pill p-2 ml-auto text-info">1989</span>  </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-12">
                                        <span style={style.social} className="fa fa-google-plus"></span>
                                        &nbsp; @TedStinson &nbsp; &nbsp; &nbsp; &nbsp;
                                    
                                        <span style={style.social} className="fa fa-twitter"> </span>
                                        &nbsp; @t_stinson &nbsp; &nbsp; &nbsp; &nbsp;
                                    
                                        <span style={style.social} className="fa fa-facebook"> </span>
                                        &nbsp; @ted_stinson &nbsp; &nbsp; &nbsp; &nbsp;
                                    
                                        <span style={style.social} className="fa fa-skype"> </span>
                                        &nbsp; @stinson_ted
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id="menu1" className="container tab-pane fade"><br/>
                       <Profile />
                    </div>
                    <div id="menu2" className="container tab-pane fade"><br/>
                        <h3>Menu 2</h3>
                        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.</p>
                    </div>
                </div>
            </div>
        )
    }
}
export default SubNavbar