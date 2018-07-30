var CandidateList = createReactClass({
  getInitialState: function() {
    return {
      screenings: this.props.screenings,
      list: this.props.list
    };
  },
  drawListItems() {
    var screenings = this.state.screenings;
    if (screenings.length > 0) {
      return screenings.map(function(screening, index){
        return (
          <CandidateListItem
            key={"screening_child_" + index}
            screening={screening}
          />
        )
      });
    } else {
      return (
        <div>
          <p>Se están cargando los candidatos...</p>
        </div>
      )
    };
  },
  componentDidMount: function(){
    App.cable.subscriptions.create({
      channel: "ListChannel",
      id: this.state.list.id
    }, {
      received: this.received
    });
  },
  received: function (data) {
    this.state.screenings.push(data.screening);
    this.setState(this.state);
  },
  render: function() {
    var screenings = this.state.screenings;
    return (
      <div className="list-group">
        { this.drawListItems() }
      </div>
    );
  }
});
