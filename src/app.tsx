import * as React from 'react';
import * as ReactDOM from 'react-dom';
import './www/css/main.less';

class App extends React.Component<{}, {}>{

    render(): JSX.Element {

        return (
            <div>
                <p>test ...</p>
            </div>
        );

    }

}

ReactDOM.render(
    <App />
    , document.getElementById('app')
);