import { useDispatch} from 'react-redux';
import { AppDispatch } from '../models/state';

export const useAppDispatch = () => useDispatch<AppDispatch>();
