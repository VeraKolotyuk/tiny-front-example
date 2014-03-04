/** @jsx React.DOM */
var ProfileForm = React.createClass({

  errors: {email: {}, password: {}},

  validate: function() {
    var email = this.refs.email.getDOMNode().value.trim(),
        password = this.refs.password.getDOMNode().value.trim(),
        isValid = true;

    this.errors = {email: {}, password: {}};
    if (email === "") {
      this.errors.email.text = "Can't be blank";
      this.errors.email.hasError = "has-error";
      isValid = false;
    }

    if (password === "") {
      this.errors.password.text = "Can't be blank";
      this.errors.password.hasError = "has-error";
      isValid = false;
    }

    /*  TODO:: add more fields ...  */

    return isValid;
  },

  handleSubmit: function() {

    var isValid = this.validate();
    if (!isValid) {
      this.setState({errors: this.errors});
    } else {
      window.location.reload();
    }

    return false;
  },
  getInitialState: function() {
    return {data: []};
  },
  render: function() {
    return (
      <form role="form" name="profileForm" data-ajax="formSubmitSuccess" onSubmit={this.handleSubmit}>
          <div className="form-inner">
            <div className="form-group {this.errors.email.hasError}">
              <label for="exampleInputEmail1">Email address</label>
              <input type="email" className="form-control" id="exampleInputEmail1" placeholder="Enter email" ref="email"/>
              <div className="help-block">{this.errors.email.text}</div>
            </div>
            <div className="form-group  {this.errors.password.hasError}" >
              <label for="exampleInputPassword1">Password</label>
              <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" ref="password"/>
              <div className="help-block">{this.errors.password.text}</div>
            </div>
            <div className="form-group">
              <label for="exampleInputFile">Personal Info</label>
              <textarea className="form-control" rows="3"></textarea>
            </div>
            <div className="checkbox js-want-more">
              <label>
                <input type="checkbox" checked /> I want to tell more
              </label>
            </div>

            <div className="form-group more-info">
                <label for="exampleInputFile">Profession</label>
                <select className="form-control">
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                </select>
            </div>
            <button type="submit" className="btn btn-default">Submit</button>
          </div>
      </form>
    );
  }
});


React.renderComponent(
  <ProfileForm url="/awesome"/>,
  document.getElementById('form-wrap')
);