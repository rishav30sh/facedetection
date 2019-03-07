import React, {Component} from 'react';
import Inputurl from './component/inputurl'
import Profile from './component/profile'
import "./index.css";



class App extends Component{
    render(){
        return(
            <div>
                <div className="leftalign">
                    <Profile/>
                </div>
            
                <Inputurl/>
            </div>
        )
    }
}
export default App