import React from 'react'

function Alert(props) {
  return (
        props.alert && <div className="alert alert-warning alert-dismissible fade show" role="alert">
            {props.alert.msg}:{props.alert.type}
            <button type="button" className="close" data-dismiss="alert" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
        </div>
  )
}

export default Alert