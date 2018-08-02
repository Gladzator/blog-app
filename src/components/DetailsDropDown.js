import React from 'react';
import DetailsDropDownModal from './DetailsDropDownModal';

class DetailsDropDown extends React.Component {
  constructor(props) {
    super(props);
  }
  state = {
    listVisible: false,
    selectedOption: undefined
  }
  closeModal = () => {
          this.setState(() => ({
            listVisible: false,
            selectedOption: undefined
         }));
     };
      render() {
      return (
        <div>
          <img onClick={this.drop_down_img_click} src="/images/user.png"></img>
          {
            this.state.listVisible === true
            &&
            <div>
              <div className="dropdownModal">
                <DetailsDropDownModal
                  selectedOption={this.state.selectedOption}
                  closeModal={this.closeModal}
              />
              </div>
            </div>
          }
        </div>
      )
    }
    drop_down_img_click = () => {
        this.setState (() => ({
          listVisible: this.state.listVisible === false ? true : false,
          selectedOption:'123'
        }));
    }
  }


export default DetailsDropDown;
