import React, { Component } from 'react';
import StreamingPageManager from '../StreamingPageManager.js';
import GenericParameterLabel from './GenericParameterLabel.js';
//import GenericParameterInput from './GenericParameterInput.js';
import './InfoPanel.css';

class InfoPanel extends Component {
	constructor(props) {
		super(props)
		this.state = {
			streamManager: new StreamingPageManager(),
			info: {}
		}		
	}
	
	componentDidMount() {
        var _this = this;
		this._isMounted = true;
	}

	render(){
	    return (

			<footer className="footer navbar-fixed-bottom navbar-default">
				<div className="container-fluid">
					<div className="info-panel">
						<legend>Global Stats</legend>
						<div className="InfoPanel-content">
							<div className="info-element">Packet 1001 Rx:<GenericParameterLabel StreamingPageManager={this.state.streamManager} parameter='Packet Rx Count 1001'/></div>
							<div className="info-element">Packet 1003 Rx:<GenericParameterLabel StreamingPageManager={this.state.streamManager} parameter='Packet Rx Count 1003'/></div>
						</div>
					</div>
				</div>
			</footer>

	
	    	
	    );
	}
}

export default InfoPanel;
