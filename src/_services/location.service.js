import axios from 'axios';
import { requestsHelpers as config } from '../_helpers';

export default function feachLocations() {
  return axios.get('', config.apiLocationConfig);
}
