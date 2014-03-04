/** @jsx React.DOM */
var ProfileForm = React.createClass({displayName: 'ProfileForm',

  errors: {},

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
      React.DOM.form( {role:"form", name:"profileForm", 'data-ajax':"formSubmitSuccess", onSubmit:this.handleSubmit}, 
          React.DOM.div( {className:"form-inner"}, 
            React.DOM.div( {className:"form-group {this.errors.email.hasError}"}, 
              React.DOM.label( {for:"exampleInputEmail1"}, "Email address"),
              React.DOM.input( {type:"email", className:"form-control", id:"exampleInputEmail1", placeholder:"Enter email", ref:"email"}),
              React.DOM.div( {className:"help-block"}, this.errors.email.text)
            ),
            React.DOM.div( {className:"form-group  {this.errors.password.hasError}"} , 
              React.DOM.label( {for:"exampleInputPassword1"}, "Password"),
              React.DOM.input( {type:"password", className:"form-control", id:"exampleInputPassword1", placeholder:"Password", ref:"password"}),
              React.DOM.div( {className:"help-block"}, this.errors.password.text)
            ),
            React.DOM.div( {className:"form-group"}, 
              React.DOM.label( {for:"exampleInputFile"}, "Personal Info"),
              React.DOM.textarea( {className:"form-control", rows:"3"})
            ),
            React.DOM.div( {className:"checkbox js-want-more"}, 
              React.DOM.label(null, 
                React.DOM.input( {type:"checkbox", checked:true} ), " I want to tell more"
              )
            ),

            React.DOM.div( {className:"form-group more-info"}, 
                React.DOM.label( {for:"exampleInputFile"}, "Profession"),
                React.DOM.select( {className:"form-control"}, 
                  React.DOM.option(null, "1"),
                  React.DOM.option(null, "2"),
                  React.DOM.option(null, "3"),
                  React.DOM.option(null, "4"),
                  React.DOM.option(null, "5")
                )
            ),
            React.DOM.button( {type:"submit", className:"btn btn-default"}, "Submit")
          )
      )
    );
  }
});


React.renderComponent(
  ProfileForm( {url:"/awesome"}),
  document.getElementById('form-wrap')
);