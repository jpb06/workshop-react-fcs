import React from "react";

interface CoolClassProps {
  isAwesome: boolean;
}
interface CoolClassState {
  coolBro: any;
}

export class CoolClassWithPropsAndState extends React.Component<
  CoolClassProps,
  CoolClassState
> {
  constructor(props: CoolClassProps) {
    super(props);
    this.setState({ coolBro: { name: "you" } });
    this.handleClick.bind(this);
  }

  componentDidMount() {}
  shouldComponentUpdate(
    nextProps: CoolClassProps,
    nextState: CoolClassState,
    nextContext: any
  ): boolean {
    return true;
  }
  componentDidUpdate(nextProps: CoolClassProps, nextState: CoolClassState) {}
  componentWillUnmount() {}

  handleClick() {
    this.setState({ coolBro: { name: "me" } });
  }

  render() {
    return (
      <>
        <div>It's cool, bro.</div>
        {this.props.isAwesome && <>Awesome!</>}
        <button onClick={this.handleClick}>Who's cool ?</button>
        {this.state.coolBro}
      </>
    );
  }
}
