var Stash = React.createClass({
	
	
	
  render: function() {
  	if(this.props.snacks){
    snackData = this.props.snacks.map(function (snack,index) {
      return (<Snack key={snack.type} data={snack}>{snack.type}: <span className="count">{snack.stash_count}</span></Snack>);
     });
  }
    return <div className="stash">
    			<h2>My Stash</h2>
    			<ul>
    				{snackData}
    			</ul>
    		</div>;
  }
});