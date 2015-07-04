var React = require('react');

var Notes = React.createClass({
    render: function(){
        return(
            <div>
                Notes <br />
                Username: {this.props.username} <br />
                Notes: {this.props.notes} <br />

            </div>
        )
    }
});

module.exports = Notes;