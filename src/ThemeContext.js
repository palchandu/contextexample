import React, { Component } from "react";
const { Provider, Consumer } = React.createContext();
class ThemeContextProvider extends Component {
    state = {
        theme_color: "red"
      };

      toggleTheme = () => {
        this.setState(prevState => {
          return {
            theme_color: prevState.theme_color === "red" ? "green" : "red"
          };
        });
      };

    render() {
      return <Provider value={this.state.theme_color}>{this.props.children}</Provider>;
    }
  }

  export { ThemeContextProvider, Consumer as ThemeContextConsumer };
