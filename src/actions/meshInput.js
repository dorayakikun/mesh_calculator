// @flow

import type { SeparatorItem } from '../components/meshInput'

export const INPUT_MESHES = 'INPUT_MESHES'
export const SELECT_SEPARATOR = 'SELECT_SEPARATOR'

export type MeshInputAction =
  | {
      type: typeof INPUT_MESHES,
      payload: {
        meshes: string
      }
    }
  | {
      type: typeof SELECT_SEPARATOR,
      payload: {
        value: string
      }
    }

export const inputMeshes = (meshes: string): MeshInputAction => ({
  type: INPUT_MESHES,
  payload: { meshes }
})

export const selectSeparator = (value: string): MeshInputAction => ({
  type: SELECT_SEPARATOR,
  payload: {
    value
  }
})
