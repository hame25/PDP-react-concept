import Dispatcher from '../dispatcher/app-dispatcher';

let appActions = {
	load () {
		Dispatcher.handleViewAction({
			actionType: 'LOAD_DATA'
		});
	},

	togglePanel (state) {
		Dispatcher.handleViewAction({
			actionType: 'TOGGLE_PANEL',
			panelState: state
		})
	}
};

export default appActions;