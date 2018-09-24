const React = require('react');

const Error = ({error, description}) => {
  const defaultText = "There is not details";
  //Object.entries(description).map(x=>x.join(": ")).join("\n")
  const errorString = description ? JSON.stringify(description) : defaultText;

  return (
    <div className="container-content-error">
      <p className="container-content-error-title">
        {error}
      </p>
      <p className="container-content-error-detail">
        Details:
      </p>
      <pre className="container-content-error-description">
        {errorString}
      </pre>
    </div>
  )
}
module.exports = Error;
