// import PropTypes from 'prop-types'

'use strict';

function isString(myVar) {
    return (typeof myVar === 'string' || myVar instanceof String)
}
function UfpPropTypeRegex(regExp) {
    // console.log('PropTypes contains creating ', values)
    if (!(regExp instanceof RegExp)) {
        throw new Error('regExRequires instance of RegExp as only parameter')
    }

    function validate(props, propName, componentName) {
        // console.log('PropTypes contains checking ', props, propName, componentName)

        if (props[propName]) {
            // console.log('PropTypes prop exists', props, propName, componentName)

            // obtain value from checked object
            const value = props[propName]

            // verify type is array
            if (isString(value)) {
                // console.log('PropTypes prop is array', props[propName], values)
                if (!regExp.test(value))
                // console.log('PropTypes !found && !notted')
                    return new Error(propName + ' value does not match regexp ' + regExp + ' in ' + componentName)
            }
        } else {
            const res = propName + ' is not of type string in ' + componentName

            // console.log('PropTypes not array', res)

            return new Error(res)
        }

        // console.log('PropTypes ALL OK')

        // all ok
        return null
    }

    function checkType(isRequired, props, propName, componentName, location) {
        componentName = componentName || 'ANONYMOUS'
        if (props[propName] == null) {
            if (isRequired) {
                return new Error(
                    ('Required ' + location + ' `' + propName + '` was not specified in ') +
                    ('`' + componentName + '`.')
                )
            }
            return null
        } else {
            return validate(props, propName, componentName, location)
        }
    }

    var chainedCheckType = checkType.bind(null, false)
    chainedCheckType.isRequired = checkType.bind(null, true)

    return chainedCheckType
}

module.exports = UfpPropTypeRegex
