import React from 'react';
import DetailsDropDownModal from './DetailsDropDownModal';

class DetailsDropDown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      listVisible: false,
      selectedOption: undefined
    }
  }
  closeModal = () => {
        this.setState(() => ({
          selectedOption: '321'
       }));
       console.log(this.state.selectedOption)
   };
  render() {
      return (
        <div>
          <img onClick={this.drop_down_img_click} src="/images/user.png"></img>
          {
            this.state.listVisible === true
            &&
            <div>
              <div>
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
          listVisible: this.state.listVisible === false ? true : false
        }));
    }
  }


export default DetailsDropDown;
