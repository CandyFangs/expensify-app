import React from 'react';
import ReactDOM from 'react-dom';

const Info = (props) => (
	<div>
	  <h1>Info</h1>
	  <p>The info is {props.info}</p>
	</div>
);

const withAdminWarning = (WrappedComponent) => {
  return (props) => (
    <div>
      {props.isAdmin && <p>This is a private info, please do not share.</p>}      
      <WrappedComponent {...props}/>
    </div>
  );
};

const requireAuthentification = (WrappedComponent) => {
	return (props) => (
    <div>
      {props.isAutheticated ? (
      	<WrappedComponent {...props}/>
      ) : (
        <p>Please log in to view the info.</p>
      )}
    </div>
	);
};

const AdminInfo = withAdminWarning(Info);
const AuthInfo = requireAuthentification(Info);

ReactDOM.render(<AdminInfo isAdmin={false} info='this are the details'/>, document.getElementById('app'));
ReactDOM.render(<AuthInfo isAutheticated={false} info='this are the details'/>, document.getElementById('app'));