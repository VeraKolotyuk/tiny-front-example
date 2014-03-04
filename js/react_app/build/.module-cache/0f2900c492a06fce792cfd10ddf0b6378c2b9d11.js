/** @jsx React.DOM */
var ProfileForm = React.createClass({displayName: 'ProfileForm',

  handleSubmit: function() {
    var email = this.refs.email.getDOMNode().value.trim();
    var password = this.refs.password.getDOMNode().value.trim();



    /*  TODO:: add more fields ...  */
    return false;
  },
  getInitialState: function() {
    return {data: []};
  },
  render: function() {
    return (
      React.DOM.form( {role:"form", name:"profileForm", 'data-ajax':"formSubmitSuccess", onSubmit:this.handleSubmit}, 
          React.DOM.div( {className:"form-inner"}, 
            React.DOM.div( {className:"form-group"}, 
              React.DOM.label( {for:"exampleInputEmail1"}, "Email address"),
              React.DOM.input( {type:"email", className:"form-control", id:"exampleInputEmail1", placeholder:"Enter email", ref:"email"}),
              React.DOM.div( {className:"help-block"}, this.props.error)
            ),
            React.DOM.div( {className:"form-group"}, 
              React.DOM.label( {for:"exampleInputPassword1"}, "Password"),
              React.DOM.input( {type:"password", className:"form-control", id:"exampleInputPassword1", placeholder:"Password", ref:"password"}),
              React.DOM.div( {className:"help-block"})
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