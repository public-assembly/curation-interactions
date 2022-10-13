import { curationTargetTypes } from './constants'

export function returnCurationType(key: keyof typeof curationTargetTypes) {
  return curationTargetTypes[key]
}
