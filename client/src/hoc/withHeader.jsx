import React from 'react'

const withHeader = (WrappedComponent) => {
  return function(props) {
    return (
      <>
        <div>
          <h1 className=" font-serif text-7xl">Hello</h1>
        </div>
        <WrappedComponent {...props} />
      </>
    );
  }
}

export default withHeader