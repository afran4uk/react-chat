import React, {Component} from "react";
import { Button, Block } from "./components";

class App extends Component {
    render() {
        return (
            <div className="wrapper">
                <Block>
                    <Button type="primary" size="large">
                        This is Button!
                    </Button>
                </Block>
            </div>
        )
    }
}

export default App;
