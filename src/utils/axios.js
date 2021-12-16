import axios from 'axios';
import { Url } from './consts';

export const instance = axios.create({
	baseURL: Url.base,
	timeout: 5000,
	headers: { 'Content-Type': 'application/json' },
});
