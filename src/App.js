import React from 'react';

class App extends React.Component {
    render() {
        return(
        <div>
            <h1>GITHUB INFO</h1>
            <form>
                <input placeholder="Github Handle"/>
                <button>Search</button>
            </form>
            <div id="UserCard">
                <img src="https://avatars.githubusercontent.com/u/18543621?v=4"/>
                <a target="_blank" href="https://github.com/JCSime"><h3>John Sime</h3></a>
                <p>(JCSime)</p>
                <p>Total Repos: 44</p>
                <p>Total Followers: 88</p>
            </div>

            <div id="Followers">
                <div className="follower">
                    <img width="200px" src="https://avatars.githubusercontent.com/u/42678545?v=4"/>
                    <a target="_blank" href="https://github.com/DatBoiLuiskrrt"><p>DatBoiLuiskrrt</p></a>
                </div>
                <div className="follower">
                    <img width="200px" src="https://avatars.githubusercontent.com/u/42678545?v=4"/>
                    <a target="_blank" href="https://github.com/DatBoiLuiskrrt"><p>DatBoiLuiskrrt</p></a>
                </div>
                <div className="follower">
                    <img width="200px" src="https://avatars.githubusercontent.com/u/42678545?v=4"/>
                    <a target="_blank" href="https://github.com/DatBoiLuiskrrt"><p>DatBoiLuiskrrt</p></a>
                </div>
            </div>
        </div>
        );
    }
}

export default App;
