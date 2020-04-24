import React, { Component } from "react";

export default class contentTable extends Component {
  render() {
    const { dataResult, isEnable } = this.props;
    return (
      <div>
        {isEnable && (
          <ul className="table-conteiner">
            <h1>User Name</h1>

            {dataResult.map((el) => (
              <li>
                <a href={el.html_url}>{el.login}</a>
              </li>
            ))}
          </ul>
        )}
      </div>
    );
  }
}
