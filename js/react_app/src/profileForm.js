/** @jsx React.DOM */
var ProfileForm = React.createClass({

  errors: {},

  handleSubmit: function() {
    var email = this.refs.email.getDOMNode().value.trim();
    var password = this.refs.password.getDOMNode().value.trim();

    if (email === "") {
      this.errors.email = "Can't be blank"
    }

    if (password === "") {
      this.errors.password = "Can't be blank"
    }
    this.setState({errors: this.errors});
    /*  TODO:: add more fields ...  */
    return false;
  },
  getInitialState: function() {
    return {data: []};
  },
  render: function() {
    return (
      <form role="form" name="profileForm" data-ajax="formSubmitSuccess" onSubmit={this.handleSubmit}>
          <div className="form-inner">
            <div className="form-group" ref="emailWrap">
              <label for="exampleInputEmail1">Email address</label>
              <input type="email" className="form-control" id="exampleInputEmail1" placeholder="Enter email" ref="email"/>
              <div className="help-block">{this.errors.email}</div>
            </div>
            <div className="form-group">
              <label for="exampleInputPassword1">Password</label>
              <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" ref="password"/>
              <div className="help-block">{this.errors.password}</div>
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