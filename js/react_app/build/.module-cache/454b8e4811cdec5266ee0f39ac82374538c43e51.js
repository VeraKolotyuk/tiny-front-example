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
          React.DOM.div( {class:"form-inner"}, 
            React.DOM.div( {class:"form-group"}, 
              React.DOM.label( {for:"exampleInputEmail1"}, "Email address"),
              React.DOM.input( {type:"email", class:"form-control", id:"exampleInputEmail1", placeholder:"Enter email", ref:"email"}),
              React.DOM.div( {class:"help-block"})
            ),
            React.DOM.div( {class:"form-group"}, 
              React.DOM.label( {for:"exampleInputPassword1"}, "Password"),
              React.DOM.input( {type:"password", class:"form-control", id:"exampleInputPassword1", placeholder:"Password", ref:"password"}),
              React.DOM.div( {class:"help-block"})
            ),
            React.DOM.div( {class:"form-group"}, 
              React.DOM.label( {for:"exampleInputFile"}, "Personal Info"),
              React.DOM.textarea( {class:"form-control", rows:"3"})
            ),
            React.DOM.div( {class:"checkbox js-want-more"}, 
              React.DOM.label(null, 
                React.DOM.input( {type:"checkbox", checked:true} ), " I want to tell more"
              )
            ),

            React.DOM.div( {class:"form-group more-info"}, 
                React.DOM.label( {for:"exampleInputFile"}, "Profession"),
                React.DOM.select( {class:"form-control"}, 
                  React.DOM.option(null, "1"),
                  React.DOM.option(null, "2"),
                  React.DOM.option(null, "3"),
                  React.DOM.option(null, "4"),
                  React.DOM.option(null, "5")
                )
            ),
            React.DOM.button( {type:"submit", class:"btn btn-default"}, "Submit")
          )
      )
    );
  }
});


React.renderComponent(
  ProfileForm( {url:"/awesome"}),
  document.getElementById('form-wrap')
);