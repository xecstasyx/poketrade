var CandidateListItem = createReactClass({
  getInitialState: function() {
    return {
      screening: this.props.screening
    };
  },
  render: function() {
    var screening = this.state.screening;
    return (
      <li className="list-group-item align-items-start animated lightSpeedIn mb-1">
        <div className="row">
          <div className="col-sm-8">
            <p className="m-0">
              <strong>{screening.name}</strong>
              <br />
              ({screening.email})
              <br/>
              {screening.phone}
            </p>
          </div>

          <div className="col-sm-4">
            <div className="row text-sm-right text-left mt-2">
              <div className="col">
                <span className="badge badge-success" style={{"fontSize": "0.80rem"}}>{screening.status}</span>
              </div>
            </div>

            <hr />
            <div className="row text-left text-sm-center">
              <div className="col-sm-6">
                <a href="#">
                  <i className="far fa-envelope"></i>
                  &nbsp;
                  Enviar correo
                </a>
              </div>

              <div className="col-sm-6">
                <a href="#">
                  <i className="far fa-trash-alt"></i>
                  &nbsp;
                  Remover
                </a>
              </div>
            </div>
          </div>
        </div>
      </li>
    );
  }
});
