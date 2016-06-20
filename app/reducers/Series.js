import Immutable from 'immutable';
import {Series} from '../constants/ActionTypes';
import {handleActions} from 'redux-actions';

const initialState = Immutable.fromJS({
  series: null,
  pending: false,
  serieEpisodes: null,
  serieEpisodesFiles: null,
  episodePending: false,
  episodeFilesPending: false,
});

const actions = {
  [Series.getSeries]: {
    next(state, {payload, error, pending}) {
      if (pending || error) {
        return state.merge({pending, error});
      }
      return state.merge({pending, error, series: payload});
    },
  },

  [Series.getEpisodes]: {
    next(state, {payload, error, pending}) {
      if (pending || error) {
        return state.merge({episodePending: pending, error});
      }
      return state.merge({episodePending: pending, error, serieEpisodes: payload});
    },
  },

  [Series.getEpisodesFiles]: {
    next(state, {payload, error, pending}) {
      if (pending || error) {
        return state.merge({episodeFilesPending: pending, error});
      }
      return state.merge({episodeFilesPending: pending, error, serieEpisodesFiles: payload});
    },
  },

  [Series.resetEspisodes]: (state) => state.merge({serieEpisodes: null}),

  [Series.addSerie]: {
    next(state, {payload, error, pending}) {
      if (pending || error) {
        return state.merge({pending, error});
      }
      console.log('SERIES REDUCER', payload);
      return state;
    },
  },
};

export default handleActions(actions, initialState);
