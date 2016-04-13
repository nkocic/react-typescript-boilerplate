import * as React from 'react';
import { connect } from 'react-redux';

import { incrementCounter, decrementCounter, addCounter } from '../actions';
import { CounterList } from './counter_list';

interface IStateProps {
  counters: number[];
}

interface IDispatchProps {
  dispatch: (func: any) => void;
}

type IProps = IStateProps & IDispatchProps;

class App extends React.Component<IProps, {}> {
  public render(): React.ReactElement<{}> {
    const { dispatch, counters }: any = this.props;

    return (<div>
        <CounterList counters={counters}
                     increment={(index: number) => dispatch(incrementCounter(index))}
                     decrement={(index: number) => dispatch(decrementCounter(index))}
        />

        <button onClick={() => dispatch(addCounter())}>Add Counter</button>
      </div>
    );
  }
}

function mapStateToProps(state: IState, ownProps: {}): IStateProps {
  return {
    counters: state.counters,
  };
}

function mapDispatchToProps(dispatch: Redux.Dispatch): IDispatchProps {
  return {
    dispatch: dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
