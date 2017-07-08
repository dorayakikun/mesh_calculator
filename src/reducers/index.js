// @flow
import { meshToBounds, meshToLatLng } from '../MeshCalculator'
import * as AppActions from '../actions/AppActions'

import type { Action } from '../actions/AppActions'
import type { Bounds, LatLng } from '../MeshCalculator'

export type MeshInputState = {
  errorMessage: string,
  meshesString: string,
  separator: string
}

export type Mesh = {
  code: string,
  center: LatLng,
  bounds: Bounds
}

export type State = {
  meshInput: MeshInputState,
  meshes: Array<Mesh>
}

const initialState: State = {
  meshInput: {
    errorMessage: '',
    meshesString: '',
    separator: '.'
  },
  meshes: []
}

export default (state: State = initialState, action: Action): State => {
  switch (action.type) {
    case AppActions.INPUT_MESHES:
      const { meshesString } = action.payload
      return stateFrom(meshesString, state)
    case AppActions.SELECT_SEPARATOR:
      const { separator } = action.payload
      return {
        ...state,
        meshInput: {
          ...state.meshInput,
          separator
        }
      }
    default:
      return state
  }
}

/**
 * Create state from meshCodes.
 * If meshCodes are invalid then return previous state(with an error message).
 *
 * @param meshCodes
 * @param state
 * @returns {Array<Bounds>}
 */
const stateFrom = (meshCodes: string, state: State): State => {
  const { separator } = state.meshInput
  try {
    return {
      meshInput: {
        ...state.meshInput,
        errorMessage: '',
        meshesString: meshCodes
      },
      meshes: meshCodes
        .split(separator)
        .filter(mesh => mesh !== '')
        .map(mesh => {
          return {
            code: mesh,
            center: meshToLatLng(mesh),
            bounds: meshToBounds(mesh)
          }
        })
    }
  } catch (e) {
    console.log('Waffle Map Error: \n', e.message)
    return {
      meshInput: {
        ...state.meshInput,
        errorMessage: e.message,
        meshesString: meshCodes
      },
      meshes: state.meshes
    }
  }
}
