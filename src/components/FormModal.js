import React, { Component } from 'react';
import Form from './Form';
import BasicInfo from './formComponents/BasicInfo';
import Topics from './formComponents/Topics';
import Activities from './formComponents/Activities';
import Pay from './formComponents/Pay';

class FormModal extends Component {

  state = {
    name: '',
    email: '',
    otherSelected: false,
    boxSelected: false,
    credit: true,
    other: '',
    total: 0,
    ccNum: '',
    zip: '',
    cvv: ''
  }

  componentDidMount() {
    this.intervalID = () => {
      this.hide(document.getElementById('other'));
      this.hide(document.getElementById('total'));
      this.hide(document.getElementById('pay-pal'));
      this.hide(document.getElementById('bitcoin'));
    }
    this.intervalID();
  }

  render() {
    const {
      name,
      email,
      other,
      total,
      ccNum,
      zip,
      cvv
    } = this.state;

    return(
      <div className="modal fade" id="register" tabIndex="-1" role="dialog">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header bg-info text-white">
              <h5 className="modal-title">Registration Form</h5>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <Form
                elements={() => (
                  <React.Fragment>

                    <BasicInfo
                      checkRole={this.checkRole}
                      change={this.change} name={name}
                      email={email}
                      other={other}
                      blur={this.blur}
                    />

                    <Topics />

                    <Activities
                      checkDisable={this.checkDisable}
                      total={total}
                      blurCheck={this.blurCheck}
                    />

                    <Pay
                      hideOrShow={this.hideOrShow}
                      change={this.change}
                      ccNum={ccNum}
                      zip={zip}
                      cvv={cvv}
                      blur={this.blur}
                    />

                  </React.Fragment>
                )}
                submit={this.submit}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }

  blur = (event) => {
    if (event.target.id === 'name') {this.validateField(this.state.name, /\w* \w*/, event, 'name')}
    if (event.target.id === 'email') {this.validateField(this.state.email, /^[^@]+@[^@.]+\.[a-z]{2,}$/i, event, 'email')}
    if (event.target.id === 'other') {this.validateField(this.state.other, /^[a-zA-Z ]{2,30}$/, event, 'other')}
    if (event.target.id === 'ccNum') {this.validateField(this.state.ccNum, /\d{13,16}/, event, 'ccNum')}
    if (event.target.id === 'zip') {this.validateField(this.state.zip, /\d{5}/, event, 'zip')}
    if (event.target.id === 'cvv') {this.validateField(this.state.cvv, /\d{3}/, event, 'cvv')}
  }

  blurCheck = (event) => {
    const checked = event.target.checked;

    if (checked === false) {
      event.target.classList.remove('is-valid');
      event.target.classList.add('is-invalid');
      this.setState(() => {
        return {
          boxSelected: false
        };
      });
    } else {
      event.target.classList.add('is-valid');
      event.target.classList.remove('is-invalid');
      this.setState(() => {
        return {
          boxSelected: true
        };
      });
    }
  }

  change = (event) => {
    const name = event.target.id;
    const value = event.target.value;

    this.setState(() => {
      return {
        [name]: value
      };
    });
  }

  checkRole = (event) => {
    const value = event.target.value;
    const other = event.target.nextSibling;

    if (value === "other") {
      this.show(other);
      this.setState(() => {
        return {
          otherSelected: true
        };
      });
    } else {
      this.hide(other);
      this.setState(() => {
        return {
          otherSelected: false
        };
      });
    }

    setTimeout(() => {
      if (this.state.otherSelected === false) {
        other.classList.remove('is-invalid');
        other.classList.remove('is-valid');
      }
    }, 500);
  }

  hide = (element) => {
    element.style.opacity = "0";
    setTimeout(() => element.style.display = "none", 200);
    element.classList.remove('order-first');
  }


  show = (element) => {
    setTimeout(() => element.style.opacity = "1", 50);
    element.style.display = "block";
    element.classList.add('order-first');
  }

  hideOrShow = (event) => {
    const value = event.target.value;
    const creditCard = event.target.nextSibling;
    const payPal = event.target.nextSibling.nextSibling;
    const bitcoin = event.target.nextSibling.nextSibling.nextSibling

    if (value === 'credit-card') {
      this.setState(() => {
        return {
          credit: true
        }
      });
      this.hide(payPal);
      this.hide(bitcoin);
      this.show(creditCard);
    } else if (value === 'pay-pal') {
      this.setState(() => {
        return {
          credit: false
        }
      });
      this.show(payPal);
      this.hide(bitcoin);
      this.hide(creditCard);
    } else if (value === 'bitcoin') {
      this.setState(() => {
        return {
          credit: false
        }
      });
      this.hide(payPal);
      this.show(bitcoin);
      this.hide(creditCard);
    }
  }

  validateField = (field, limit, event, id) => {
    if (limit.test(field) === false) {
      this.highlightError(id, event);
      return true;
    } else if (limit.test(field) === true) {
      this.removeError(id, event);
      return false;
    }
  }

  validateBox = (checked, id, event) => {
    if (checked === false) {
      this.highlightError(id, event)
      return true;
    } else if (checked === true) {
      this.removeError(id, event);
      return false;
    }
  }

  highlightError = (id, event) => {
    event.preventDefault();
    const element = document.getElementById(id);
    element.classList.add('is-invalid');
    element.classList.remove('is-valid');
  }

  removeError = (id) => {
    const element = document.getElementById(id);
    element.classList.remove('is-invalid');
    element.classList.add('is-valid');
  }

  validator = (event) => {
    let check = 0;
    //BasicInfo
    if (this.validateField(this.state.name, /\w* \w*/, event, 'name')) check += 1;

    if (this.validateField(this.state.email, /^[^@]+@[^@.]+\.[a-z]{2,}$/i, event, 'email')) check += 1;

    if (this.state.otherSelected === true) {
      if (this.validateField(this.state.other, /^[a-zA-Z ]{2,30}$/, event, 'other')) check += 1;
    }

    //Activites
    if (this.validateBox(this.state.boxSelected, 'main', event)) check += 1;

    //Payment
    if (this.state.credit === true) {
      if (this.validateField(this.state.ccNum, /\d{13,16}/, event, 'ccNum')) check += 1;
      if (this.validateField(this.state.zip, /\d{5}/, event, 'zip')) check += 1;
      if (this.validateField(this.state.cvv, /\d{3}/, event, 'cvv')) check += 1;
    }

    if (check === 0) {
      alert('Thank you for registering! You should receive a confirmation email shortly');
      this.setState(() => {
        return {
          name: '',
          email: '',
          other: '',
          ccNum: '',
          zip: '',
          cvv: ''
        }
      });
      document.getElementById('main').checked = false;
    }
  }

  submit = (event) => {
    this.validator(event);
  }

  checkDisable = (event) => {
    const total = document.getElementById('total');

    setTimeout(() => {
      if (this.state.total === 0) {this.hide(total)}
      else {this.show(total)}
    }, 500)
    if (event.target.checked === true
       && event.target.nextSibling.textContent.includes('Tuesday 9am-12pm')) {
      //run totalCost
      let fieldset = event.target.parentNode.parentNode;
      for (let i = 0; i < fieldset.children.length; i++) {
        let input = fieldset.children[i].children[0];
        let label = fieldset.children[i].children[1];
        if (input.checked === false
           && label.textContent.includes('Tuesday 9am-12pm')
      ) { input.setAttribute('disabled', true) }
      }
    } else  if (event.target.checked === true
      && event.target.nextSibling.textContent.includes('Tuesday 1pm-4pm')){
      let fieldset = event.target.parentNode.parentNode;
      for (let i = 0; i < fieldset.children.length; i++) {
        let input = fieldset.children[i].children[0];
        let label = fieldset.children[i].children[1];
        if ( input.checked === false
          && label.textContent.includes('Tuesday 1pm-4pm')
        ) { input.setAttribute('disabled', true) }
      }
    } else if (event.target.checked === false
      && event.target.nextSibling.textContent.includes('Tuesday 9am-12pm')
    ) {
      let fieldset = event.target.parentNode.parentNode;
      for (let i = 0; i < fieldset.children.length; i++) {
        let input = fieldset.children[i].children[0];
        let label = fieldset.children[i].children[1];
        if ( input.checked === false
          && label.textContent.includes('Tuesday 9am-12pm')
        ) { input.removeAttribute('disabled')}
      }
    } else if (event.target.checked === false
      && event.target.nextSibling.textContent.includes('Tuesday 1pm-4pm')
    ) {
      let fieldset = event.target.parentNode.parentNode;
      for (let i = 0; i < fieldset.children.length; i++) {
        let input = fieldset.children[i].children[0];
        let label = fieldset.children[i].children[1];
        if ( input.checked === false
          && label.textContent.includes('Tuesday 1pm-4pm')
        ) { input.removeAttribute('disabled')}
      }
    }

    let text = event.target.nextSibling.textContent;
    let input = event.target;
    if (
      text.includes('$100')
      && input.checked === true
    ) {this.setState( (state) => {return {total: state.total + 100}})} else if (
      text.includes('$200')
      && input.checked === true
    ) {this.setState( (state) => {return {total: state.total + 200}})} else if (
      text.includes('$100')
      && input.checked === false
    ) {this.setState( (state) => {return {total: state.total - 100}})} else if (
      text.includes('$200')
      && input.checked === false
    ) {this.setState( (state) => {return {total: state.total - 200}})}
  }


}

export default FormModal;
