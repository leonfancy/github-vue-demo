import _ from 'lodash'

export function truncate(str, length = 150) {
  return _.truncate(str, {'length': length});
}

export function extractDate (date) {
  return _.split(date, 'T')[0]
}
