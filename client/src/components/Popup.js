import React from "react";
import Popup from "reactjs-popup";
//

export default class ControlledPopup extends React.Component {
  constructor(props) {
    super(props);
    this.state = { open: false };
  }
  openModal = () => {
    this.setState({ open: true });
  };
  closeModal = () => {
    this.setState({ open: false });
  };

  componentDidUpdate(prevProps, prevState){
    if(prevProps.Fave !== this.props.Fave){
      this.openModal();
    }
  }

  render() {
    return (
        <Popup
          open={this.state.open}
          closeOnDocumentClick
          onClose={this.closeModal}
        >
          <div>
            {this.props.Fave.name} has been added to your favorites!
          </div>
        </Popup>

    );
  }
}
