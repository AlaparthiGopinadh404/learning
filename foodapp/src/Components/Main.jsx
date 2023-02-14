import React from "react";
// import "./App.css";
function Main(){
    return(
        <div>
        
            <div className="whole container-fluid">            
             
              
            <div className="frist">
                <div className="text-center text-light ">
                    <h3 className="py-5">Food App</h3>
                    <h1>
                        <b className="">why stay hungry when <br /> you can order form bella onojie</b>
                    </h1>
                    <p>Download the bella onoje's food app now on</p>
                      
                    <button className="play mx-5 m-2">PlayStore</button>
                    <button className="app mx-5 m-2">App store</button>
                </div>

                <div>
                    {/* <!-- <div className="ab1 mb-5 py-5">
                      <img src="./assets/images/Rectangle (1).png" alt="" className="img-fluid" />
                    </div>
                    <div className="ab2 mb-5 py-5">
                        
                        <img src="./assets/images/Rectangle.png" alt="" className="img-fluid" />
                    </div> --> */}
                    <div>
                      <img src="./assets/images/Group 53.png" alt="" className="groupimage"/>
                    </div>
                </div>
            </div>
            <div className="hr"></div>
            <hr/>
        <section>
            
        <div className="mt-2">
            <h3 className="text-center">How the App  Work</h3>
            
            <div className="row text-center">
                <div className="col-md-6  text-center col-sm-12 ">
                    <img src="./assets/images/demophone.png" className="img-fluid" alt="" height="550px"/>
                </div>
                <div className="col-md-6 mt-5 py-5 col-sm-12">
                  <h3 className="orangeText">Create an account</h3>
                    <h1><b>create/login to an existing <br/> account to get stared</b></h1>
                    <p>An account  is created with your email <br/> and a desired password </p>
                </div>
            </div>
            <div className="row text-center">
                <div className="col-md-6  mt-5 py-5  col-sm-12  text-center">
                    <h3 className="orangeText"> Explore varities</h3>
                    <h1>shop for your favorites <br/>meal as e day  hot</h1>
                    <p>shop for your favorite meals and drinks <br/> and enjoy whiledoing it</p>
                </div>
                <div className="col-md-6 mt-1 text-center col-sm-12 ">
                    <img src="./assets/images/demophone2.png" className="img-fluid" alt="" height="550px"/>
                </div>
            </div>
            <div className="row text-center">
                <div className="col-md-6 text-center col-sm-12">
                    <img src="./assets/images/demophone3.png" className="img-fluid" alt=""  height="550px"/>
                </div>
                <div className="col-md-6 mt-5 col-sm-12 py-5">
                    <h3 className="orangeText">Check out</h3>
                    <h1>when you done check out <br/> and get it delivered</h1>
                    <p>When  you done check out and get it <br/> delivered with ease</p>
                </div>
            </div>
            <div className="la text-center text-light py-5">
                <h1><b>Download the app now</b></h1>
                <p>Available on your favorite store Start your premium exprince now</p>
                <button type="button" className="playstore ">playstore</button>
                <button  type ="button" className="appstore ">Appstore</button>

            </div>
          

        </div>    
    </section>
</div>
</div>
    )
} 
export default Main;