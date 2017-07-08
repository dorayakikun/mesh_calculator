// @flow
import React, { PropTypes } from 'react'
import { Dropdown, Input, Label, Message } from 'semantic-ui-react'

export type SeparatorItem = {
  text: string,
  value: string
}

const separatorOptions: Array<SeparatorItem> = [
  {
    text: 'commas',
    value: ','
  },
  {
    text: 'dots',
    value: '.'
  }
]

const fetchTextFrom = (
  options: Array<SeparatorItem>,
  value: string
): string => {
  return options.filter(o => o.value === value).map(o => o.text).toString()
}
const MeshInput = ({
  errorMessage,
  meshesString,
  separator,
  onMeshesChanged,
  onSeparatorChanged
}: any) =>
  <div>
    <Input
      error={errorMessage !== ''}
      fluid
      label={<Label color="teal">mesh codes</Label>}
      placeholder="e.g. 5339-35-97"
      onChange={onMeshesChanged}
      value={meshesString}
    />
    {errorMessage !== '' &&
      <Message negative>
        <Message.Header>Waffle Map Error</Message.Header>
        <p>{errorMessage}</p>
      </Message>}
    <Dropdown
      fluid
      onChange={onSeparatorChanged}
      options={separatorOptions}
      text={`Split with ${fetchTextFrom(separatorOptions, separator)}.`}
      value={separator}
    />
  </div>

MeshInput.propTypes = {
  meshesString: PropTypes.string.isRequired,
  separator: PropTypes.string.isRequired,
  onMeshesChanged: PropTypes.func.isRequired,
  onSeparatorChanged: PropTypes.func.isRequired
}

export default MeshInput
