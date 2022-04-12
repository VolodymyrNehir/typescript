import axios from "axios";

import {baseURL} from "../Constants";

export const axiosService = axios.create({baseURL});
