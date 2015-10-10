import Dispatcher from '../dispatcher/app-dispatcher';

let appActions = {
	load () {
		Dispatcher.handleViewAction({
			actionType: 'LOAD_DATA'
		});
	}
};

export default appActions;