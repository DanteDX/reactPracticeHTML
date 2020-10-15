class App extends React.Component{
    state = {
        data:[]
    }
    getInfo = async(e) =>{
        try{
            const response = await fetch('https://jsonplaceholder.typicode.com/todos/');
            const responseData = await response.json();
            for(let i=0;i<10;i++){
                this.setState({
                    data:[...this.state.data,responseData[i].title]
                })
            }
            console.log('Information Fetched');
        }catch(err){
            console.log(err);
        }
    }

    consoleLogState = (e) =>{
        this.state.data.map(title => console.log(title));
    }

    clearState = e =>{
        this.state.data.length === 0 ? console.log('State is Empty') : (
            this.setState({
                data:[]
            })
        )
    }

    render(){
        return(
            <div className="appContent">
                <button onClick={this.getInfo}>GetInfo</button>
                <button onClick={this.consoleLogState}>Console log State</button>
                <button onClick={this.clearState}>Clear State</button>
                <h3>Tasks are the following:</h3>
                <ul>
                    {
                        this.state.data.map(task => {
                            return (
                                <li key={Math.random()}>
                                    {task}
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        )
    }
}

ReactDOM.render(<App />, document.querySelector('#app'));